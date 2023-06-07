export default function PortfolioItem({ portfolioItem }: {
  portfolioItem: {
    title: string
    link: string
    summary: string
    fullText: string
  }
}) {
  return (
    <article>
      <h1>{portfolioItem.title}</h1>
      <a href={portfolioItem.link}></a>
      <p>{portfolioItem.summary}</p>
      <p>{portfolioItem.fullText}</p>
    </article>
  )
}