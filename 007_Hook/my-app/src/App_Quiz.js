import { useState } from "react";

function Resume(props) {
  const [like, setLike] = useState("");
  const myColor = props.color;
  const styleColor = { color: myColor };
  function clickLike() {
    if (like === "") {
      setLike("Like");
    } else {
      setLike("");
    }
  }

  function 소개({ hobby, food, color }) {
    return (
      <div>
        <h1>취미 : {hobby}</h1>
        <h1>좋아하는 음식 : {food}</h1>
        <h1>
          좋아하는 색 : <span style={styleColor}>{color}</span>
        </h1>
      </div>
    );
  }

  return (
    <div>
      <h1>{props.name} 자기소개서</h1>
      <h1> Hello </h1>
      <소개 hobby="게임" food="고기" color="blue" />
      <button onClick={clickLike}>like</button> <span>{like}</span>
    </div>
  );
}

function App() {
  return (
    <div className="App">
      <Resume name="최병민" color="blue" />
    </div>
  );
}

export default App;
