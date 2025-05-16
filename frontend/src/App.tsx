import { useState } from "react";

function App() {
  const [count, setCount] = useState(3);

  return (
    <>
      <h1>{count}</h1>
      <button onClick={() => setCount(count + 2)}>{"button"}</button>
    </>
  );
}

export default App;
