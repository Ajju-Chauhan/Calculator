import { useState } from 'react';
import './App.css'
function Calculator(){
    const [input , setInput] = useState('');
    const [ans, setans] = useState('');
    const handlebutton = (value) => {
        setInput(input + value);
      };
    const handleClear = () => {
        setInput('');
        setans('')
      };
      const handleEqual = () => {
        try {
          setans(eval(input)); // Be cautious using eval in real applications
        } catch (error) {
          setans('Error');
        }
      };
    return (
        <div className='mainDiv'>
            <h3>React Calculator</h3>
            <div className='input'>{input}</div>
            <div className='ansdiv'>{ans}</div>
            <div className="buttoncantainer">
                <button className='button' onClick={()=> handlebutton('7')}>7</button>
                <button className='button' onClick={()=> handlebutton('8')}>8</button>
                <button className='button' onClick={()=> handlebutton('9')}>9</button>
                <button className='button' onClick={()=> handlebutton('+')}>+</button>
                <button className='button' onClick={()=> handlebutton('4')}>4</button>
                <button className='button' onClick={()=> handlebutton('5')}>5</button>
                <button className='button' onClick={()=> handlebutton('6')}>6</button>
                <button className='button' onClick={()=> handlebutton('-')}>-</button>
                <button className='button' onClick={()=> handlebutton('1')}>1</button>
                <button className='button' onClick={()=> handlebutton('2')}>2</button>
                <button className='button' onClick={()=> handlebutton('3')}>3</button>
                <button className='button' onClick={()=> handlebutton('*')}>*</button>
                <button className='button' onClick={handleClear}>C</button>
                <button className='button' onClick={()=> handlebutton('0')}>0</button>
                <button className='button' onClick={handleEqual}>=</button>
                <button className='button' onClick={()=> handlebutton('/')}>/</button>
                
            </div>
        </div>
    )
}
export default Calculator;