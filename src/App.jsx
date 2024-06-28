import "./App.css";
import { useState } from "react";

function App() {
const [message, setMessage] = useState("Greeting Message") //ตัวแทนที่แสดง
const [getMassage, setGetMessage] = useState("") //ตัวแทนข้อมูลที่Inputเข้ามา

const handleMassage = (event) => {
  setGetMessage(event.target.value)
}
const handleClick = () => {
  setMessage(getMassage)
}

  return (
    <div className="App">
      <div className="greeting-container">{message}</div>
      <div className="input-container">
        <label htmlFor="greeting-message">New Greeting Message</label>
        <input id="greeting-message" type="text" value={getMassage} onChange={handleMassage}/>
      </div>

      <div className="buttons">
        <button onClick={handleClick}>Update text</button>
      </div>
    </div>
  );
}

export default App;
