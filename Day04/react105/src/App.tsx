import { useState } from "react";
import Test from "./Test";

function App() {
  const [total, setTotal] = useState(2);

  return (
    <div>
      {/* <Musinsa name="M size" price={15000}></Musinsa>
      <Musinsa name="L size" price={15000}></Musinsa>
      <div>총 갯수: {total}</div> */}
      <Test></Test>
    </div>
  );
}

export default App;
