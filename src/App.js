import "./styles.css";
import { useState } from "react";

export default function App() {
  let [color, updateColor] = useState("");
  let [msg, updateMsg] = useState("");
  let [btn, isbuttonVisible] = useState("disabled");

  function updateLength(event) {
    if (event.target.value.length < 9) {
      updateColor("red");
      updateMsg("less than 10 chars");
      isbuttonVisible("disabled");
    } else {
      updateColor("green");
      updateMsg("yes submit now");
      isbuttonVisible("");
    }
  }
  return (
    <div className="App">
      <h1>Instagram Login Page</h1>

      <input type="password" onChange={updateLength} style={{ color: color }} />
      <button disabled={btn}>Submit</button>
      <h2>{msg}</h2>
    </div>
  );
}
