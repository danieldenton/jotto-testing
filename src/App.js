import "./App.css";

import Congrats from "./Congrats";
import GuessedWords from "./GuessedWords";
import Input from "./Input";

function App() {
  return (
    <div className="container" data-test="component-app">
      <h1>Jotto</h1>
      <Input secretWord={"fuk"} />
      <Congrats success={true} />
      <GuessedWords
        guessedWords={[{ guessedWord: "fake", letterMatchCount: 1 }]}
      />
    </div>
  );
}

export default App;
