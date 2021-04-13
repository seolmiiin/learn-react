import React from 'react';


function Hello({name, color}){
  const style={
    fontSizd :24,
    color: color
  }
  return(
    <>
    <div style={style}> 안녕하세요 {name} !</div>    
    </>
  );
}
//  defaultProps 로 기본값 설정

// props를 지정하지 않았을때 기본적으로 사용할 값을 설정하고 싶을 때

// 만약에 App.js에서 props을 빼먹었을때
Hello.defaultProps={
  color : "black",
  name : "아무개"
  
}

//내보내기
export default Hello;