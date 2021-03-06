//InputSample 에서는 초기화 버튼을 누르면 포커스가 초기화 버튼에 그대로 남아있게 됩니다.

// 한번, 초기화 버튼을 클릭했을 때 이름 input 에 포커스가 잡히도록 useRef 를 사용하여 기능을 구현해보겠습니다.

import React, {useState, useRef} from 'react';

function InputSample(){
  //input상태관리하기
  //input의 개수가 여러개일때는
  //input 에 name 을 설정하고 이벤트가 발생했을 때 이 값을 참조하는 것이 편하다.
  //input.name => name, nickname으로 참조해서 상태관리
  const [inputs, setInputs]=useState({
    name : '',
    nickname : '',
  })
  
  const {name, nickname}=inputs; // // 비구조화 할당을 통해 값 추출
  //useRef
  const nameInput = useRef();


  const onChange = (e) =>{
    const {value, name} = e.target;
    setInputs({
      // 리액트에서 객체를 업데이트하게 될 때에는 기존 객체를 직접 수정하면 안되고, 
      //새로운 객체를 만들어서, 새 객체에 변화를 주어야 됩니다.
      ...inputs,
      [name] : value,  //input[name] = e.target.value, name 키를 가진 값을 value 로 설정

    })
  }
  const onReset = () =>{
    setInputs({
      name : '',
      nickname : '',
    })
    nameInput.current.focus(); //Ref 객체의 .current 값은 우리가 원하는 DOM 을 가르키게 됩니다
  }

  return(
    <div>
      <div>
        {/* //포커스를 줄 input에다가  */}
        <input 
          name="name" 
          value={name} 
          placeholder="이름을 입력하시오"
          onChange={onChange}
          ref={nameInput}
          />
        <input 
          name="nickname" 
          value={nickname} 
          placeholder="별명을 입력하시오"
          onChange={onChange}
           />
        <button onClick={onReset}>초기화</button>
      </div>
        <p>값 : {name}({nickname})</p>
    </div>

  );
}

export default InputSample;