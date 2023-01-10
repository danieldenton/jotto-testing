import logo from "./logo.svg";
import "./App.css";

import Congrats from "./Congrats";
import GuessedWords from "./GuessedWords";

function App() {
  return (
    <div className="App">
      <h1>Jotto</h1>
      <Congrats success={false} />
      <GuessedWords
        guessedWords={[{ guessedWord: "fake", letterMatchCount: 1 }]}
      />
    </div>
  );
}

export default App;
