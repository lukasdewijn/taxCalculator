import React, { useEffect, useState } from 'react';
import { Select, MenuItem, FormControl, InputLabel, CircularProgress } from '@mui/material';

const GemeenteSelector = ({ municipality, setMunicipality }) => {
    const [municipalities, setMunicipalities] = useState([]);
    const [loading, setLoading] = useState(true);

    useEffect(() => {
        const fetchMunicipalities = async () => {
            try {
                const response = await fetch('https://api.belgium-municipalities.com/v1/municipalities');
                const data = await response.json();
                setMunicipalities(data);
                setLoading(false);
            } catch (error) {
                console.error('Error fetching municipalities:', error);
                setLoading(false);
            }
        };

        fetchMunicipalities();
    }, []);

    const handleChange = (event) => {
        setMunicipality(event.target.value);
    };

    return (
        <FormControl fullWidth margin="normal" className="form-control">
            <InputLabel>Gemeente</InputLabel>
            {loading ? (
                <CircularProgress />
            ) : (
                <Select
                    value={municipality}
                    onChange={handleChange}
                    placeholder="Select a municipality"
                >
                    {municipalities.map((gemeente) => (
                        <MenuItem key={gemeente.id} value={gemeente.name}>
                            {gemeente.name}
                        </MenuItem>
                    ))}
                </Select>
            )}
        </FormControl>
    );
};

export default GemeenteSelector;
