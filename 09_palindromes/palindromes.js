const palindromes = function (word) {
  let newWord = "";
  for (let i = 0; i < word.length; i++) {
    if (word[i].toUpperCase() !== word[i].toLowerCase()) {
      newWord = newWord + word[i];
    }
  }

  let palWord = "";
  for (let i = 0; i < newWord.length; i++) {
    palWord = newWord[i] + palWord;
  }

  return palWord.toLowerCase() === newWord.toLowerCase();
};

// Do not edit below this line
module.exports = palindromes;
