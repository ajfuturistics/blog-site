import Image from "next/image";
import React from "react";
import { BsFillClockFill, BsPersonCircle, BsTagFill } from "react-icons/bs";
import moment from "moment";

async function getBlogById(postId: string) {
  const data = await fetch(`${process.env.BASE_URL}/api/blog/${postId}`, {
    cache: "no-store",
  });

  if (!data.ok) {
    throw new Error("Failed to fetch blog");
  }

  return data.json();
}

interface PageProps {
  params?: { id: string };
}
const BlogDetails = async ({ params }: PageProps) => {
  const postId = params?.id;
  const data: { post: BlogData } = await getBlogById(postId || "");
  const dateTimeAgo = moment(new Date(data?.post?.updatedAt)).fromNow();

  return (
    <div className="relative mt-6 p-4">
      <div className="max-w-4xl mb-10 rounded overflow-hidden flex flex-col mx-auto text-center">
        <h3 className="max-w-3xl mx-auto text-xl sm:text-4xl font-semibold inline-block transition duration-500 ease-in-out mb-2">
          {data?.post?.title}
        </h3>

        {data?.post?.banner && (
          <div>
            <Image
              className="w-full my-4"
              src={data?.post?.banner}
              alt="Sunset in the mountains"
              width="0"
              height="0"
              sizes="100vw"
            />
          </div>
        )}

        {/* <a href="#">
          <img
            className="w-full my-4"
            src="https://images.pexels.com/photos/5120892/pexels-photo-5120892.jpeg?auto=compress&cs=tinysrgb&fit=crop&h=625.0&sharp=10&w=1500"
            alt="Sunset in the mountains"
          />
        </a> */}
        {data?.post?.imageDesc && (
          <p className="text-gray-700 text-base leading-8 max-w-2xl mx-auto">
            {data?.post?.imageDesc}
          </p>
        )}
        <div className="py-5 text-sm font-regular text-gray-900 flex items-center justify-center">
          <span className="mr-3 flex flex-row items-center">
            <BsFillClockFill />
            <span className="ml-1">{dateTimeAgo}</span>
          </span>
          <span className="flex flex-row items-center hover:text-indigo-600  mr-3">
            <BsPersonCircle />
            <span className="ml-1">{data?.post?.userId?.username}</span>
          </span>
          <span className="flex flex-row items-center hover:text-indigo-600">
            <BsTagFill />
            <span className="ml-1">{data?.post?.category}</span>
          </span>
        </div>
        <hr />
      </div>

      <div className="max-w-3xl mx-auto">
        <div className="mt-3 bg-white rounded-b lg:rounded-b-none lg:rounded-r flex flex-col justify-between leading-normal">
          <div
            className="w-full flex flex-col gap-2"
            dangerouslySetInnerHTML={{ __html: data?.post?.desc }}
          />
        </div>
      </div>
    </div>
  );
};

export default BlogDetails;
