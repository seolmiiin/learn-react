import React, {useState} from 'react';

function Counter(){
  //이벤트 등록함수
  let [number, setNumber] = useState(0)
  let onIncrease = () => {
      return setNumber(number+1);
  }
  let onDecrease = () => {
       return setNumber(number-1);
  }
  return(
    <div>
      <h1>{number}</h1>
      <button onClick={onIncrease}>+1</button>
      <button onClick={onDecrease}>-1</button>
    </div>
  );
}

export default Counter;