import { NextApiRequest, NextApiResponse } from 'next';
import dbConnect from '@lib/dbConnect';
import User from '@lib/models/User';
import Subscription from '@lib/models/Subscription';
import { hashPassword } from '@lib/auth';
import { log } from 'console';
import { formatResponse } from '@utils/responseFormatter';

export async function POST(req: Request) {
  await dbConnect();

  try {
    const { firstName, lastName,phoneNumber, email, password, username, role, subscriptionId, companys } = await req.json();
    log(req.body);
    const hashedPassword = await hashPassword(password);

    const existingUser = await User.findOne({ $or: [{ email }, { phoneNumber }] });
  
    if (existingUser) {
      // Check if the conflict is specifically with the email or phone
      const message = existingUser.email === email
        ? 'User with this email already exists'
        : 'User with this phone number already exists';
      return Response.json(formatResponse(401, message, null), { status: 400 });
    }

    const newUser = new User({
      firstName,
      lastName,
      phoneNumber,
      email,
      password: hashedPassword,
      username,
      role,
      subscriptionId,
      companys,
    });
    await newUser.save();

    return Response.json(formatResponse(201, 'User created successfully', newUser), { status: 201 });
  } catch (error) {
    return Response.json(formatResponse(500, 'Error on creating user', null), { status: 500 });
  }
}
