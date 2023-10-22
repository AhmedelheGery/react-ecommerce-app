
import {useDispatch, useSelector} from 'react-redux'
import {increment, decrement} from '../../redux/slices/counterSlice';
import { useState } from 'react';

const Counter = () => {

  const [counter, setCounter] = useState(10);

  const disptach = useDispatch();
  const counterGlobalState = useSelector( store => store.counterReducer.counter );

  const handleIncrement = () => disptach(increment(50));
  const handleDecrement = () =>  disptach(decrement());


  
  const testStore = useSelector( store => store );
  console.log(testStore);
  
  return (
    <div className="mt-5">
      <div className="d-flex justify-content-center align-items-center">
        <span 
        className="mx-3 text-secondary"
          style={{
            fontSize: "40px",
          }}
        >
          DONATE for us:
        </span>
        <h1
          style={{
            fontSize: "80px",
          }}
        >
          {counterGlobalState}
        </h1>
        <span
        className="mx-3 text-secondary"
          style={{
            fontSize: "60px",
          }}
        >
          $
        </span>
      </div>

      <div className="actions d-flex justify-content-between w-50 mx-auto">
        <button onClick={handleIncrement} className="btn btn-primary btn-lg">
          Increment
        </button>
        <button onClick={handleDecrement} className="btn btn-dark btn-lg">
          Decrement
        </button>
      </div>
    </div>
  );
};

export default Counter;
