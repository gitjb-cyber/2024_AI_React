import Cafe from "./Cafe";
import Musinsa from "./Musinsa";
import Test from "./Test";

function App() {
  return (
    <div>
      <Cafe></Cafe>
      <Musinsa name="무신사 청바지 M" price={15000}></Musinsa>
      <Musinsa name="무신사 반팔티 XL" price={30000}></Musinsa>
    </div>
  );
}

export default App;
