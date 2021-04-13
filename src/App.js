import Hello from './hello';
import './App.css'
import Wrapper from './wrapper';



function App() {
  return (
   
    <Wrapper>
      <Hello color="orange" />
      <Hello name="seolmin" />
      <Hello color ="green" />
      <Hello  name ="hyosung" color="blue" />

    </Wrapper>
  );
}

export default App;
