import User from "@/models/user";
import { connectToDB } from "@/utils/database";
import { genSalt, hash } from "bcryptjs";
import { getServerSession } from "next-auth";
import { NextRequest, NextResponse } from "next/server";
import { authOptions } from "../../auth/[...nextauth]/route";

export const GET = async (
  request: NextRequest,
  { params }: { params: { id: string } }
) => {
  const id = params.id;
  try {
    await connectToDB();

    const user = await User.findById(id).select("-password");

    if (!user) {
      return NextResponse.json(
        { message: "User does not exists" },
        { status: 404 }
      );
    }

    return NextResponse.json(
      {
        user: user,
        total: User.count,
      },
      { status: 200 }
    );
  } catch (error) {
    return NextResponse.json(
      { user: {}, message: "Something went wrong" },
      { status: 500 }
    );
  }
};

export const PUT = async (
  request: Request,
  { params }: { params: { id: string } }
) => {
  const session = await getServerSession(authOptions);

  if (!session) {
    return NextResponse.json(
      { message: "Login to update user" },
      { status: 401 }
    );
  }
  const id = params.id;
  const { username, password } = await request.json();

  if (!username || !password) {
    return NextResponse.json({ message: "Invalid Data" }, { status: 422 });
  }

  try {
    await connectToDB();

    const checkExisting = await User.findById(id);

    if (!checkExisting) {
      return NextResponse.json(
        { message: "User does not exists" },
        { status: 404 }
      );
    }

    const salt = await genSalt(12);
    const hashedPass = await hash(password, salt);

    const updatedUser = await User.findByIdAndUpdate(id, {
      username: username,
      password: hashedPass,
    });

    return NextResponse.json(
      { message: "User updated successfully", user: updatedUser },
      { status: 200 }
    );
  } catch (error) {
    return NextResponse.json(
      { message: "Failed to update user" },
      { status: 500 }
    );
  }
};
export const DELETE = async (
  request: Request,
  { params }: { params: { id: string } }
) => {
  const session = await getServerSession(authOptions);

  if (!session) {
    return NextResponse.json(
      { message: "Login to delete user" },
      { status: 401 }
    );
  }
  const id = params.id;

  try {
    await connectToDB();

    const checkExisting = await User.findById(id);

    if (!checkExisting) {
      return NextResponse.json(
        { message: "User does not exists" },
        { status: 404 }
      );
    }

    await User.findByIdAndDelete(id);

    return NextResponse.json(
      { message: "User deleted successfully" },
      { status: 200 }
    );
  } catch (error) {
    return NextResponse.json(
      { message: "Failed to delete user" },
      { status: 500 }
    );
  }
};
