import Hello from './hello';

function App() {
  return (
    /*두개이상의 태그는 하나의 태그로 감싸있어야 한다 */
    <>
    <Hello />
    <Hello />
    <Hello />
    </>
  );
}

export default App;
