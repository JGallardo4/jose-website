import { PortfolioItem } from '../lib/types.d'

export default function PortfolioItemsList({ portfolioItems }: { portfolioItems: PortfolioItem[] }) {
    return (
        <section>
            <header>Works</header>
            {portfolioItems.map((portfolioItem, i) => (
                <article key={i}>
                    <h1>{portfolioItem.Title}</h1>
                    <a href={portfolioItem.Link}></a>
                    <p>{portfolioItem.Full_Text}</p>
                </article>
            ))}
        </section>
    )
}
