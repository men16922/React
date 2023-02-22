import React, { useState } from "react";

const Parent = () => {
  const [v, setV] = useState({
    a: 101,
    b: "hello",
    c: "world",
  });

  return (
    <div>
      <Child
        one={v.a}
        two={v.b}
        three={v.c}
        onChange={(value) => {
          console.log("Parent");
          console.log(v);
          console.log(value);
          return setV({ ...v, ...value });
        }}
      />
      {v.id}
    </div>
  );
};
const Child = (props) => {
  const handleonChange = (event) => {
    const { name, value } = event.target;
    console.log(name, value);
    console.log(input);
    props.onChange({ [name]: value });
  };
  return (
    <div>
      <p>{props.one}</p>
      <p>{props.two}</p>
      <p>{props.three}</p>
      <input type="text" name="id" onChange={handleonChange} />
    </div>
  );
};
cd 008  
function App() {
  return (
    <div>
      <Parent input="10" />
    </div>
  );
}

export default App;
