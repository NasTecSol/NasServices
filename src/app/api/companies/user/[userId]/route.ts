// src/app/api/companies/user/[userId]/route.ts

import { NextResponse } from 'next/server';
import dbConnect from '@lib/dbConnect';
import Company from '@lib/models/Company';
import { formatResponse } from '@utils/responseFormatter';
import { verifyToken } from '@utils/verifyToken';

export async function GET(req: Request, context: any) {
  await dbConnect();

  const { userId } = await context.params;
  // Check Authorization Header
  const authHeader = req.headers.get('Authorization');
  if (!authHeader) {
    return NextResponse.json(
      formatResponse(401, 'Authorization header missing', null),
      { status: 401 }
    );
  }

  const token = authHeader.split(' ')[1];
  const { valid, decoded, error } = verifyToken(token);

  if (!valid) {
    return NextResponse.json(
      formatResponse(401, 'Invalid or expired token', error),
      { status: 401 }
    );
  }

  try {
    // Find all companies where the specified userID exists in the ownership list
    const companies = await Company.find({
      ownership: { $elemMatch: { userID: userId } }, // Check userID in nested ownership array
    });
    if (companies.length === 0) {
      return NextResponse.json(
        formatResponse(404, 'No companies found for this user', null),
        { status: 404 }
      );
    }

    return NextResponse.json(
      formatResponse(200, 'Companies retrieved successfully', companies),
      { status: 200 }
    );
  } catch (error) {
    console.error('Error retrieving companies:', error);
    return NextResponse.json(
      formatResponse(500, 'Error retrieving companies', error),
      { status: 500 }
    );
  }
}
