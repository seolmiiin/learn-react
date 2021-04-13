import Hello from './hello';
import './App.css'


//데이터에 id를 추가했다. 이걸 왜 해야할까? 리액트는 컴포넌트가 각각의 person이 다르다는 걸 알방법이 없기 때문에
//리액트에게 컴포넌트가 서로 다르다는 것을 알려주는 방법이 컴포넌트에 key props를 추가하는 것
const persons = [	{
  id :1,
  name : 'seolmin',
  age : 32
},
{
  id :2,
  name : 'hyosung',
  age : 29
},
{
  id :3,
  name : 'sooin',
  age : 27
}
];

function renderPerson(person){
 return <Hello key={person.id} name={person.name} age={person.age} />
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
