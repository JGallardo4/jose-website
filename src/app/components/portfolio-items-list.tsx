import { PortfolioItem } from '@/lib/types.d'
import ConditionalRender from '@/components/conditional-render'

export default function PortfolioItemsList({ portfolioItems }: { portfolioItems: PortfolioItem[] }) {
    return (
        <section>
            <header>
                <h2>Works</h2>
            </header>

            {portfolioItems.map((portfolioItem, i) => (
                <article key={i}>
                    <h1>{portfolioItem.Title}</h1>

                    {portfolioItem.Link.map((link, j) => (
                        <section key={j}>
                            <a href={link.URL}>{link.Display_Text}</a>
                        </section>))
                    }

                    <ConditionalRender isShouldRender={portfolioItem.Start_Date !== null}>
                        <p>
                            Start date:{" "}
                            <time dateTime={portfolioItem.Start_Date}>
                                {portfolioItem.Start_Date}
                            </time>
                        </p>
                    </ConditionalRender>

                    <ConditionalRender isShouldRender={portfolioItem.End_Date !== null}>
                        <p>
                            End date:{" "}
                            <time dateTime={portfolioItem.End_Date}>
                                {portfolioItem.End_Date}
                            </time>
                        </p>
                    </ConditionalRender>
                </article>
            ))}
        </section>
    )
}
