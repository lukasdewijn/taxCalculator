import React from 'react';
import TextField from '@mui/material/TextField';
import InputAdornment from '@mui/material/InputAdornment';

const IntegerInput = ({ label, value, setValue }) => {
    const handleInputChange = (event) => {
        const newValue = event.target.value;
        if (newValue === '' || /^[0-9]+$/.test(newValue)) {
            setValue(newValue);
        }
    };

    return (
        <TextField
            placeholder={label}
            type="text"
            value={value}
            onChange={handleInputChange}
            InputProps={{
                startAdornment: <InputAdornment position="start">€</InputAdornment>,
            }}
            fullWidth
            className="form-control"
            style={{ marginBottom: '20px' }}
        />
    );
};

export default IntegerInput;
