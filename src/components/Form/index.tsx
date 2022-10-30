import * as React from 'react';
import dayjs, { Dayjs } from 'dayjs';
import TextField from '@mui/material/TextField';
import Switch from '@mui/material/Switch';
import { LocalizationProvider } from '@mui/x-date-pickers/LocalizationProvider';
import { AdapterDayjs } from '@mui/x-date-pickers/AdapterDayjs';
import { DateTimePicker } from '@mui/x-date-pickers/DateTimePicker';
import Input from '../Input';

import './index.scss';

const Form = () => {
    const [method, setMethod] = React.useState(false);

    const [value, setValue] = React.useState<Dayjs | null>(
        dayjs('2014-08-18T21:11:54'),
      );
    
      const handleChange = (newValue: Dayjs | null) => {
        setValue(newValue);
      };

      const handleChangeMethod = (event: React.ChangeEvent<HTMLInputElement>) => {
        setMethod(event.target.checked);
      };

  return (
    <div className='form'>
        <div className='form__check'>
            <TextField label="Check ID" color="warning" focused />
            <div className='form__check__method'>
                <Switch checked={method} onChange={handleChangeMethod} color="warning"/>
                <div className='form__check__method-label'>{method ? "PUT" : "DELETE"}</div>
            </div>
        </div>
        <div className='form-post-container'>
            <Input type="text" label="Firstname" />
            <Input type="text" label="Lastname" />
            <Input type="text" label="Email" />
            <Input type="text" label="Country" />
            <Input type="text" label="Company" />
            <LocalizationProvider dateAdapter={AdapterDayjs}>
                <DateTimePicker
                label="Created at"
                value={value}
                onChange={handleChange}
                renderInput={(params) => <TextField color="warning" {...params} />}
                />
            </LocalizationProvider>
        </div>
        <div className='form__button'>Add Customer</div>
    </div>
  );
}

export default Form;