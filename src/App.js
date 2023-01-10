import "./App.css";

import Congrats from "./Congrats";
import GuessedWords from "./GuessedWords";

function App() {
  return (
    <div className="container">
      <h1>Jotto</h1>
      <Congrats success={true} />
      <GuessedWords
        guessedWords={[{ guessedWord: "fake", letterMatchCount: 1 }]}
      />
    </div>
  );
}

export default App;
