import React from 'react';
import Form from 'react-bootstrap/Form'

function PaymentOptions({ selectedOption, onOptionChange }) {
  return (
    <>
      <Form.Check
            label="Cash"
            name="group1"
            type="radio"
            value="Cash"
            checked={selectedOption === 'Cash'}
            onChange={() => onOptionChange('Cash')}
            id="cashCheck"
          />
      <Form.Check
            label="Credit/Debit Card"
            name="group1"
            type="radio"
            value="Card"
            checked={selectedOption === 'Card'}
            onChange={() => onOptionChange('Card')}
            id="cardCheck"
          />
      <Form.Check
            label="Transfer"
            name="group1"
            type="radio"
            value="Transfer"
            checked={selectedOption === 'Transfer'}
            onChange={() => onOptionChange('Transfer')}
            id="transferCheck"
          />
    </>
  );
}

export default PaymentOptions;
