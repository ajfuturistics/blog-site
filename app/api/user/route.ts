import { NextRequest, NextResponse } from "next/server";

const data = [
  {
    id: 1,
    name: "Saurabh Jadhav",
    role: "admin",
  },
  {
    id: 2,
    name: "Ghost Buster",
    role: "staff",
  },
  {
    id: 3,
    name: "Michael Lawson",
    role: "staff",
  },
  {
    id: 4,
    name: "Lindsay Ferguson",
    role: "staff",
  },
  {
    id: 5,
    name: "Tobias Funke",
    role: "staff",
  },
  {
    id: 6,
    name: "Byron Fields",
    role: "staff",
  },
  {
    id: 7,
    name: "George Edwards",
    role: "staff",
  },
  {
    id: 8,
    name: "Rachel Howell",
    role: "staff",
  },
  {
    id: 9,
    name: "John Smith",
    role: "staff",
  },
  {
    id: 10,
    name: "Anna Jones",
    role: "staff",
  },
  {
    id: 11,
    name: "Harry Potter",
    role: "staff",
  },
];

export const GET = async (request: NextRequest) => {
  const page = Number(request.nextUrl.searchParams.get("page")) || 1;

  let start = (page - 1) * 6;
  let end = start + 6;

  const newArr = data.slice(start, end);

  try {
    return NextResponse.json({
      users: newArr,
      total: data.length,
    });
  } catch (error) {
    return NextResponse.json({ users: [], total: 0, error: "Not found" });
  }
};
