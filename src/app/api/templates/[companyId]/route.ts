import { NextResponse } from 'next/server';
import dbConnect from '@lib/dbConnect';
import Template from '@lib/models/template';
import { formatResponse } from '@utils/responseFormatter';

// Handle GET request to fetch templates by companyId using path parameters
export async function GET(request: Request, { params }: { params: { companyId: string } }) {
  await dbConnect();

  const { companyId } = await params; // Access the companyId from the URL params

  if (!companyId) {
    return NextResponse.json({ message: 'Company ID not found' }, { status: 400 });
  }

  // Logic to process the companyId, such as fetching data related to it
  try {
    const templates = await Template.find({ companyId });  // Query by companyId
    if (!templates || templates.length === 0) {
      return NextResponse.json(
        formatResponse(404, `No templates found for company ${companyId}`, null),
        { status: 404 }
      );
    }

    return NextResponse.json(
      formatResponse(200, `Templates for company ${companyId} fetched successfully`, templates),
      { status: 200 }
    );
  } catch (error) {
    return NextResponse.json(
      formatResponse(500, 'Error fetching templates by companyId', { error }),
      { status: 500 }
    );
  }
}



