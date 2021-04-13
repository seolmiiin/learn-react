import Hello from './hello';
import './App.css'

function App() {
  return (
   
    <>
    {/* Props로 컴포넌트에 데이터 전달하기 */}
    <Hello name='react' something={true} papapapa={['hello', 1,2,3,4, true]} />
    <Hello name='javascript' />
    <Hello name='seolmin' color="blue" />
      {/*
Hello component에 name이라는 값을 전달하고 싶다면 이렇게 작성
이것이 바로 props를 이용하여 App컴포넌트에 데이터 보내는 방법이다. 
props의 이름은 name 이고 name에 "react"라는 값을 담아 App 컴포넌트에 보낸 것
*/}
    </>
  );
}

export default App;
