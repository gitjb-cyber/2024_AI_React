import React from "react";
import GridLayout from "./GridLayout";
import Button from "./Button";

function App() {
  return (
    <div>
      <GridLayout
        columnNumber={4}
        components={
          <>
            <Button backgroundColor="Primary" borderRadius="Hard"></Button>
            <Button backgroundColor="Primary" borderRadius="Smooth"></Button>
            <Button backgroundColor="Primary" borderRadius="Circle"></Button>
            <Button backgroundColor="Hover" borderRadius="Hard"></Button>
            <Button backgroundColor="Hover" borderRadius="Smooth"></Button>
            <Button backgroundColor="Hover" borderRadius="Circle"></Button>
            <Button backgroundColor="Deactive" borderRadius="Hard"></Button>
            <Button backgroundColor="Deactive" borderRadius="Smooth"></Button>
            <Button backgroundColor="Deactive" borderRadius="Circle"></Button>
          </>
        }
      ></GridLayout>
    </div>
  );
}

export default App;
