import Image from "next/image";
import React from "react";

const About = () => {
  return (
    <section className="dark:bg-gray-800 dark:text-gray-100">
      <div className="container flex flex-col-reverse mx-auto lg:flex-row">
        <div className="flex flex-col justify-center px-6 py-8 space-y-6 rounded-sm sm:p-8 lg:p-12 lg:w-1/2 xl:w-2/5 dark:bg-violet-400 dark:text-gray-900">
          <div className="flex space-x-2 sm:space-x-4">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
              className="flex-shrink-0 w-6 h-6"
            >
              <path
                stroke-linecap="round"
                stroke-linejoin="round"
                stroke-width="2"
                d="M9 12l2 2 4-4M7.835 4.697a3.42 3.42 0 001.946-.806 3.42 3.42 0 014.438 0 3.42 3.42 0 001.946.806 3.42 3.42 0 013.138 3.138 3.42 3.42 0 00.806 1.946 3.42 3.42 0 010 4.438 3.42 3.42 0 00-.806 1.946 3.42 3.42 0 01-3.138 3.138 3.42 3.42 0 00-1.946.806 3.42 3.42 0 01-4.438 0 3.42 3.42 0 00-1.946-.806 3.42 3.42 0 01-3.138-3.138 3.42 3.42 0 00-.806-1.946 3.42 3.42 0 010-4.438 3.42 3.42 0 00.806-1.946 3.42 3.42 0 013.138-3.138z"
              ></path>
            </svg>
            <div className="space-y-2">
              <p className="text-lg font-medium leading-snug">
                Lorem ipsum dolor sit amet
              </p>
              <p className="leading-snug">
                Praesentium ea et neque distinctio quas eius repudiandae quaerat
                obcaecati voluptatem similique!
              </p>
            </div>
          </div>
          <div className="flex space-x-2 sm:space-x-4">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
              className="flex-shrink-0 w-6 h-6"
            >
              <path
                stroke-linecap="round"
                stroke-linejoin="round"
                stroke-width="2"
                d="M9 12l2 2 4-4M7.835 4.697a3.42 3.42 0 001.946-.806 3.42 3.42 0 014.438 0 3.42 3.42 0 001.946.806 3.42 3.42 0 013.138 3.138 3.42 3.42 0 00.806 1.946 3.42 3.42 0 010 4.438 3.42 3.42 0 00-.806 1.946 3.42 3.42 0 01-3.138 3.138 3.42 3.42 0 00-1.946.806 3.42 3.42 0 01-4.438 0 3.42 3.42 0 00-1.946-.806 3.42 3.42 0 01-3.138-3.138 3.42 3.42 0 00-.806-1.946 3.42 3.42 0 010-4.438 3.42 3.42 0 00.806-1.946 3.42 3.42 0 013.138-3.138z"
              ></path>
            </svg>
            <div className="space-y-2">
              <p className="text-lg font-medium leading-snug">
                Lorem ipsum dolor sit amet
              </p>
              <p className="leading-snug">
                Praesentium ea et neque distinctio quas eius repudiandae quaerat
                obcaecati voluptatem similique!
              </p>
            </div>
          </div>
          <div className="flex space-x-2 sm:space-x-4">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
              className="flex-shrink-0 w-6 h-6"
            >
              <path
                stroke-linecap="round"
                stroke-linejoin="round"
                stroke-width="2"
                d="M9 12l2 2 4-4M7.835 4.697a3.42 3.42 0 001.946-.806 3.42 3.42 0 014.438 0 3.42 3.42 0 001.946.806 3.42 3.42 0 013.138 3.138 3.42 3.42 0 00.806 1.946 3.42 3.42 0 010 4.438 3.42 3.42 0 00-.806 1.946 3.42 3.42 0 01-3.138 3.138 3.42 3.42 0 00-1.946.806 3.42 3.42 0 01-4.438 0 3.42 3.42 0 00-1.946-.806 3.42 3.42 0 01-3.138-3.138 3.42 3.42 0 00-.806-1.946 3.42 3.42 0 010-4.438 3.42 3.42 0 00.806-1.946 3.42 3.42 0 013.138-3.138z"
              ></path>
            </svg>
            <div className="space-y-2">
              <p className="text-lg font-medium leading-snug">
                Lorem ipsum dolor sit amet
              </p>
              <p className="leading-snug">
                Praesentium ea et neque distinctio quas eius repudiandae quaerat
                obcaecati voluptatem similique!
              </p>
            </div>
          </div>
        </div>
        <div className="lg:w-1/2 xl:w-3/5 dark:bg-gray-800">
          <div className="flex items-center justify-center p-4 md:p-8 lg:p-12">
            <Image
              src="/assets/images/about-banner.jpg"
              alt=""
              className="object-cover w-full dark:bg-gray-500"
              width="0"
              height="0"
              sizes="100vw"
            />
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;
