function simpleTransposition(text) {
  let row1 = [];
  let row2 = [];
  Array.from(text).forEach((letter, idx) => {
    idx % 2 === 0 ? row1.push(letter) : row2.push(letter)
  });
  return row1.join('') + row2.join('')
}

console.log(simpleTransposition("Sample text"));