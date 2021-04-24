import React, { Component } from 'react';

class Counter extends Component {
  /*
  함수의 bind 를 사용하면, 
  해당 함수에서 가르킬 this 를 직접 설정해줄 수 있습니다. 
  constructor 에서는 props 파라미터로 받아오고 super(props) 를 호출해주어야 하는데, 
  이는 이 클래스가 컴포넌트로서 작동 할 수 있도록 해주는 
  Component 쪽에 구현되어있는 생성자 함수를 먼저 실행해주고, 
  우리가 할 작업을 하겠다 라는 것을 의미합니다.

이 방법이 가장 일반적인 방법이고, 
또 다른 방법은 커스텀 메서드를 선언 할 때 
화살표 함수 문법을 사용해서 작성하는 것 입니다.
   
   */
  constructor(props) {
    super(props);
    this.state = {
      counter: 0,
    };
    // this.handleIncrease = this.handleIncrease.bind(this);
    // this.handleDecrease = this.handleDecrease.bind(this);
  }
  /*
  클래스 내부에 종속된 함수를 "메서드" 라고 부릅니다. 
  클래스에서 커스텀 메서드를 만들게 될 때에는 보통 이름을 handle... 이라고 이름을 짓습니다
  */
  //또다른 방법은 화살표 함수로 만들어서
  handleIncrease = () => {
    this.setState({
      counter: this.state.counter + 1,
    });
  };
  handleDecrease = () => {
    this.setState({
      counter: this.state.counter - 1,
    });
  };
  /*
  우리가 추후 상태를 업데이트 할 때에는 이 메서드에서 this.setState 라는 함수를 사용해야 하는데요, 
  여기서 this 는 컴포넌트 인스턴스를 가르켜야 하는데, 
  현재 구현한 handleIncrease 와 handleDecrease에서는 this 를 조회하려고 하면 
  컴포넌트 인스턴스를 가르키지 않게 됩니다.

  이렇게 되는 이유는, 
  우리가 만든 메서드들을 각 button 들의 이벤트로 등록하게 되는 과정에서 
  각 메서드와 컴포넌트 인스턴스의 관계가 끊겨버리기 때문입니다.

이를 해결하기 위해서 할 수 있는 방법은 총 3가지 방법이 있습니다.

첫번째는 클래스의 생성자 메서드 constructor 에서 bind 작업을 해주는 것 입니다.
  */

  render() {
    return (
      <div>
        <h1>{this.state.counter}</h1>
        <button onClick={this.handleIncrease}>+1</button>
        <button onClick={this.handleDecrease}>-1</button>
      </div>
    );
  }
}

// function Counter(){
//   //이벤트 등록함수
//   let [number, setNumber] = useState(0)
//   let onIncrease = () => {
//      setNumber(prevNumber=>prevNumber+1);
//   }
//   let onDecrease = () => {
//     setNumber(prevNumber=>prevNumber-1);
//   }
//   return(
//     <div>
//       <h1>{number}</h1>
//       <button onClick={onIncrease}>+1</button>
//       <button onClick={onDecrease}>-1</button>
//     </div>
//   );
// }

export default Counter;
