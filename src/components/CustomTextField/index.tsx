import * as React from "react";
import TextField from "@mui/material/TextField";
import { ITextfield } from "../../types";

const CustomTextField = ({
  id,
  value,
  label,
  onChange,
  error,
  helperText,
}: ITextfield) => {
  return (
    <TextField
      id={id}
      value={value}
      label={label}
      onChange={onChange}
      error={error}
      helperText={helperText}
      color="warning"
      required
      focused
    />
  );
};

export default CustomTextField;
