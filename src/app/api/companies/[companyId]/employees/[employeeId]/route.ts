import { NextResponse } from 'next/server';
import dbConnect from '@lib/dbConnect';
import Company from '@lib/models/Company';
import { verifyToken } from '@utils/verifyToken';
import { formatResponse } from '@utils/responseFormatter';

export async function GET(req: Request, context: any){
  try {
    await dbConnect();

    const { companyId, employeeId } = context.params;  // Access params from context directly
    const authHeader = req.headers.get('Authorization');

    // Check for missing authorization header
    if (!authHeader) {
      return NextResponse.json(
        formatResponse(401, 'Authorization header missing', null),
        { status: 401 }
      );
    }

    const token = authHeader.split(' ')[1];
    const { valid, decoded, error } = verifyToken(token);

    // Handle invalid or expired token
    if (!valid) {
      return NextResponse.json(
        formatResponse(401, 'Invalid or expired token', error),
        { status: 401 }
      );
    }

    // Fetch the company from the database
    const company = await Company.findById(companyId);
    if (!company) {
      return NextResponse.json(
        formatResponse(404, 'Company not found', null),
        { status: 404 }
      );
    }

    // Fetch the employee from the company's employee list
    const employee = company.employees.id(employeeId);
    if (!employee) {
      return NextResponse.json(
        formatResponse(404, 'Employee not found', null),
        { status: 404 }
      );
    }

    // Return the employee if found
    return NextResponse.json(
      formatResponse(200, 'Employee retrieved successfully', employee),
      { status: 200 }
    );
  } catch (error) {
    // Catch unexpected errors
    console.error(error); // Consider logging the error for debugging purposes
    return NextResponse.json(
      formatResponse(500, 'Error retrieving employee', error),
      { status: 500 }
    );
  }
}
