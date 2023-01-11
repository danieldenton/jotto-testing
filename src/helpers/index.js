export function getLetterMatchCount(guessedWord, secretWord) {
  const secretLetters = secretWord.split("");
  const guessedletterSet = new Set(guessedWord);
  return secretLetters.filter((letter) => guessedletterSet.has(letter)).length;
}
