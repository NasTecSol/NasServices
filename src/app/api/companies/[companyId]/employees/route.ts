import { NextResponse } from 'next/server';
import dbConnect from '@lib/dbConnect';
import Company from '@lib/models/Company';
import { verifyToken } from '@utils/verifyToken';
import { formatResponse } from '@utils/responseFormatter';

export async function POST(req: Request, context: any){
  await dbConnect();

  const { companyId } = context.params;
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
    const employeeData = await req.json();
    const company = await Company.findById(companyId);

    if (!company) {
      return NextResponse.json(
        formatResponse(404, 'Company not found', null),
        { status: 404 }
      );
    }

    company.employees.push(employeeData);
    await company.save();

    return NextResponse.json(
      formatResponse(201, 'Employee added successfully', employeeData),
      { status: 201 }
    );
  } catch (error) {
    return NextResponse.json(
      formatResponse(500, 'Error adding employee', error),
      { status: 500 }
    );
  }
}

export async function GET(req: Request, context: any) {
    await dbConnect();
  
    const { companyId } = await context.params;
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
      const company = await Company.findById(companyId);
  
      if (!company) {
        return NextResponse.json(
          formatResponse(404, 'Company not found', null),
          { status: 404 }
        );
      }
  
      return NextResponse.json(
        formatResponse(200, 'Employees retrieved successfully', company.employees),
        { status: 200 }
      );
    } catch (error) {
      return NextResponse.json(
        formatResponse(500, 'Error retrieving employees', error),
        { status: 500 }
      );
    }
  }
  
