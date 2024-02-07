export default function QuoteCard({quote}) {
  return (
    <article className="max-w-4xl p-10 mx-auto mt-12 bg-white border-2 border-gray-200 shadow-2xl rounded-2xl bg-opacity-10">
      <p className="font-serif text-3xl italic leading-normal text-gray-700 font-extralight">
        {quote.quote}
      </p>
      <p className="mt-10 text-2xl text-black">-- {quote.author}</p>
    </article>
  );
}
