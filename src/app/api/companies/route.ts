import { NextResponse } from 'next/server';
import dbConnect from '@lib/dbConnect';
import Company from '@lib/models/Company';
import User from '@lib/models/User';
import { formatResponse } from '@utils/responseFormatter';
import { verifyToken } from '@utils/verifyToken';
import { log } from 'console';

export async function POST(req: Request) {
  await dbConnect();

  const authHeader = req.headers.get('Authorization');
  if (!authHeader) {
    return NextResponse.json(formatResponse(401, 'Authorization header missing', null), { status: 401 });
  }

  const token = authHeader.split(' ')[1];
  const { valid, decoded, error } = verifyToken(token);
  if (!valid) {
    return NextResponse.json(formatResponse(401, 'Invalid or expired token', error), { status: 401 });
  }

  try {
    const companyData =  await req.json();
    log(companyData);
    const newCompany = new Company(companyData);
    await newCompany.save();

    return NextResponse.json(
      formatResponse(201, 'Company created successfully', newCompany),
      { status: 201 }
    );
  } catch (error) {
    return NextResponse.json(formatResponse(500, 'Error creating company', error), { status: 500 });
  }
}