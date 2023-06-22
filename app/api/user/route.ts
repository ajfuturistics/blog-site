import User from "@/models/user";
import { connectToDB } from "@/utils/database";
import { NextRequest, NextResponse } from "next/server";

export const GET = async (request: NextRequest) => {
  const page = Number(request.nextUrl.searchParams.get("page")) || 1;

  // let start = (page - 1) * 6;
  // let end = start + 6;

  // const newArr = data.slice(start, end);

  try {
    await connectToDB();

    const users = await User.find({})
      .select("-password")
      .limit(6)
      .skip((page - 1) * 6);

    const count = await User.count({});

    return NextResponse.json(
      {
        users: users,
        total: count,
      },
      { status: 200 }
    );
  } catch (error) {
    return NextResponse.json(
      { users: [], total: 0, message: "Something went wrong" },
      { status: 500 }
    );
  }
};
