// src/app/api/employees/route.ts

import { NextResponse } from 'next/server';
import dbConnect from '@lib/dbConnect';
import Employee from '@lib/models/Company';
import { formatResponse } from '@utils/responseFormatter';

export async function POST(req: Request) {
  await dbConnect();

  try {    
    const employeeData = await req.json();
    const newEmployee = new Employee(employeeData);
    await newEmployee.save();

    return NextResponse.json(
      formatResponse(201, 'Employee created successfully', newEmployee),
      { status: 201 }
    );
  } catch (error) {
    return NextResponse.json(
      formatResponse(500, 'Error creating employee',error),
      { status: 500 }
    );
  }
}
