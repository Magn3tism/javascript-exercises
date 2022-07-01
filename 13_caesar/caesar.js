const caesar = function (word, shift) {
  let shifted = "";
  if (shift > 26) {
    shift = shift - parseInt(shift / 26) * 26;
  } else if (shift < -26) {
    shift = shift - parseInt(shift / 26) * 26;
  }

  for (let i = 0; i < word.length; i++) {
    if (word[i].toUpperCase() !== word[i].toLowerCase()) {
      if (word.charCodeAt(i) + shift > 90 && word.charCodeAt(i) < 97) {
        shifted =
          shifted + String.fromCharCode(64 + shift - (90 - word.charCodeAt(i)));
      } else if (word.charCodeAt(i) + shift < 65) {
        shifted =
          shifted + String.fromCharCode(90 + shift + (word.charCodeAt(i) - 64));
      } else if (word.charCodeAt(i) + shift > 122) {
        shifted =
          shifted +
          String.fromCharCode(96 + shift - (122 - word.charCodeAt(i)));
      } else if (word.charCodeAt(i) + shift < 97 && word.charCodeAt(i) > 91) {
        shifted =
          shifted +
          String.fromCharCode(122 + shift + (word.charCodeAt(i) - 96));
      } else {
        shifted = shifted + String.fromCharCode(word.charCodeAt(i) + shift);
      }
    } else {
      shifted = shifted + word[i];
    }
  }

  return shifted;
};

// Do not edit below this line
module.exports = caesar;
