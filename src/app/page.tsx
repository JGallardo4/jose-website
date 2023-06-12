import PortfolioItemsList from '@/components/portfolio-items-list'
import { getAllPortfolioEntries } from '@/lib/api'

export default async function Home() {
  const portfolioItems = await getAllPortfolioEntries()

  if (!portfolioItems) {
    return <p>Not found</p>
  }

  return (
    <PortfolioItemsList portfolioItems={portfolioItems} />
  )
}
