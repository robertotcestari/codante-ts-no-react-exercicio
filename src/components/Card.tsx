import { PropsWithChildren } from "react";

type CardProps = PropsWithChildren;

export default function Card({children}: CardProps) {
  return (
    <article className="max-w-4xl p-10 mx-auto mt-12 bg-white border-2 border-gray-200 shadow-2xl rounded-2xl bg-opacity-10">
    {children}
  </article>
  )
}