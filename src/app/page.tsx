import PortfolioItemsList from './components/portfolio-items-list'

async function getData() {
  const res = await fetch('https://jose-strapi-xofl2.ondigitalocean.app/api/portfolio-entries')
  if (!res.ok) {
    throw new Error('Failed to fetch portfolio items')
  }

  return res.json()
}
export default async function Home() {
  const portfolioItems = await getData()

  return (
    <PortfolioItemsList portfolioItems={portfolioItems} />
  )
}
