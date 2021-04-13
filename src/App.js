import Hello from './hello';
import './App.css'

function App() {
  return (
   
    <>
    <Hello />
    <Hello />
    {/* class 설정하는 법 : jsx에서는 class가 아니고 className이라고 사용 */}
    <div className="gray-box">안녕하세요</div>
    </>
  );
}

export default App;
