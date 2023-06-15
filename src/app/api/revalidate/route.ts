import { NextRequest, NextResponse } from 'next/server'
import { revalidateTag } from 'next/cache'

export async function GET(request: NextRequest) {
    console.log("Env variable:")
    console.log(process.env.CMS_API_URL)
    // const tag = request.nextUrl.searchParams.get('tag')
    // revalidateTag(tag ?? "revalidate")
    return NextResponse.json({ revalidated: true, now: Date.now() })
}