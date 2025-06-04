import React, { useState, useRef } from 'react';
import Try from './Try';

const getBallNumber = () => {
  const number = [];

  while (true) {
    if (number.length == 4) {
      console.log('getBallNumber', number);
      return number;
    }

    const num = Math.floor(Math.random() * 10);

    if (!number.includes(num)) {
      number.push(num);
    }
  }
};

const NumberBaseball = () => {
  const [value, setValue] = useState('');
  const [tries, setTries] = useState([]);
  const [ballNumber, setBallNumber] = useState(getBallNumber); //lazy init
  const inputEl = useRef(null);

  const onSubmitForm = (e) => {
    e.preventDefault();

    if (value.length < 4) {
      return;
    }

    let strike = 0;
    let ball = 0;

    [...value].forEach((v, i) => {
      if (ballNumber[i] === parseInt(v)) {
        strike++;
      } else if (ballNumber.includes(parseInt(v))) {
        ball++;
      }
    });

    setTries((prev) => [...prev, { try: value, result: `${strike}스트라이크 ${ball}볼` }]);

    if (strike === 4) {
      alert('홈런~~~~!!');
      setBallNumber(getBallNumber);
      setTries([]);
    }

    setValue('');
    inputEl.current.focus();
  };

  const onChangeInput = (e) => {
    setValue(e.target.value);
  };

  return (
    <>
      <form onSubmit={onSubmitForm}>
        <input type="text" maxLength={4} ref={inputEl} value={value} onChange={onChangeInput}></input>
        <button>입력</button>
      </form>
      <div>
        <div>시도: {tries.length}회</div>
        <ul>
          {tries.map((value, index) => (
            <Try key={value.try + index} value={value} />
          ))}
        </ul>
      </div>
    </>
  );
};

export default NumberBaseball;
