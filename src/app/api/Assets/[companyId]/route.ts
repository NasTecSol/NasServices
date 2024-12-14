import { NextResponse } from 'next/server';
import dbConnect from '@lib/dbConnect';
import Assets from '@lib/models/assets';
import { formatResponse } from '@utils/responseFormatter';

// Handle GET request to fetch Assets by companyId using path parameters
export async function GET(request: Request, { params }: { params: { companyId: string } }) {
  await dbConnect();

  const { companyId } = await params; // Access the companyId from the URL params

  if (!companyId) {
    return NextResponse.json({ message: 'Company ID not found' }, { status: 400 });
  }

  // Logic to process the companyId, such as fetching data related to it
  try {
    const Asset = await Assets.find({ companyId });  // Query by companyId
    if (!Asset || Asset.length === 0) {
      return NextResponse.json(
        formatResponse(404, `No Assets found for company `, null),
        { status: 404 }
      );
    }

    return NextResponse.json(
      formatResponse(200, `Assets for company fetched successfully`, Asset),
      { status: 200 }
    );
  } catch (error) {
    return NextResponse.json(
      formatResponse(500, 'Error fetching Asset by companyId', { error }),
      { status: 500 }
    );
  }
}



