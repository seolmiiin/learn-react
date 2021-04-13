import React, {useState} from 'react';

function InputSample(){
  //input상태관리하기
  const [inputs, setInputs]=useState({
    name : '',
    nickname : ''
  })
  
  const {name, nickname}=inputs; // // 비구조화 할당을 통해 값 추출

  const onChange = (e) =>{
    setInputs()
  }
  const onReset = (e) =>{
    setInputs()
  }

  return(
    <div>
      <div>
        <input 
          name="name" 
          value={name} 
          placeholder="이름을 입력하시오"
          onChange={onChange}
          />
        <input 
          name="nickname" 
          value={nickname} 
          placeholder="별명을 입력하시오"
          onChange={onChange}
           />
        <button onClick={onReset}>초기화</button>
      </div>
        <p>값 : 이름(닉네임)</p>
    </div>

  );
}

export default InputSample;