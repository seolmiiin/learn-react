import React, {useState} from 'react';

function InputSample(){
  //상태가 바뀔 부분을 생각해보자
  //input
  //[초기상태, 변화될상태]설정
let [text, setText]=useState('');
    //input에 입력한 값이 값에 보이기
let onChange=(e)=>{
     setText(e.target.value);
 
  }
let resetInput=()=>{
 setText('');
}
  //버튼을 누르면 input창 초기화


  return(
    
    <div>
      <input onChange={onChange} value={text} />
      <button onClick={resetInput}>초기화</button>
      <h1>값 :<b>{text}</b> </h1>
    </div>
    
  );
}

export default InputSample;