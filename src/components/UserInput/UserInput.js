import { useState } from 'react';
import './UserInput.css';

const initialUserInput = {
  'current-savings': 10000,
  'yearly-contribution': 1200,
  'expected-return': 7,
  duration: 10,
};

const UserInput = () => {
  const [userInput, setUserInput] = useState(initialUserInput);

  const submitHandler = (e) => {
    e.preventDefault();
    console.log('userInput:: ', userInput);
  };

  const resetHandler = () => {
    setUserInput(initialUserInput);
  };

  const inputChangeHandler = (inputIdentifier, value) => {
    setUserInput((previousInput) => {
      return {
        ...previousInput,
        [inputIdentifier]: value,
      };
    });
  };

  return (
    <form className='form' onSubmit={submitHandler}>
      <div className='input-group'>
        <p>
          <label htmlFor='current-savings'>Current Savings ($)</label>
          <input
            type='number'
            id='current-savings'
            value={userInput['current-savings']}
            onChange={(e) =>
              inputChangeHandler('current-savings', e.target.value)
            }
          />
        </p>
        <p>
          <label htmlFor='yearly-contribution'>Yearly Savings ($)</label>
          <input
            type='number'
            id='yearly-contribution'
            value={userInput['yearly-contribution']}
            onChange={(e) =>
              inputChangeHandler('yearly-contribution', e.target.value)
            }
          />
        </p>
      </div>
      <div className='input-group'>
        <p>
          <label htmlFor='expected-return'>
            Expected Interest (%, per year)
          </label>
          <input
            type='number'
            id='expected-return'
            value={userInput['expected-return']}
            onChange={(e) =>
              inputChangeHandler('expected-return', e.target.value)
            }
          />
        </p>
        <p>
          <label htmlFor='duration'>Investment Duration (years)</label>
          <input
            type='number'
            id='duration'
            value={userInput['duration']}
            onChange={(e) => inputChangeHandler('duration', e.target.value)}
          />
        </p>
      </div>
      <p className='actions'>
        <button onClick={resetHandler} type='reset' className='buttonAlt'>
          Reset
        </button>
        <button type='submit' className='button'>
          Calculate
        </button>
      </p>
    </form>
  );
};

export default UserInput;
