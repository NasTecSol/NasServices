// src/app/api/templates/route.ts

import { NextResponse } from 'next/server';
import dbConnect from '@lib/dbConnect';
import Template from '@lib/models/template';
import { formatResponse } from '@utils/responseFormatter';

// Handle POST requests (to create a new template)
export async function POST(req: Request) {
  await dbConnect();

  try {
    const templateData = await req.json();  // Read the request body as JSON
    const newTemplate = await Template.create(templateData);  // Save the template

    return NextResponse.json(
      formatResponse(201, 'Template created successfully', newTemplate),
      { status: 201 }
    );
  } catch (error) {
    return NextResponse.json(
      formatResponse(500, 'Error creating template', { error }),
      { status: 500 }
    );
  }
}

// Handle GET requests (to fetch all templates)
export async function GET() {
  await dbConnect();

  try {
    const templates = await Template.find();  // Fetch all templates
    return NextResponse.json(
      formatResponse(200, 'Templates fetched successfully', templates),
      { status: 200 }
    );
  } catch (error) {
    return NextResponse.json(
      formatResponse(500, 'Error fetching templates', { error }),
      { status: 500 }
    );
  }
}


