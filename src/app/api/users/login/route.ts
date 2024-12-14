import { NextApiRequest, NextApiResponse } from 'next';
import dbConnect from '@lib/dbConnect';
import User from '@lib/models/User';
import { verifyPassword } from '@lib/auth'
import { formatResponse } from '@utils/responseFormatter';
import { use } from 'react';



export async function POST(req: Request) {
  await dbConnect();
  const jwt = require('jsonwebtoken');
    const { email, password } = await req.json();
const phoneNumber = email;
    // Find user by email
    const user = await User.findOne({ $or: [{ email }, { phoneNumber }] });
    if (!user) {
      return Response.json(formatResponse(401, 'Cannot find user for given Email or Phone Number', null), { status: 401 });
    }

    // Verify the password
    const isPasswordCorrect = await verifyPassword(password, user.password);
    if (!isPasswordCorrect) {
      return Response.json(formatResponse(401, 'Invalid email or password', null), { status: 401 });
    }

    // Optional: Generate JWT token for authentication
    const token = jwt.sign({ userId: user._id }, process.env.JWT_SECRET, {
      expiresIn: '1d',
    });

    return Response.json(
      formatResponse(201, 'Login successfull', { token: token, user: user }),
      { status: 200 }
    );


  }
