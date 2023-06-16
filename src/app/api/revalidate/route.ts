import { NextRequest, NextResponse } from 'next/server';
import { revalidateTag } from 'next/cache';

export async function GET(request: NextRequest) {
  const tag = request.nextUrl.searchParams.get('tag')
  revalidateTag(tag ?? "revalidate")


  const baseUrl = process.env.CMS_API_URL
  const response = await fetch(baseUrl + 'social-media-links?populate=*', { next: { tags: ['revalidate'] } });
  const entries = await response.json()

  return NextResponse.json({
    revalidated: true,
    now: Date.now(),
    links: entries,
  });
}
