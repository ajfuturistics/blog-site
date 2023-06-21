import { NextResponse } from "next/server";

const data = [
  {
    id: 1,
    banner: "https://source.unsplash.com/1920x1080/?fashion?1",
    title: " Te nulla oportere reprimique his dolorum",
    date: "June 1, 2023",
    category: "blog",
  },
  {
    id: 2,
    banner: "https://source.unsplash.com/1920x1080/?fashion?2",
    title: " Te nulla oportere reprimique his dolorum",
    date: "June 2, 2023",
    category: "job",
  },
  {
    id: 3,
    banner: "https://source.unsplash.com/1920x1080/?fashion?3",
    title: " Te nulla oportere reprimique his dolorum",
    date: "June 3, 2023",
    category: "news",
  },
  {
    id: 4,
    banner: "https://source.unsplash.com/1920x1080/?fashion?4",
    title: " Te nulla oportere reprimique his dolorum",
    date: "June 4, 2023",
    category: "information",
  },
];

export const GET = async (request: Request) => {
  try {
    return NextResponse.json({ blogs: data });
  } catch (error) {
    return NextResponse.json({ blogs: [], error: "Not found" });
  }
};
