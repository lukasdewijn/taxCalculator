import React from 'react';
import TextField from '@mui/material/TextField';
import InputAdornment from '@mui/material/InputAdornment';

const PercentageInput = ({ value, setValue }) => {
    const handleInputChange = (event) => {
        const newValue = event.target.value;
        if (newValue === '' || (Number(newValue) >= 0 && Number(newValue) <= 100)) {
            setValue(newValue);
        }
    };

    return (
        <TextField
            type="number"
            value={value}
            onChange={handleInputChange}
            InputProps={{
                endAdornment: <InputAdornment position="end">%</InputAdornment>,
            }}
            fullWidth
            className="form-control"
        />
    );
};

export default PercentageInput;
