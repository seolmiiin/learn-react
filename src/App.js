import Hello from './hello';
import './App.css'

const persons = [	{
  name : 'seolmin',
  age : 32
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

function renderPerson(person){
 return <Hello name={person.name} age={person.age} />
}

function App() {
  return (
   
    <>
      {/* 이번에는 map() 의 인자로 함수를 넣기 */}
      {persons.map(renderPerson)}
    </>
  );
}

export default App;
