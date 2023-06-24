import Post from "@/models/posts";
import { connectToDB } from "@/utils/database";
import { NextResponse } from "next/server";

export const GET = async (
  request: Request,
  { params }: { params: { id: string } }
) => {
  const id = params.id;
  try {
    await connectToDB();

    const post = await Post.findById(id).populate("userId");

    if (!post) {
      return NextResponse.json({ message: "Post not found" }, { status: 404 });
    }

    return NextResponse.json(
      {
        post,
      },
      { status: 200 }
    );
  } catch (error) {
    return NextResponse.json(
      { post: {}, message: "Something went wrong" },
      { status: 500 }
    );
  }
};

export const PUT = async (
  request: Request,
  { params }: { params: { id: string } }
) => {
  const id = params.id;
  const { banner, imageDesc, title, category, desc } = await request.json();

  if (!title || !category || !desc) {
    return NextResponse.json({ message: "Invalid Data" }, { status: 422 });
  }

  try {
    await connectToDB();

    const checkExisting = await Post.findById(id);

    if (!checkExisting) {
      return NextResponse.json({ message: "Post not found!" }, { status: 404 });
    }

    const updatedPost = await Post.findByIdAndUpdate(id, {
      banner,
      imageDesc,
      title,
      category,
      desc,
    });

    return NextResponse.json(
      { message: "Post updated successfully", post: updatedPost },
      { status: 200 }
    );
  } catch (error) {
    return NextResponse.json(
      { message: "Failed to update post" },
      { status: 500 }
    );
  }
};
export const DELETE = async (
  request: Request,
  { params }: { params: { id: string } }
) => {
  const id = params.id;

  try {
    await connectToDB();

    const checkExisting = await Post.findById(id);

    if (!checkExisting) {
      return NextResponse.json(
        { message: "Post does not exists" },
        { status: 404 }
      );
    }

    await Post.findByIdAndDelete(id);

    return NextResponse.json(
      { message: "Post deleted successfully" },
      { status: 200 }
    );
  } catch (error) {
    return NextResponse.json(
      { message: "Failed to delete post" },
      { status: 500 }
    );
  }
};
