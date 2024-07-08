import React, { useState } from 'react';
import { LocalizationProvider } from '@mui/x-date-pickers/LocalizationProvider';
import { AdapterDateFns } from '@mui/x-date-pickers/AdapterDateFns';
import { DatePicker } from '@mui/x-date-pickers/DatePicker';

const YearSelector = () => {
    const [selectedDate, setSelectedDate] = useState(new Date());
    const currentYear = new Date().getFullYear();

    return (
        <LocalizationProvider dateAdapter={AdapterDateFns}>
            <DatePicker
                views={['year']}
                label="Year"
                value={selectedDate}
                onChange={(newValue) => {
                    setSelectedDate(newValue);
                }}
                maxDate={new Date(currentYear, 11, 31)} // Setting the maximum date to the end of the current year
            />
        </LocalizationProvider>
    );
};

export default YearSelector;
