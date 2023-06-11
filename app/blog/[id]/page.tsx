import Image from "next/image";
import React from "react";
import { BsFillClockFill, BsPersonCircle, BsTagFill } from "react-icons/bs";

const BlogDetails = () => {
  return (
    <div className="relative mt-6 p-4">
      <div className="max-w-4xl mb-10 rounded overflow-hidden flex flex-col mx-auto text-center">
        <a
          href="#"
          className="max-w-3xl mx-auto text-xl sm:text-4xl font-semibold inline-block hover:text-indigo-600 transition duration-500 ease-in-out mb-2"
        >
          The Best Activewear from the Nordstrom Anniversary Sale
        </a>

        <div>
          <Image
            className="w-full my-4"
            src="https://images.pexels.com/photos/5120892/pexels-photo-5120892.jpeg?auto=compress&cs=tinysrgb&fit=crop&h=625.0&sharp=10&w=1500"
            alt="Sunset in the mountains"
            width="0"
            height="0"
            sizes="100vw"
          />
        </div>

        {/* <a href="#">
          <img
            className="w-full my-4"
            src="https://images.pexels.com/photos/5120892/pexels-photo-5120892.jpeg?auto=compress&cs=tinysrgb&fit=crop&h=625.0&sharp=10&w=1500"
            alt="Sunset in the mountains"
          />
        </a> */}
        <p className="text-gray-700 text-base leading-8 max-w-2xl mx-auto">
          Machu Picchu is a 15th-century Inca citadel situated on a mountain
          ridge 2,430 metres (7,970 ft) above sea level. It is located in the
          Cusco Region.
        </p>
        <div className="py-5 text-sm font-regular text-gray-900 flex items-center justify-center">
          <span className="mr-3 flex flex-row items-center">
            <BsFillClockFill />
            <span className="ml-1">6 mins ago</span>
          </span>
          <a
            href="#"
            className="flex flex-row items-center hover:text-indigo-600  mr-3"
          >
            <BsPersonCircle />
            <span className="ml-1">Saurabh Jadhav</span>
          </a>
          <a
            href="#"
            className="flex flex-row items-center hover:text-indigo-600"
          >
            <BsTagFill />
            <span className="ml-1">Information</span>
          </a>
        </div>
        <hr />
      </div>

      <div className="max-w-3xl mx-auto">
        <div className="mt-3 bg-white rounded-b lg:rounded-b-none lg:rounded-r flex flex-col justify-between leading-normal">
          <div className="">
            <p className="text-base leading-8 my-5">
              Lorem Ipsum is simply dummy text of the printing and typesetting
              industry. Lorem Ipsum has been the industry&apos;s standard dummy
              text ever since the 1500s, when an unknown printer took a galley
              of type and scrambled it to make a type specimen book. It has
              survived not only five centuries, but also the leap into
              electronic typesetting, remaining essentially unchanged. It was
              popularised in the 1960s with the release of Letraset sheets
              containing Lorem Ipsum passages, and more recently with desktop
              publishing software like Aldus PageMaker including versions of
              Lorem Ipsum.
            </p>
            <h3 className="text-2xl font-bold my-5">
              #1. What is Lorem Ipsum?
            </h3>
            <p className="text-base leading-8 my-5">
              Lorem Ipsum is simply dummy text of the printing and typesetting
              industry. Lorem Ipsum has been the industry&apos;s standard dummy
              text ever since the 1500s, when an unknown printer took a galley
              of type and scrambled it to make a type specimen book. It has
              survived not only five centuries, but also the leap into
              electronic typesetting, remaining essentially unchanged. It was
              popularised in the 1960s with the release of Letraset sheets
              containing Lorem Ipsum passages, and more recently with desktop
              publishing software like Aldus PageMaker including versions of
              Lorem Ipsum.
            </p>
            <blockquote className="text-md italic leading-8 my-5 p-5 text-indigo-600 font-semibold">
              Lorem Ipsum is simply dummy text of the printing and typesetting
              industry. Lorem Ipsum has been the industry&apos;s standard dummy
              text ever since the 1500s
            </blockquote>
            <p className="text-base leading-8 my-5">
              Lorem Ipsum is simply dummy text of the printing and typesetting
              industry. Lorem Ipsum has been the industry&apos;s standard dummy
              text ever since the 1500s, when an unknown printer took a galley
              of type and scrambled it to make a type specimen book. It has
              survived not only five centuries, but also the leap into
              electronic typesetting, remaining essentially unchanged. It was
              popularised in the 1960s with the release of Letraset sheets
              containing Lorem Ipsum passages, and more recently with desktop
              publishing software like Aldus PageMaker including versions of
              Lorem Ipsum.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default BlogDetails;
