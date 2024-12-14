import { NextResponse } from 'next/server';
import dbConnect from '../../../../lib/dbConnect';
import { log } from 'console';

export async function GET(): Promise<NextResponse> {
  try {
    log('-----');
    await dbConnect();
    return NextResponse.json({ message: "Database connection successful" });
  } catch (error) {
    return NextResponse.json({ message: "Database connection failed", error: 'errrrrrr' }, { status: 500 });
  }
}
