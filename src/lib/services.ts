export async function fetchQuote() {
  // fetch json data from file
  const res = await fetch('../../data/quotes.json');
  const quotes = await res.json();
  // pick a random quote
  const quote = quotes[Math.floor(Math.random() * quotes.length)];

  return quote;

}

export async function fetchRandomColor() {
  // fetch json data from file
  const res = await fetch('../../data/colors.json');
  const colors = await res.json();
  // pick a random color
  const color = colors[Math.floor(Math.random() * colors.length)];

  return color;
}