import { Col, Form, Row } from "react-bootstrap";
import "./App.scss";
import { useState } from "react";

function App() {
  const [input, setInput] = useState("");

  const handleClick = (element) => {
    setInput(input + element);
  };

  const handleClear = () => {
    setInput("");
  };

  const handleOperation = () => {
    let operation = input;

    let result = "E";

    let operatorPosition = null;
    let check = true;
    let count = 0;

    for (let i = 0; i < operation.length && count < 2 && check; i++) {
      if (operation[0] == "/" || operation[0] == "*") {
        check = false;
      }
      if (isNaN(operation[i])) {
        count++;
      }
      if (isNaN(operation[i]) && isNaN(operation[i - 1]) == false) {
        if (operatorPosition != null) {
          check = false;
        }
        operatorPosition = i;
        count = 0;
      }
      if (
        operatorPosition != null &&
        (operation[operatorPosition + 1] == "/" ||
          operation[operatorPosition + 1] == "*")
      ) {
        check = false;
      }
    }

    if (check && count < 2) {
      let first = parseInt(operation.substring(0, operatorPosition));
      let operator = operation.substr(operatorPosition, 1);
      let last = parseInt(operation.substring(operatorPosition + 1));

      switch (operator) {
        case "+":
          result = first + last;
          break;
        case "-":
          result = first - last;
          break;
        case "*":
          result = first * last;
          break;
        case "/":
          result = first / last;
          break;
      }

      setInput(parseInt(result));
    } else {
      setInput(result);
    }
  };

  return (
    <div className="App-background">
      <div className="calculator-frame">
        <Row className="upper-body">
          <Col>
            <h2>KAZIO</h2>
          </Col>
          <Col className="green-block"></Col>
          <Col className="text-center">
            <span>
              <i>REACT</i>
            </span>
          </Col>
          <Col className="d-flex justify-content-end">
            <h2 className="text-center twelve">12</h2>
          </Col>
          <Col xs={12} className="d-flex justify-content-end mb-3">
            <span>DIGITS</span>
          </Col>
          <Col xs={12}>
            <Form.Group className="mb-3">
              <Form.Control disabled value={input} className="screen" />
            </Form.Group>
          </Col>
        </Row>
        <Row className="lower-body justify-content-between">
          <Col xs={3} className="d-flex justify-content-center mb-2">
            <button onClick={() => handleClick("1")}>1</button>
          </Col>
          <Col xs={3} className="d-flex justify-content-center mb-2">
            <button onClick={() => handleClick("2")}>2</button>
          </Col>
          <Col xs={3} className="d-flex justify-content-center mb-2">
            <button onClick={() => handleClick("3")}>3</button>
          </Col>
          <Col xs={3} className="d-flex justify-content-center mb-2">
            <button onClick={() => handleClick("+")}>+</button>
          </Col>
          <Col xs={3} className="d-flex justify-content-center mb-2">
            <button onClick={() => handleClick("4")}>4</button>
          </Col>
          <Col xs={3} className="d-flex justify-content-center mb-2">
            <button onClick={() => handleClick("5")}>5</button>
          </Col>
          <Col xs={3} className="d-flex justify-content-center mb-2">
            <button onClick={() => handleClick("6")}>6</button>
          </Col>
          <Col xs={3} className="d-flex justify-content-center mb-2">
            <button onClick={() => handleClick("-")}>-</button>
          </Col>
          <Col xs={3} className="d-flex justify-content-center mb-2">
            <button onClick={() => handleClick("7")}>7</button>
          </Col>
          <Col xs={3} className="d-flex justify-content-center mb-2">
            <button onClick={() => handleClick("8")}>8</button>
          </Col>
          <Col xs={3} className="d-flex justify-content-center mb-2">
            <button onClick={() => handleClick("9")}>9</button>
          </Col>
          <Col xs={3} className="d-flex justify-content-center mb-2">
            <button onClick={() => handleClick("*")}>*</button>
          </Col>
          <Col xs={3} className="d-flex justify-content-center mb-2">
            <button onClick={handleOperation}>=</button>
          </Col>
          <Col xs={3} className="d-flex justify-content-center mb-2">
            <button onClick={handleClear}>C</button>
          </Col>
          <Col xs={3} className="d-flex justify-content-center mb-2">
            <button onClick={() => handleClick("0")}>0</button>
          </Col>
          <Col xs={3} className="d-flex justify-content-center mb-2">
            <button onClick={() => handleClick("/")}>/</button>
          </Col>
        </Row>
      </div>
    </div>
  );
}

export default App;
