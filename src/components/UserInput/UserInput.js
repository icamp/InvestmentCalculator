import './UserInput.css';

const UserInput = () => {
  const submitHandler = (e) => {
    e.preventDefault();
    console.log('submit');
  };

  const resetHandler = () => {
    console.log('reset');
  };

  const inputChangeHandler = (inputIdentifier, value) => {
    console.log(inputIdentifier, value);
  };

  return (
    <form className='form' onSubmit={submitHandler}>
      <div className='input-group'>
        <p>
          <label htmlFor='current-savings'>Current Savings ($)</label>
          <input
            type='number'
            id='current-savings'
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
            onChange={(e) =>
              inputChangeHandler('yearly-savings', e.target.value)
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
