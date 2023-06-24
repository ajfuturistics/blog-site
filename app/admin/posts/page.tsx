import { authOptions } from "@/app/api/auth/[...nextauth]/route";
import AdminBlogCard from "@/components/AdminBlogCard/AdminBlogCard";
import Pagination from "@/components/Pagination/Pagination";
import SearchBar from "@/components/SearchBar/SearchBar";
import { getServerSession } from "next-auth";
import Link from "next/link";
import React from "react";

async function getAllBlogs(page: number, category: string, query: string) {
  const data = await fetch(
    `${process.env.BASE_URL}/api/blog?page=${page}&category=${category}&query=${query}`,
    {
      cache: "no-store",
    }
  );

  if (!data.ok) {
    throw new Error("Failed to fetch blogs");
  }

  return data.json();
}

interface PageProps {
  searchParams?: { [key: string]: string | undefined };
}

const Posts = async ({ searchParams }: PageProps) => {
  const session = await getServerSession(authOptions);

  if (!session) {
    throw new Error("You must be logged in to access the page");
  }
  const data: { blogs: BlogData[]; total: number; totalPages: number } =
    await getAllBlogs(
      Number(searchParams?.page) || 1,
      searchParams?.category || "all",
      searchParams?.query || ""
    );

  return (
    <section className="mt-4 p-1 md:p-4">
      <div className="flex flex-col space-y-6 md:space-y-0 md:flex-row justify-between">
        <div className="mr-6">
          <h1 className="text-4xl font-semibold mb-2">Manage Posts</h1>
          <h2 className="text-gray-600 ml-0.5">Manage Blog site content</h2>
        </div>
        <div className="flex flex-wrap items-start justify-end -mb-3">
          <Link
            href="/admin/posts/add"
            className="inline-flex px-5 py-3 text-white bg-blue-600 hover:bg-purple-700 focus:bg-blue-700 rounded-md ml-6 mb-3"
          >
            <svg
              aria-hidden="true"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
              className="flex-shrink-0 h-6 w-6 text-white -ml-1 mr-2"
            >
              <path
                stroke-linecap="round"
                stroke-linejoin="round"
                stroke-width="2"
                d="M12 6v6m0 0v6m0-6h6m-6 0H6"
              />
            </svg>
            Add New Post
          </Link>
        </div>
      </div>

      <SearchBar />

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-2 p-2">
        {data.blogs.map((blog) => (
          <AdminBlogCard key={blog?._id} blog={blog} />
        ))}
      </div>

      <Pagination totalPages={data?.totalPages} />
    </section>
  );
};

export default Posts;
