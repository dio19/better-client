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
  disabled,
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
      disabled={disabled}
      required
      focused
    />
  );
};

export default CustomTextField;
