import Checkbox from "@material-ui/core/Checkbox";
import Typography from "@material-ui/core/Typography";
import React from "react";
import "./App.css";

let toggle = false;

function textThrough(e) {
  console.log(e.target.checked);
  // this.toggle = !this.toggle;
}

function App() {
  console.log("App");
  return (
    <div className="App">
      <header className="App-header">
        <Typography
          style={{ textDecoration: toggle ? "line-through" : "none" }}
        >
          <Checkbox value="Чек-бокс" onChange={textThrough} />
          Checkbox Disabled
        </Typography>
      </header>
    </div>
  );
}

export default App;
