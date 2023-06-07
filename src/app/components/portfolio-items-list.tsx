import PortfolioItem from './portfolio-item'

export default function PortfolioItemsList({ portfolioItems }) {
    return (
        <section>
            <header>Works</header>
            {portfolioItems.map((portfolioItem, i) => (
                <PortfolioItem
                    portfolioItem={portfolioItem}
                    key={i} />
            ))}
        </section>
    )
}
