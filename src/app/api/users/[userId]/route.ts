// src/app/api/users/[userId]/route.ts

import { NextResponse } from 'next/server';
import dbConnect from '@lib/dbConnect';
import User from '@lib/models/User';
import { hashPassword } from '@lib/auth';
import { formatResponse } from '@utils/responseFormatter';
import mongoose from 'mongoose';


// Named export for the PUT method
export async function PUT(req: Request, context: any) {
  await dbConnect();

  // Use `await` when accessing `params` to adhere to Next.js 13 requirements
  const { userId } = await context.params;

  // Validate if `userId` is a valid ObjectId
  if (!userId || !mongoose.Types.ObjectId.isValid(userId)) {
    return NextResponse.json(
      formatResponse(400, 'Invalid user ID format', null),
      { status: 400 }
    );
  }

try{
    const { firstName, lastName, phoneNumber, email, password, username, role, companys } = await req.json();

    // Find the user by `userId`
    const user = await User.findById(userId);
    if (!user) {
      return NextResponse.json(
        formatResponse(404, 'User not found', null),
        { status: 404 }
      );
    }

    // Update fields if they are provided in the request body
    if (firstName !== undefined) user.firstName = firstName;
    if (lastName !== undefined) user.lastName = lastName;
    if (phoneNumber !== undefined) user.phoneNumber = phoneNumber;
    if (email !== undefined) user.email = email;
    if (username !== undefined) user.username = username;
    if (role !== undefined) user.role = role;
    if (companys !== undefined) user.companys = companys;

    // If password is provided, hash it before updating
    if (password) {
      user.password = await hashPassword(password);
    }

    await user.save();

    return NextResponse.json(
      formatResponse(200, 'User updated successfully', user),
      { status: 200 }
    );
  } catch (error) {
    return NextResponse.json(
      formatResponse(500, 'Error updating user', { error: error }),
      { status: 500 }
    );
  }
}
