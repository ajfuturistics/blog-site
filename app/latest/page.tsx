import BlogCard from "@/components/BlogCard/BlogCard";
import React from "react";

async function getAllBlogs() {
  const data = await fetch(`${process.env.BASE_URL}/api/blog`, {
    cache: "no-store",
  });

  if (!data.ok) {
    throw new Error("Failed to fetch blogs");
  }

  return data.json();
}

const Latest = async () => {
  const data: { blogs: BlogData[] } = await getAllBlogs();

  return (
    <section className="py-6 sm:py-6 dark:bg-gray-800 dark:text-gray-100">
      <div className="container p-6 mx-auto space-y-8">
        <div className="space-y-2 text-center">
          <h2 className="text-3xl font-bold">Partem reprimique an pro</h2>
          <p className="font-serif text-sm dark:text-gray-400">
            Qualisque erroribus usu at, duo te agam soluta mucius.
          </p>
        </div>
        <div className="grid grid-cols-1 gap-x-4 gap-y-8 md:grid-cols-2 lg:grid-cols-4">
          {data.blogs.map((blog) => (
            <BlogCard key={blog?.id} blog={blog} />
          ))}
        </div>
      </div>
    </section>
  );
};

export default Latest;
