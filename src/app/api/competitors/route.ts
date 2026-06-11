import { NextResponse } from 'next/server';
import { MOCK_COMPETITORS } from '@/lib/data';

export async function GET() {
  return new NextResponse(JSON.stringify(MOCK_COMPETITORS), {
    headers: {
      'Content-Type': 'application/json',
    },
  });
}