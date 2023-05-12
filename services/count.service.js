function analyzeString(str) {
  let letters = 0;
  let symbols = 0;
  let numbers = 0;

  for (let i = 0; i < str.length; i++) {
    let char = str[i];

    if (char.match(/[a-zA-Z]/)) {
      letters++;
    } else if (char.match(/[0-9]/)) {
      numbers++;
    } else {
      symbols++;
    }
  }

  return {
    letters: letters,
    symbols: symbols,
    numbers: numbers
  };
}

module.exports = {
  analyzeString
}