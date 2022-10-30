import * as React from "react";
import Grid from "@mui/material/Grid";
import Box from "@mui/material/Box";
import Button from "@mui/material/Button";
import dayjs, { Dayjs } from "dayjs";
import TextField from "@mui/material/TextField";
import { LocalizationProvider } from "@mui/x-date-pickers/LocalizationProvider";
import { AdapterDayjs } from "@mui/x-date-pickers/AdapterDayjs";
import { DateTimePicker } from "@mui/x-date-pickers/DateTimePicker";

import "./index.scss";

const Form = () => {
  const [value, setValue] = React.useState<Dayjs | null>(
    dayjs("2014-04-14T21:11:54")
  );

  const handleChange = (newValue: Dayjs | null) => {
    setValue(newValue);
  };

  return (
    <div className="form-post">
      <Box sx={{ width: "100%" }}>
        <Grid container rowSpacing={2} columnSpacing={{ xs: 1, sm: 2, md: 3 }}>
          <Grid item md={6}>
            <TextField label="Check ID" color="warning" focused />
          </Grid>
          <Grid item md={6}>
            <TextField label="Check ID" color="warning" focused />
          </Grid>
          <Grid item md={6}>
            <TextField label="Check ID" color="warning" focused />
          </Grid>
          <Grid item md={6}>
            <TextField label="Check ID" color="warning" focused />
          </Grid>
          <Grid item md={6}>
            <TextField label="Check ID" color="warning" focused />
          </Grid>
          <Grid item md={6}>
            <LocalizationProvider dateAdapter={AdapterDayjs}>
              <DateTimePicker
                label="Created at"
                value={value}
                onChange={handleChange}
                renderInput={(params) => (
                  <TextField color="warning" {...params} />
                )}
              />
            </LocalizationProvider>
          </Grid>
        </Grid>
        <div className="form-post__button">
          <Button variant="contained" color="warning" size="small">
            Add Customer
          </Button>
        </div>
      </Box>
      {/* <div className="form-post__button">Add Customer</div> */}
    </div>
  );
};

export default Form;
