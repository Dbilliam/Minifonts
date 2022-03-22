const quotes = [
  "Read a thousand books and your words will flow like a river"
];

//shuffle the array (https://stackoverflow.com/questions/6274339/how-can-i-shuffle-an-array)
function shuffle(a) {
  for (let i = a.length - 1; i > 0; i--) {
    const j = Math.floor(Math.random() * (i + 1));
    [a[i], a[j]] = [a[j], a[i]];
  }
  return a;
}
const randomQuotes = shuffle(quotes);

export default randomQuotes;
