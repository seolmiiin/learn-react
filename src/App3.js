import React, { useState } from 'react';
import CheckBox from './components/CheckBox';

function App3() {
  const [check, setCheck] = useState(false);
  const checked = (e) => {
    setCheck(e.target.checked);
  };

  return (
    <div>
      <CheckBox onChange={checked} checked={check}>
        약관동의
      </CheckBox>
      <p>
        <b>check : </b> {check ? 'true' : 'false'}
      </p>
    </div>
  );
}

export default App3;
