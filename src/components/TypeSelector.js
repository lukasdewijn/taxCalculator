import React from 'react';

const TypeSelector = ({ type, setType }) => {
    const handleCheckboxChange = (selectedType) => {
        if (type === selectedType) {
            setType('');
        } else {
            setType(selectedType);
        }
    };

    return (
        <div className="form-group">
            <label>Type</label>
            <div className="checkbox-group">
                <label className="checkbox-label">
                    <input
                        type="checkbox"
                        checked={type === 'Privé'}
                        onChange={() => handleCheckboxChange('Privé')}
                    />
                    Privé
                </label>
                <label className="checkbox-label">
                    <input
                        type="checkbox"
                        checked={type === 'Beroepsmatig'}
                        onChange={() => handleCheckboxChange('Beroepsmatig')}
                    />
                    Beroepsmatig
                </label>
            </div>
        </div>
    );
};

export default TypeSelector;
