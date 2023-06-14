import { NextRequest, NextResponse } from 'next/server'
import { revalidateTag } from 'next/cache'

export async function GET(request: NextRequest) {
    const tag = request.nextUrl.searchParams.get('tag')
    revalidateTag(tag ?? "")
    console.log(`Revalidating tag: ${tag}`)
    console.log(Date.now())
    return NextResponse.json({ revalidated: true, now: Date.now() })
}