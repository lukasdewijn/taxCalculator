import React, { useState } from 'react';
import './CalculatorPage.css';
import YearSelector from './components/YearSelector';
import TypeSelector from './components/TypeSelector';
import PercentageInput from './components/PercentageInput';
import FurnitureSelector from './components/FurnitureSelector';
import IntegerInput from './components/IntegerInput';
import GemeenteSelector from './components/GemeenteSelector'; // Import the new component

const CalculatorPage = () => {
    const [type, setType] = useState('');
    const [typePercentage, setTypePercentage] = useState(50);
    const [furniture, setFurniture] = useState('');
    const [cadastralIncome, setCadastralIncome] = useState('');
    const [grossAnnualIncome, setGrossAnnualIncome] = useState('');
    const [municipality, setMunicipality] = useState(''); // State for selected municipality
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
            <IntegerInput
                label="Kadastraal Inkomen"
                value={cadastralIncome}
                setValue={setCadastralIncome}
            />
            <IntegerInput
                label="Bruto jaarlijkse huurinkomst"
                value={grossAnnualIncome}
                setValue={setGrossAnnualIncome}
            />
            <GemeenteSelector
                municipality={municipality}
                setMunicipality={setMunicipality}
            />
        </div>
    );
};

export default CalculatorPage;
