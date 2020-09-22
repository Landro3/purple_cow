import React from 'react';

const Counter = (props) => {

  return (
    <div>
      <h1>{props.count}</h1>
      <button onClick={props.onHitClick}>Hit</button>
    </div>
  );
}

export default Counter;