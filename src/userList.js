import React from 'react';

/*
재사용되는 코드를 일일히 넣는게 별로 좋지 않으니, 
컴포넌트를 재사용 할 수 있도록 새로 만들어주겠습니다.
참고로, 한 파일에 여러개의 컴포넌트를 선언해도 괜찮습니다.
*/

function User({user}){
  return (
    <div>
      <p>
        <strong>{user.username}</strong> : <span>{user.email}</span>
      </p>
    </div>
  );
}

function UserList(){
  const users = [
    {
      id: 1,
      username: 'velopert',
      email: 'public.velopert@gmail.com'
    },
    {
      id: 2,
      username: 'tester',
      email: 'tester@example.com'
    },
    {
      id: 3,
      username: 'liz',
      email: 'liz@example.com'
    }
  ];

  return(
    <div>
      {
        users.map(user=> <User user={user} key={user.id} />)
      }
{/* 만약에 배열을 렌더링 할 때 key 설정을 하지 않게된다면 
기본적으로 배열의 index 값을 key 로 사용하게 되고, 
아까 봤었던 경고메시지가 뜨게 됩니다. 이렇게 경고 메시지가 뜨는 이유는, 
각 고유 원소에 key 가 있어야만 배열이 업데이트 될 때 
효율적으로 렌더링 될 수 있기 때문입니다. */}
    </div>
  );
}
/*
배열이 고정적이라면 상관없겟지만, 
배열의 인덱스를 하나하나 조회해가면서 렌더링하는 방법은 
동적인 배열을 렌더링하지 못합니다.

동적인 배열을 렌더링해야 할 때에는 
자바스크립트 배열의 내장함수 map() 을 사용합니다. 
*/
export default UserList;