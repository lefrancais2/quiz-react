// import { selectNumbers } from "./helpers/random";
import "./css/all.css";
import Game from "./components/Game";
import { GameProvider } from "./context/GameContext";

function App() {
  // const newArr = selectNumbers();
  // console.log("arr", newArr);
  // console.log("select-true", Math.floor(Math.random() * 4));
  return (
    <div>
      <GameProvider>
        <Game />
      </GameProvider>
    </div>
  );
}

export default App;
