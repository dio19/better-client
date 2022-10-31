import * as React from "react";
import * as Yup from "yup";
import { Formik } from "formik";
import Grid from "@mui/material/Grid";
import Switch from "@mui/material/Switch";
import Button from "@mui/material/Button";
import TextField from "@mui/material/TextField";
import dayjs, { Dayjs } from "dayjs";
import { LocalizationProvider } from "@mui/x-date-pickers/LocalizationProvider";
import { AdapterDayjs } from "@mui/x-date-pickers/AdapterDayjs";
import { DateTimePicker } from "@mui/x-date-pickers/DateTimePicker";
import ErrorOutlineIcon from "@mui/icons-material/ErrorOutline";

import CustomTextField from "../CustomTextField";
import { CustomerContext } from "../../context";
import { DataCustomer } from "../../types";

import "./index.scss";

const Form = () => {
  const INITIAL_FORM_STATE = {
    first: "",
    last: "",
    email: "",
    company: "",
    country: "",
  };

  const { DataContext, deleteCustomerById, updateCustomerById } =
    React.useContext(CustomerContext);
  const [ID, setID] = React.useState(0);
  const [checked, setChecked] = React.useState(false);
  const [customerById, setCustomerById] = React.useState<
    DataCustomer | undefined
  >(undefined);
  const [idNotFound, setIdNotFound] = React.useState(false);
  const [method, setMethod] = React.useState(false);
  const [valueDate, setValueDate] = React.useState<Dayjs | null>(dayjs());

  const required = Yup.string().required("Required");
  const notRequired = Yup.string().notRequired();

  const FORM_VALIDATION = Yup.object().shape({
    first: method ? notRequired : required,
    last: method ? notRequired : required,
    email: method
      ? Yup.string().email("Invalid email.").notRequired()
      : Yup.string().email("Invalid email.").required("Required"),
    company: method ? notRequired : required,
    country: method ? notRequired : required,
  });

  const handleChangeMethod = (event: React.ChangeEvent<HTMLInputElement>) => {
    setMethod(event.target.checked);
  };

  const handleChangeDate = (newValue: Dayjs | null) => {
    setValueDate(newValue);
  };

  const handleChangeCheck = (e: React.FormEvent<HTMLInputElement>) => {
    const target = e.target as HTMLInputElement;
    setID(Number(target.value));
  };

  const handleKeyDown = (e: React.KeyboardEvent<HTMLElement>) => {
    if (e.key === "Enter" && ID !== 0) {
      const customer = DataContext.find((customer) => {
        return customer.id === ID;
      });

      if (customer !== undefined) {
        setCustomerById({ ...customer });
        setChecked(true);
        setValueDate(dayjs(customer.created_at));
      } else {
        setIdNotFound(true);
        setChecked(false);
      }
    }
  };

  return (
    <div className="form">
      <div className="form__check">
        <div className="input">
          <input
            className="input-container"
            type="number"
            onChange={handleChangeCheck}
            onKeyDown={handleKeyDown}
          />
          <span className="input-label">CHECK ID</span>
        </div>
        <div className="form__check__not-found">
          {idNotFound && !checked && (
            <>
              <ErrorOutlineIcon color="error" />
              <div className="form__check__not-found-text">ERROR</div>
            </>
          )}
        </div>
        {checked && (
          <div className="form__check__method">
            <Switch checked={method} onChange={handleChangeMethod} />
            <div className="form__check__method-label">
              {method ? "DELETE" : "PUT"}
            </div>
          </div>
        )}
      </div>
      <Formik
        initialValues={{
          ...INITIAL_FORM_STATE,
        }}
        validationSchema={FORM_VALIDATION}
        onSubmit={(values) => {
          method
            ? deleteCustomerById(ID)
            : updateCustomerById(ID, {
                ...values,
                created_at: dayjs(valueDate).toString(),
              });
        }}
      >
        {({ values, errors, touched, handleChange, handleSubmit }) => (
          <form onSubmit={handleSubmit}>
            <Grid
              container
              rowSpacing={2}
              columnSpacing={{ xs: 1, sm: 2, md: 3 }}
            >
              <Grid item md={6}>
                <CustomTextField
                  id="first"
                  value={values.first}
                  label="Firstname"
                  onChange={handleChange}
                  error={touched.first && Boolean(errors.first)}
                  helperText={
                    customerById !== undefined
                      ? customerById.first
                      : touched.first && errors.first
                  }
                  disabled={!checked || method}
                />
              </Grid>
              <Grid item md={6}>
                <CustomTextField
                  id="last"
                  value={values.last}
                  label="Lastname"
                  onChange={handleChange}
                  error={touched.last && Boolean(errors.last)}
                  helperText={
                    customerById !== undefined
                      ? customerById.last
                      : touched.last && errors.last
                  }
                  disabled={!checked || method}
                />
              </Grid>
              <Grid item md={6}>
                <CustomTextField
                  id="email"
                  value={values.email}
                  label="Email"
                  onChange={handleChange}
                  error={touched.email && Boolean(errors.email)}
                  helperText={
                    customerById !== undefined && !errors.email
                      ? customerById.email
                      : touched.email && errors.email
                  }
                  disabled={!checked || method}
                />
              </Grid>
              <Grid item md={6}>
                <CustomTextField
                  id="company"
                  value={values.company}
                  label="Company"
                  onChange={handleChange}
                  error={touched.company && Boolean(errors.company)}
                  helperText={
                    customerById !== undefined
                      ? customerById.company
                      : touched.company && errors.company
                  }
                  disabled={!checked || method}
                />
              </Grid>
              <Grid item md={6}>
                <CustomTextField
                  id="country"
                  value={values.country}
                  label="Country"
                  onChange={handleChange}
                  error={touched.country && Boolean(errors.country)}
                  helperText={
                    customerById !== undefined
                      ? customerById.country
                      : touched.country && errors.country
                  }
                  disabled={!checked || method}
                />
              </Grid>
              <Grid item md={6}>
                <LocalizationProvider dateAdapter={AdapterDayjs}>
                  <DateTimePicker
                    label="Created at"
                    value={valueDate}
                    onChange={handleChangeDate}
                    disabled={!checked || method}
                    renderInput={(params) => (
                      <TextField
                        helperText={
                          customerById !== undefined && customerById.created_at
                        }
                        {...params}
                      />
                    )}
                  />
                </LocalizationProvider>
              </Grid>
            </Grid>
            <div className="form-post__button">
              <Button
                type="submit"
                variant="contained"
                color="warning"
                size="small"
                disabled={!checked}
              >
                {method ? "Delete Customer" : "Update Customer"}
              </Button>
            </div>
          </form>
        )}
      </Formik>
    </div>
  );
};

export default Form;
