// app/post/route.ts
import { NextResponse } from 'next/server';

export function GET() {
    return new NextResponse('Hello', {
        status: 200,
        headers: {
            'Content-Type': 'text/plain',
        },
    });
}
