import dbConnect from '@lib/dbConnect';
import Owner from 'lib/models/ownerRegistration'; // Import the schema
import { NextResponse } from 'next/server';

export async function POST(req: Request) {
    try {
        const body = await req.json();
        const { companyName, userName, email, address, phoneNumber, userPhoto } = body;

        // Validate input
        if (!companyName || !userName || !email || !address || !phoneNumber || !userPhoto) {
            return NextResponse.json({ message: 'All fields are required' }, { status: 400 });
        }

        await dbConnect();

        // Check if owner already exists
        const existingOwner = await Owner.findOne({ email });
        if (existingOwner) {
            return NextResponse.json({ message: 'Owner with this email already exists' }, { status: 400 });
        }

        // Save new owner
        const newOwner = new Owner({
            companyName,
            userName,
            email,
            address,
            phoneNumber,
            userPhoto,
        });

        await newOwner.save();

        return NextResponse.json(
            { message: 'Owner registered successfully', owner: newOwner },
            { status: 201 }
        );
    } catch (error) {
        console.error('Error registering owner:', error);
        return NextResponse.json({ message: 'Internal server error' }, { status: 500 });
    }
}

export async function GET(req: Request) {
    try {
        await dbConnect();

        const url = new URL(req.url);
        const ownerId = url.searchParams.get('id'); // Use `id` query param to fetch specific owner

        if (ownerId) {
            const owner = await Owner.findById(ownerId);
            if (!owner) {
                return NextResponse.json({ message: 'Owner not found' }, { status: 404 });
            }
            return NextResponse.json(owner, { status: 200 });
        }

        const owners = await Owner.find();
        return NextResponse.json(owners, { status: 200 });
    } catch (error) {
        console.error('Error retrieving owner(s):', error);
        return NextResponse.json({ message: 'Internal server error' }, { status: 500 });
    }
}

export async function PATCH(req: Request) {
    try {
        const body = await req.json();
        const { id, ...updateData } = body;

        if (!id) {
            return NextResponse.json({ message: 'Owner ID is required' }, { status: 400 });
        }

        await dbConnect();

        const updatedOwner = await Owner.findByIdAndUpdate(id, updateData, {
            new: true, // Return the updated document
            runValidators: true, // Ensure validation is applied
        });

        if (!updatedOwner) {
            return NextResponse.json({ message: 'Owner not found' }, { status: 404 });
        }

        return NextResponse.json(
            { message: 'Owner updated successfully', owner: updatedOwner },
            { status: 200 }
        );
    } catch (error) {
        console.error('Error updating owner:', error);
        return NextResponse.json({ message: 'Internal server error' }, { status: 500 });
    }
}