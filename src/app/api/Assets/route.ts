// src/app/api/templates/route.ts

import { NextResponse } from 'next/server';
import dbConnect from '@lib/dbConnect';
import Assets from '@lib/models/assets';
import { formatResponse } from '@utils/responseFormatter';

// Handle POST requests (to create a new template)
export async function POST(req: Request) {
  await dbConnect();

  try {
    const AssetsData = await req.json();  // Read the request body as JSON
    const newAssetsData = await Assets.create(AssetsData);  // Save the template

    return NextResponse.json(
      formatResponse(201, 'Template created successfully', newAssetsData),
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
    const Asset = await Assets.find();  // Fetch all templates
    return NextResponse.json(
      formatResponse(200, 'Templates fetched successfully', Asset),
      { status: 200 }
    );
  } catch (error) {
    return NextResponse.json(
      formatResponse(500, 'Error fetching templates', { error }),
      { status: 500 }
    );
  }
}


