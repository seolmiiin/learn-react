import React from 'react';
import Button from './components/Button';
import './App2.scss';
function APP2() {
  return (
    <div className="App">
      <div className="Buttons">
        <Button size="large">BUTTON</Button>
        <Button color="yellow">BUTTON</Button>
        <Button size="small" color="lime">
          BUTTON
        </Button>
      </div>
      <div className="Buttons">
        <Button size="large" outline>
          BUTTON
        </Button>
        <Button color="yellow" outline>
          BUTTON
        </Button>
        <Button size="small" color="lime" outline>
          BUTTON
        </Button>
      </div>
      <div className="Buttons">
        <Button fullWidth>BUTTON</Button>
        <Button color="yellow" fullWidth>
          BUTTON
        </Button>
        <Button color="lime" fullWidth>
          BUTTON
        </Button>
      </div>
    </div>
  );
}

export default APP2;
