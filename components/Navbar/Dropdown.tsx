"use client";
import Link from "next/link";
import React, { Dispatch, SetStateAction } from "react";

interface PageProps {
  title: string;
  subitems: string[];
  flyerTwo: boolean;
  setFlyerTwo: Dispatch<SetStateAction<boolean>>;
}
const Dropdown = ({ title, subitems, flyerTwo, setFlyerTwo }: PageProps) => {
  return (
    <div className="relative">
      {/* Item active: "text-gray-900", Item inactive: "text-gray-500" */}
      <button
        type="button"
        className="group bg-white rounded-md text-gray-500 inline-flex items-center text-base font-medium hover:text-gray-900 focus:outline-none"
        onClick={() => setFlyerTwo(!flyerTwo)}
      >
        <span>{title}</span>
        {/*
            Heroicon name: solid/chevron-down

            Item active: "text-gray-600", Item inactive: "text-gray-400"
        */}
        <svg
          className={
            flyerTwo === true
              ? "transform rotate-180 ml-2 h-5 w-5 text-gray-400 group-hover:text-gray-500 transition ease-out duration-200"
              : "ml-2 h-5 w-5 text-gray-400 group-hover:text-gray-500"
          }
          xmlns="http://www.w3.org/2000/svg"
          viewBox="0 0 20 20"
          fill="currentColor"
          aria-hidden="true"
        >
          <path
            fillRule="evenodd"
            d="M5.293 7.293a1 1 0 011.414 0L10 10.586l3.293-3.293a1 1 0 111.414 1.414l-4 4a1 1 0 01-1.414 0l-4-4a1 1 0 010-1.414z"
            clipRule="evenodd"
          />
        </svg>
      </button>
      {/*
            'More' flyout menu, show/hide based on flyout menu state.

            Entering: "transition ease-out duration-200"
            From: "opacity-0 translate-y-1"
            To: "opacity-100 translate-y-0"
            Leaving: "transition ease-in duration-150"
            From: "opacity-100 translate-y-0"
            To: "opacity-0 translate-y-1"
      */}
      <div
        onMouseLeave={() => setFlyerTwo(false)}
        className={
          flyerTwo
            ? "opacity-100 translate-y-0 transition ease-out duration-200 absolute z-10 -ml-4 mt-3 transform px-2 w-screen max-w-md sm:px-0 lg:ml-0 lg:left-1/2 lg:-translate-x-1/2"
            : "pointer-events-none opacity-0 translate-y-1 absolute z-10 -ml-4 mt-3 transform px-2 w-screen max-w-md sm:px-0 lg:ml-0 lg:left-1/2 lg:-translate-x-1/2"
        }
      >
        <div className="rounded-lg shadow-lg ring-1 ring-black ring-opacity-5 overflow-hidden">
          <div className="relative grid gap-6 bg-white px-5 py-6 sm:gap-8 sm:p-8">
            {subitems.map((subitem, idx: number) => (
              <Link
                key={`d-${subitem}-${idx}`}
                href={`search?category=${subitem
                  .toLowerCase()
                  .split(" ")
                  .join("-")}`}
                className="-m-3 p-3 flex items-start rounded-lg hover:bg-gray-50"
              >
                <div className="ml-4">
                  <p className="text-base font-medium text-gray-900">
                    {subitem}
                  </p>
                </div>
              </Link>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default Dropdown;
