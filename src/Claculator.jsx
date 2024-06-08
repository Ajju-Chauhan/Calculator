import { useState } from 'react';
import './App.css';

function Calculator() {
  const [input, setInput] = useState('');
  const [ans, setAns] = useState('');

  const handleButton = (value) => {
    setInput(input + value);
  };

  const handleClear = () => {
    setInput('');
    setAns('');
  };

  const handleEqual = () => {
    try {
      const result = eval(input); // Be cautious using eval in real applications
      setAns(result);
    } catch (error) {
      setAns('Error');
    }
  };

  return (
    <div className='mainDiv'>
      <h3>React Calculator</h3>
      <div className='input'>{input}</div>
      <div className='ansdiv'>{ans}</div>
      <div className="buttonContainer">
        <button className='button' onClick={() => handleButton('7')}>7</button>
        <button className='button' onClick={() => handleButton('8')}>8</button>
        <button className='button' onClick={() => handleButton('9')}>9</button>
        <button className='button' onClick={() => handleButton('+')}>+</button>
        <button className='button' onClick={() => handleButton('4')}>4</button>
        <button className='button' onClick={() => handleButton('5')}>5</button>
        <button className='button' onClick={() => handleButton('6')}>6</button>
        <button className='button' onClick={() => handleButton('-')}>-</button>
        <button className='button' onClick={() => handleButton('1')}>1</button>
        <button className='button' onClick={() => handleButton('2')}>2</button>
        <button className='button' onClick={() => handleButton('3')}>3</button>
        <button className='button' onClick={() => handleButton('*')}>*</button>
        <button className='button' onClick={handleClear}>C</button>
        <button className='button' onClick={() => handleButton('0')}>0</button>
        <button className='button' onClick={handleEqual}>=</button>
        <button className='button' onClick={() => handleButton('/')}>/</button>
      </div>
    </div>
  );
}

export default Calculator;
