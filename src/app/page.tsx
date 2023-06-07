import PortfolioItemsList from './components/portfolio-items-list'

export default function Home() {
  return (
    <PortfolioItemsList
      portfolioItems={
        [{
          title: "abc",
          link: "abc",
          summary: "abc",
          fullText: "abc"
        }, {
          title: "abc",
          link: "abc",
          summary: "abc",
          fullText: "abc"
        }]
      }
    />
  )
}
