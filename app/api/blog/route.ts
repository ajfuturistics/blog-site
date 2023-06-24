import Post from "@/models/posts";
import { connectToDB } from "@/utils/database";
import { getServerSession } from "next-auth";
import { NextResponse, NextRequest } from "next/server";
import { authOptions } from "../auth/[...nextauth]/route";

export const GET = async (request: NextRequest) => {
  const page = Number(request.nextUrl.searchParams.get("page")) || 1;

  try {
    await connectToDB();

    const posts = await await Post.find({})
      .sort({ updatedAt: -1 })
      .select(["-desc", "-imageDesc"])
      .populate({ path: "userId", select: "username" })
      .limit(10)
      .skip((page - 1) * 10);

    const count = await Post.count({});
    const totalPages = Math.ceil(count / 10);

    return NextResponse.json(
      {
        blogs: posts,
        total: count,
        totalPages: totalPages === 0 ? 1 : totalPages,
      },
      { status: 200 }
    );
  } catch (error) {
    return NextResponse.json(
      { blogs: [], total: 0, message: "Something went wrong" },
      { status: 500 }
    );
  }
};
export const POST = async (request: Request) => {
  const { banner, imageDesc, title, category, desc } = await request.json();

  const session = await getServerSession(authOptions);
  console.log({ title, category, desc, session });

  if (!session) {
    return NextResponse.json(
      { message: "Login to add new post" },
      { status: 401 }
    );
  }

  if (!title || !category || !desc) {
    return NextResponse.json({ message: "Invalid Data" }, { status: 422 });
  }

  try {
    await connectToDB();

    const newPost = new Post({
      banner: banner,
      imageDesc: imageDesc,
      title: title,
      category: category,
      desc: desc,
      userId: session?.user?.id,
    });

    await newPost.save();

    return NextResponse.json(
      { message: "Post added successfully", blog: newPost },
      { status: 201 }
    );
  } catch (error) {
    return NextResponse.json(
      { message: "Failed to create a new post" },
      { status: 500 }
    );
  }
};
