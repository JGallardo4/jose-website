import type PortfolioItem from '../interfaces/portfolio-item'

export default function PortfolioItemsList({ portfolioItems }: { portfolioItems: PortfolioItem[] }) {
    return (
        <section>
            <header>Works</header>
            {portfolioItems.map((portfolioItem, i) => (
                <article key={i}>
                    <h1>{portfolioItem.title}</h1>
                    <a href={portfolioItem.link}></a>
                    <p>{portfolioItem.summary}</p>
                    <p>{portfolioItem.fullText}</p>
                </article>
            ))}
        </section>
    )
}
