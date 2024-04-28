import { NextRequest, NextResponse } from "next/server"

export const dynamic = 'force-dynamic' // defaults to auto

export async function POST(req: NextRequest) {
  return NextResponse.json({ msg: 'email sent' }, { status: 200 })
}

export async function GET(req: NextRequest) {
  return NextResponse.json({ msg: 'email sender' }, { status: 200 })
}