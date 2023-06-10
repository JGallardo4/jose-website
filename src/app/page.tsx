import PortfolioItemsList from '@/components/portfolio-items-list'
import { getAllPortfolioEntries } from '@/lib/api'

export default async function Home() {
  const portfolioItems = await getAllPortfolioEntries()
  console.log(portfolioItems)

  if (!portfolioItems) {
    return <p>Not found</p>
  }

  return (
    <PortfolioItemsList portfolioItems={portfolioItems} />
  )
}
