import { NextRequest, NextResponse } from 'next/server';
import { revalidateTag } from 'next/cache';

export async function GET(request: NextRequest) {
  const tag = request.nextUrl.searchParams.get('tag')
  revalidateTag(tag ?? "revalidate")
  return NextResponse.json({
    revalidated: true,
    now: Date.now(),
    CMS_API_URL: process.env.CMS_API_URL,
  });
}
