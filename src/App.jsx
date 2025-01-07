import { Button } from "bootstrap";
import "../node_modules/bootstrap/dist/css/bootstrap.min.css";
import "./App.css";
import Container from "./components/Container";
import Display from "./components/Display";
import CalBtn from "./components/CalBtn";
import { useState } from "react";
const App = () => {
  const [calVal, setCalVal] = useState([""]);
  const handleBtn = (buttonValue) => {
    if (buttonValue === "AC") {
      setCalVal("");
    } else if (buttonValue === "=") {
      const result = eval(calVal);
      setCalVal(result);
    } else {
      const newDisplayValue = calVal + buttonValue;
      setCalVal(newDisplayValue);
    }
  };
  return (
    <>
      <center>
        <h1>Free Calculator</h1>
        <Container>
          <Display displayValue={calVal}></Display>
          <CalBtn handleBtn={handleBtn}></CalBtn>
        </Container>
      </center>
    </>
  );
};

export default App;
