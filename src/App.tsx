import { useState } from 'react';
import { fetchQuote, fetchRandomColor } from './lib/services';
import QuoteCard from './components/QuoteCard';
import { Quote } from './lib/types';
import HeaderCard from './components/HeaderCard';

function App() {
  const [quote, setQuote] = useState<Quote | null>(null);
  const [bgColor, setBgColor] = useState('#666');

  async function handleClick() {
    const quote = await fetchQuote();
    const color = await fetchRandomColor();
    setQuote(quote);
    setBgColor(color.hex);
  }

  return (
    <main className="w-full min-h-screen " style={{ backgroundColor: bgColor }}>
      <section className="container px-10 py-20 mx-auto text-center">
        <HeaderCard setBgColor={setBgColor} bgColor={bgColor} handleClick={handleClick} />
        {quote && <QuoteCard quote={quote} />}
      </section>{' '}
    </main>
  );
}

export default App;
