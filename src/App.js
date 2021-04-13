import Hello from './hello';
import './App.css'

const persons = [	{
  name : 'seolmin',
  age : 30
},
{
  name : 'hyosung',
  age : 29
},
{
  name : 'sooin',
  age : 27
}
];


function App() {
  return (
   
    <>
    {/* map()함수 이용하면 배열에 데이터가 몇 개 있든지 컴포넌트 여러개 손쉽게 출력가능하다. */}
      {persons.map(person=><Hello name={person.name} age={person.age} />)}
    </>
  );
}

export default App;
