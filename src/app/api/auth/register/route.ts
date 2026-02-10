import connectDB from '@/lib/db';
import User from '@/models/User';
import bcrypt from 'bcryptjs';
import { NextRequest, NextResponse } from 'next/server';

export async function POST(req: NextRequest) {
  try {
    const { name, email, password, role } = await req.json();

    if (!name || !email || !password || !role) {
      return NextResponse.json(
        { success: false, message: 'Missing required fields' },
        { status: 400 },
      );
    }

    await connectDB();

    const existingUser = await User.findOne({ email });

    if (existingUser) {
      return NextResponse.json(
        { success: false, message: 'User already exists' },
        { status: 400 },
      );
    }
    const hashedPassword = await bcrypt.hash(password, 10);

    let initialCoins = 0;
    if (role === 'worker') initialCoins = 10;
    if (role === 'buyer') initialCoins = 50;

    const newUser = await User.create({
      name,
      email,
      password: hashedPassword,
      role,
      coins: initialCoins,
    });

    return NextResponse.json(
      { message: 'User registered successfully.' },
      { status: 201 },
    );
  } catch (error) {
    console.error(error);

    return NextResponse.json(
      { success: false, message: 'Something went wrong' },
      { status: 500 },
    );
  }
}
