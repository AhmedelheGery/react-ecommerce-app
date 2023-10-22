import { useState } from "react";

const Counter = () => {
  const [counter, setCounter] = useState(10);

  const increment = () => {
    setCounter(counter + 1);
  }

  const decrement = () => { 
    if( counter > 0) {
        setCounter(counter - 1);
    }
  }

  return (
    <div className="mt-5">
      <h1
        style={{
          fontSize: "80px",
        }}
      >
        {counter}
      </h1>

      <div className="actions d-flex justify-content-between w-50 mx-auto">
        <button onClick={increment} className="btn btn-primary btn-lg">Increment</button>
        <button onClick={decrement} className="btn btn-dark btn-lg">Decrement</button>
      </div>
    </div>
  );
};

export default Counter;
