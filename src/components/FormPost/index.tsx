import * as React from "react";
import * as Yup from "yup";
import { Formik } from "formik";
import Grid from "@mui/material/Grid";
import Box from "@mui/material/Box";
import Button from "@mui/material/Button";
import TextField from "@mui/material/TextField";
import dayjs, { Dayjs } from "dayjs";
import { LocalizationProvider } from "@mui/x-date-pickers/LocalizationProvider";
import { AdapterDayjs } from "@mui/x-date-pickers/AdapterDayjs";
import { DateTimePicker } from "@mui/x-date-pickers/DateTimePicker";

import { CustomerContext } from "../../context";
import CustomTextField from "../CustomTextField";

import "./index.scss";

const FormPost = () => {
  const INITIAL_FORM_STATE = {
    first: "",
    last: "",
    email: "",
    company: "",
    country: "",
  };

  const FORM_VALIDATION = Yup.object().shape({
    first: Yup.string().required("Required"),
    last: Yup.string().required("Required"),
    email: Yup.string().email("Invalid email.").required("Required"),
    company: Yup.string().required("Required"),
    country: Yup.string(),
  });

  const [valueDate, setValueDate] = React.useState<Dayjs | null>(dayjs());
  const { newCustomer } = React.useContext(CustomerContext);

  const handleChangeDate = (newValue: Dayjs | null) => {
    setValueDate(newValue);
  };

  return (
    <div className="form-post">
      <Box sx={{ width: "100%" }}>
        <Formik
          initialValues={{
            ...INITIAL_FORM_STATE,
          }}
          validationSchema={FORM_VALIDATION}
          onSubmit={(values) => {
            newCustomer({ ...values, created_at: dayjs(valueDate).toString() });
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
                    helperText={touched.first && errors.first}
                  />
                </Grid>
                <Grid item md={6}>
                  <CustomTextField
                    id="last"
                    value={values.last}
                    label="Lastname"
                    onChange={handleChange}
                    error={touched.last && Boolean(errors.last)}
                    helperText={touched.last && errors.last}
                  />
                </Grid>
                <Grid item md={6}>
                  <CustomTextField
                    id="email"
                    value={values.email}
                    label="Email"
                    onChange={handleChange}
                    error={touched.email && Boolean(errors.email)}
                    helperText={touched.email && errors.email}
                  />
                </Grid>
                <Grid item md={6}>
                  <CustomTextField
                    id="company"
                    value={values.company}
                    label="Company"
                    onChange={handleChange}
                    error={touched.company && Boolean(errors.company)}
                    helperText={touched.company && errors.company}
                  />
                </Grid>
                <Grid item md={6}>
                  <CustomTextField
                    id="country"
                    value={values.country}
                    label="Country"
                    onChange={handleChange}
                    error={touched.country && Boolean(errors.country)}
                    helperText={touched.country && errors.country}
                  />
                </Grid>
                <Grid item md={6}>
                  <LocalizationProvider dateAdapter={AdapterDayjs}>
                    <DateTimePicker
                      label="Created at"
                      value={valueDate}
                      onChange={handleChangeDate}
                      renderInput={(params) => (
                        <TextField required {...params} />
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
                >
                  Add Customer
                </Button>
              </div>
            </form>
          )}
        </Formik>
      </Box>
    </div>
  );
};

export default FormPost;
