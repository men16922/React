import Career from "./Components/Career";
import Certificate from "./Components/Certificate";
import Privacy from "./Components/Privacy";
import Award from "./Components/Award";

function App() {
  return (
    <div className="App">
      <h1>이력서</h1>
      <Privacy name="이호준" phone="01000000000" github="paullabkorea" />
      <Certificate title="자격증" contents="자격증내용" />
      <Certificate title="학력" contents="학력내용" />
      <Career title="경력" contents="경력내용" />
      <Award title="수상경력" contents="수상경력내용" />
    </div>
  );
}

export default App;
