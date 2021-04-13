import React from 'react';


function Hello(){
  const name = 'React'
  const style = {
    color : 'red',
    fontSize : 24
  }
  return(
    <>
    <div style={style}>hello {name}!</div>
    </>
  );
}

//내보내기
export default Hello;