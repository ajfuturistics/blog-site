import Image from "next/image";
import Link from "next/link";
import React from "react";

interface PageProps {
  blog: BlogData;
}
const BlogCard = ({ blog }: PageProps) => {
  return (
    <article className="flex flex-col dark:bg-gray-900">
      <Image
        alt=""
        className="object-cover w-full h-52 dark:bg-gray-500"
        src={blog.banner}
        width="0"
        height="0"
        sizes="100vw"
      />

      <div className="flex flex-col flex-1 p-6">
        <a
          rel="noopener noreferrer"
          href="#"
          className="text-xs tracking-wider uppercase hover:underline dark:text-violet-400"
        >
          {blog.category}
        </a>
        <h3 className="flex-1 py-2 text-lg font-semibold leading-snug">
          {blog.title}
        </h3>
        <div className="flex flex-wrap justify-between pt-3 space-x-2 text-xs dark:text-gray-400">
          <span>{blog.date}</span>
          <Link href={`/blog/${blog.id}`}>Read more</Link>
        </div>
      </div>
    </article>
  );
};

export default BlogCard;
