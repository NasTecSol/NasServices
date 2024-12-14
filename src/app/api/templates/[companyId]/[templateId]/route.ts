import { NextResponse } from 'next/server';
import dbConnect from '@lib/dbConnect';
import Template from '@lib/models/template';
import { formatResponse } from '@utils/responseFormatter';

// Handle PATCH request to update a template by companyId and templateId
export async function PATCH(request: Request, { params }: { params: { companyId: string, templateId: string } }) {
    await dbConnect();
  
    const { companyId, templateId } = await params; // Extract companyId and templateId from URL params
  
    if (!companyId || !templateId) {
      return NextResponse.json({ message: 'Company ID or Template ID not found' }, { status: 400 });
    }
  
    try {
      // Get the request body (data to be updated)
      const updateData = await request.json();
  
      // Find the template by companyId and templateId
      const template = await Template.findOneAndUpdate(
        { companyId, _id: templateId },
        { $set: updateData },  // Use $set to update fields
        { new: true }  // Return the updated template
      );
  
      if (!template) {
        return NextResponse.json(
          formatResponse(404, `Template with ID ${templateId} not found for company ${companyId}`, null),
          { status: 404 }
        );
      }
  
      return NextResponse.json(
        formatResponse(200, `Template with ID ${templateId} updated successfully for company ${companyId}`, template),
        { status: 200 }
      );
    } catch (error) {
      return NextResponse.json(
        formatResponse(500, 'Error updating template', { error }),
        { status: 500 }
      );
    }
  }

  
// Handle DELETE request to remove a template by companyId and templateId
export async function DELETE(request: Request, { params }: { params: { companyId: string, templateId: string } }) {
  await dbConnect();

  const { companyId, templateId } = await params; // Extract companyId and templateId from URL params

  if (!companyId || !templateId) {
    return NextResponse.json({ message: 'Company ID or Template ID not found' }, { status: 400 });
  }

  try {
    // Find and delete the template by companyId and templateId
    const template = await Template.findOneAndDelete({ companyId, _id: templateId });

    if (!template) {
      return NextResponse.json(
        formatResponse(404, `Template with ID ${templateId} not found for company ${companyId}`, null),
        { status: 404 }
      );
    }

    return NextResponse.json(
      formatResponse(200, `Template with ID ${templateId} deleted successfully for company ${companyId}`, template),
      { status: 200 }
    );
  } catch (error) {
    return NextResponse.json(
      formatResponse(500, 'Error deleting template', { error }),
      { status: 500 }
    );
  }
}
