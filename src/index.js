import React from "react";
import ReactDOM from "react-dom";

const Hello = (props) => {
  return (
    <div>
      <p>
        Hello {props.name}, you are {props.age} years old
      </p>
    </div>
  );
};

const App = () => {
  const name = "Lucas";
  const age = 29;
  //Arrays
  const t = [1, -2, 3];
  t.push(5);
  console.log(t.length);
  console.log(t[1]);
  t.forEach((value) => {
    console.log(value);
  });

  //Rest

  const v = [1, 2, 3, 4, 5];

  const [first, second, ...rest] = v;

  console.log(first, second); // 1, 2 es impreso
  console.log(rest); // [3, 4 ,5] es impreso

  return (
    <div>
      <h1>Greetings</h1>
      <Hello name={name} age={age} />
    </div>
  );
};

ReactDOM.render(<App />, document.getElementById("root"));
