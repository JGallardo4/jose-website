import type { PortfolioItem, SocialMediaLink } from '@/lib/types.d';

const baseUrl = process.env.CMS_API_URL;

export const getAllPortfolioEntries = async () => {
  try {
    const response = await fetch(baseUrl + 'portfolio-entries?populate=*', {
      next: { tags: ['revalidate'] },
      headers: { 'Cache-Control': 'no-store' },
      cache: 'no-store',
    });

    if (!response.ok) {
      throw new Error(response.statusText);
    }

    const entries = await response.json();

    if (entries === null) {
      throw new Error('No entries found');
    }

    return entries.data as PortfolioItem[];
  } catch (error) {
    console.error(error);
  }
};

export const getAllsocialMediaLinks = async () => {
  try {
    const response = await fetch(baseUrl + 'social-media-links?populate=*', {
      next: { tags: ['revalidate'] },
      headers: { 'Cache-Control': 'no-store' },
      cache: 'no-store',
    });

    if (!response.ok) {
      throw new Error(response.statusText);
    }

    const entries = await response.json();

    if (entries === null) {
      throw new Error('No entries found');
    }

    return entries.data as SocialMediaLink[];
  } catch (error) {
    console.error(error);
  }
};
