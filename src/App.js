import "./App.css";

import Congrats from "./Congrats";
import GuessedWords from "./GuessedWords";
import Input from "./Input";

function App() {
  const success = false;
  const secretWord = "party";
  const guessedWords = [];
  return (
    <div className="container" data-test="component-app">
      <h1>Jotto</h1>
      <Input secretWord={secretWord} />
      <Congrats success={success} />
      <GuessedWords guessedWords={guessedWords} />
    </div>
  );
}

export default App;
