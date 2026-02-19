import { useState } from "react";


export default function Counter(){
    const [count, setCount] = useState(0);
      const increment = () =>{
         setCount((count) => count + 1)
      };
    const decrement = () => {
      setCount((count) => count - 1);
    };
    const reset = () => {
      setCount(0);
    };
      return (
        <section className="app">
          <div className="header">
          <h2>Counter App</h2>
          <h3>{count}</h3>
          </div>
          <div className="line">
          <button onClick={increment} className="a">INCREMENT(+)</button>
          <button onClick={decrement} className="b">DECREMENT(-)</button>
          <button onClick={reset} className="c">RESET</button>
          </div>
        </section>
      )
    }
