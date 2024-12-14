import { NextResponse } from 'next/server';
import dbConnect from '@lib/dbConnect';
import Assets from '@lib/models/assets';
import { formatResponse } from '@utils/responseFormatter';

// Handle PATCH request to update a Asset by companyId and AssetId
export async function PATCH(request: Request, { params }: { params: { companyId: string, AssetsId: string } }) {
    await dbConnect();
  
    const { companyId, AssetsId } = await params; // Extract companyId and AssetId from URL params    
    if (!companyId || !AssetsId) {
      return NextResponse.json({ message: 'Company ID or Asset ID not found' }, { status: 400 });
    }
  
    try {
      // Get the request body (data to be updated)
      const updateData = await request.json();
  
      // Find the Asset by companyId and AssetId
      const Asset = await Assets.findOneAndUpdate(
        { companyId, _id: AssetsId },
        { $set: updateData },  // Use $set to update fields
        { new: true }  // Return the updated Asset
      );
  
      if (!Asset) {
        return NextResponse.json(
          formatResponse(404, `Asset with ID not found for company`, null),
          { status: 404 }
        );
      }
  
      return NextResponse.json(
        formatResponse(200, `Assets with ID  updated successfully for company `, Asset),
        { status: 200 }
      );
    } catch (error) {
      return NextResponse.json(
        formatResponse(500, 'Error updating Asset', { error }),
        { status: 500 }
      );
    }
  }

  
// Handle DELETE request to remove a Asset by companyId and AssetId
export async function DELETE(request: Request, { params }: { params: { companyId: string, AssetsId: string } }) {
  await dbConnect();

  const { companyId, AssetsId } = await params; // Extract companyId and AssetId from URL params

  if (!companyId || !AssetsId) {
    return NextResponse.json({ message: 'Company ID or Asset ID not found' }, { status: 400 });
  }

  try {
    // Find and delete the Asset by companyId and AssetId
    const Asset = await Assets.findOneAndDelete({ companyId, _id: AssetsId });

    if (!Asset) {
      return NextResponse.json(
        formatResponse(404, `Asset with ID  not found for company `, null),
        { status: 404 }
      );
    }

    return NextResponse.json(
      formatResponse(200, `Asset with ID  deleted successfully for company `, Asset),
      { status: 200 }
    );
  } catch (error) {
    return NextResponse.json(
      formatResponse(500, 'Error deleting Asset', { error }),
      { status: 500 }
    );
  }
}
