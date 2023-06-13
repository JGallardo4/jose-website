
import type { PortfolioItem, SocialMediaLink } from '@/lib/types.d'
import 'server-only'

const baseUrl = process.env.CMS_API_URL

export const getAllPortfolioEntries = async () => {
    try {
        const response = await fetch(baseUrl + 'portfolio-entries?populate=*');

        if (!response.ok) {
            throw new Error(response.statusText)
        }

        const entries = await response.json()

        if (entries === null) {
            throw new Error('No entries found')
        }

        return entries.data as PortfolioItem[]
    } catch (error) {
        console.error(error)
    }
}

export const getAllsocialMediaLinks = async () => {
    try {
        const response = await fetch(baseUrl + 'social-media-links?populate=*');

        if (!response.ok) {
            throw new Error(response.statusText)
        }

        const entries = await response.json()

        if (entries === null) {
            throw new Error('No entries found')
        }

        return entries.data as SocialMediaLink[]
    } catch (error) {
        console.error(error)
    }
}