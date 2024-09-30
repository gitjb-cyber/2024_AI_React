// 0 버튼 클릭하면 숫자가 1씩 올라감

import { useState } from "react";

const Up = () => {
  const [num, setNum] = useState(0);

  return <button onClick={() => setNum((prev) => prev + 1)}>{num} 그릇</button>;
};

export default Up;
