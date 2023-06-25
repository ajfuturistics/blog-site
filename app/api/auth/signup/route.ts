import User from "@/models/user";
import { connectToDB } from "@/utils/database";
import { hash, genSalt } from "bcryptjs";
import { NextResponse } from "next/server";
import { authOptions } from "../[...nextauth]/route";
import { getServerSession } from "next-auth";

export const POST = async (request: Request) => {
  const { username, password } = await request.json();

  const session = await getServerSession(authOptions);

  if (!session) {
    return NextResponse.json({ message: "Login to add user" }, { status: 401 });
  }

  if (!username || !password) {
    return NextResponse.json({ message: "Invalid Data" }, { status: 422 });
  }

  try {
    await connectToDB();

    const checkExisting = await User.findOne({ username });

    if (checkExisting) {
      return NextResponse.json(
        { message: "User already exists" },
        { status: 422 }
      );
    }

    const salt = await genSalt(12);
    const hashedPass = await hash(password, salt);

    const newUser = new User({
      username: username,
      password: hashedPass,
    });

    await newUser.save();

    return NextResponse.json(
      { message: "User added successfully", user: newUser },
      { status: 201 }
    );
  } catch (error) {
    return NextResponse.json(
      { message: "Failed to create a new user" },
      { status: 500 }
    );
  }
};
