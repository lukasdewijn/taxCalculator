import React from 'react';

const FurnitureSelector = ({ furniture, setFurniture }) => {
    return (
        <div className="form-group">
            <label>Furniture</label>
            <div className="checkbox-group">
                <label className="checkbox-label">
                    <input
                        type="checkbox"
                        checked={furniture === 'furnished'}
                        onChange={() => setFurniture('furnished')}
                    />
                    Gemeubeld
                </label>
                <label className="checkbox-label">
                    <input
                        type="checkbox"
                        checked={furniture === 'unfurnished'}
                        onChange={() => setFurniture('unfurnished')}
                    />
                    Ongemeubeld
                </label>
            </div>
        </div>
    );
};

export default FurnitureSelector;
