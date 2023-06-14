import PortfolioItemsList from '@/components/portfolio-items-list'
import { Suspense } from 'react'
import SocialMediaList from './components/social-media-list'
import { revalidateTag } from 'next/cache'

export default function Home() {
  return (
    <>
      <Suspense fallback={<p>Loading portfolio...</p>}>
        <PortfolioItemsList />
      </Suspense>
      <Suspense fallback={<p>Loading social media links...</p>}>
        <SocialMediaList />
      </Suspense>
    </>
  )
}
