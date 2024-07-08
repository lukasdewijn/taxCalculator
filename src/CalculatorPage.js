import React, { useState } from 'react';
import './CalculatorPage.css';
import YearSelector from './components/YearSelector';
import TypeSelector from './components/TypeSelector';
import PercentageInput from './components/PercentageInput';
import FurnitureSelector from './components/FurnitureSelector';

const CalculatorPage = () => {
    const [type, setType] = useState('');
    const [typePercentage, setTypePercentage] = useState(50);
    const [furniture, setFurniture] = useState('');
    const [cadastralIncome, setCadastralIncome] = useState(50);
    const [grossAnnualIncome, setGrossAnnualIncome] = useState(12000);
    const [taxBracket, setTaxBracket] = useState('€ 11.000 to € 50.000');
    const [totalTax, setTotalTax] = useState(7000);

    const handleCalculate = () => {
        // Calculation logic here
        setTotalTax(7000); // Example value
    };

    return (
        <div className="calculator-page">
            <h1>Calculator Roerend goed</h1>
            <div className="form-group">
                <label>Year</label>
                <YearSelector />
            </div>
            <TypeSelector type={type} setType={setType} />
            {type === 'Beroepsmatig' && (
                <div>
                    <label>Percentage: Privé / Beroepsmatig</label>
                    <div className="percentage-input-container">
                        <PercentageInput value={typePercentage} setValue={setTypePercentage} />
                    </div>
                </div>
            )}
            <FurnitureSelector furniture={furniture} setFurniture={setFurniture} />
        </div>
    );
};

export default CalculatorPage;
