"use client";
import Image from "next/image";
import Link from "next/link";
import React, { Dispatch, SetStateAction, useState } from "react";

interface PageProps {
  open: boolean;
  setOpen: Dispatch<SetStateAction<boolean>>;
  navData: NavData[];
}
const MobileMenu = ({ open, setOpen, navData }: PageProps) => {
  const [openSubmenu, setOpenSubmenu] = useState<boolean>(false);
  return (
    <div
      className={
        open
          ? "opacity-100 scale-100 transition ease-out duration-200 absolute top-0 inset-x-0 p-2 transform origin-top-right md:hidden"
          : "opacity-0 scale-95 absolute top-0 inset-x-0 p-2 transition transform origin-top-right md:hidden"
      }
    >
      <div className="rounded-lg shadow-lg ring-1 ring-black ring-opacity-5 bg-white divide-y-2 divide-gray-50">
        <div className="pt-5 pb-6 px-5">
          <div className="flex items-center justify-between">
            <div>
              <Image
                className="h-8 w-auto"
                src="/assets/logo/logo.png"
                alt="Workflow"
                width={32}
                height={32}
              />
            </div>
            <div className="-mr-2">
              <button
                type="button"
                className="bg-white rounded-md p-2 inline-flex items-center justify-center text-gray-400 hover:text-gray-500 hover:bg-gray-100 focus:outline-none focus:ring-2 focus:ring-inset focus:ring-indigo-500"
                onClick={() => setOpen(!open)}
              >
                <span className="sr-only">Close menu</span>
                {/* Heroicon name: outline/x */}
                <svg
                  className="h-6 w-6"
                  xmlns="http://www.w3.org/2000/svg"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                  aria-hidden="true"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M6 18L18 6M6 6l12 12"
                  />
                </svg>
              </button>
            </div>
          </div>
          <div className="mt-6">
            <nav className="grid gap-y-8">
              {navData.map((data) =>
                data.subitems ? (
                  <div key={data?.id}>
                    <button
                      type="button"
                      onClick={() => setOpenSubmenu((prev) => !prev)}
                      className="-m-3 p-3 flex items-center rounded-md hover:bg-gray-50"
                    >
                      <span className="ml-3 text-base font-medium text-gray-900">
                        More
                      </span>
                      <svg
                        className={
                          openSubmenu === true
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

                    {openSubmenu && (
                      <ul className="bg-gray-200 text-gray-800 w-full p-4 mt-2">
                        <li className="pl-2">
                          {data.subitems.map((subitem, idx: number) => (
                            <Link
                              key={`${subitem}-${idx}`}
                              href={subitem.toLowerCase().split(" ").join("-")}
                              className="-m-3 p-3 flex items-center rounded-md hover:bg-gray-50"
                            >
                              <span className="ml-3 text-base font-medium text-gray-900">
                                {subitem}
                              </span>
                            </Link>
                          ))}
                        </li>
                      </ul>
                    )}
                  </div>
                ) : (
                  <Link
                    key={data?.id}
                    href={
                      data?.title === "Home"
                        ? "/"
                        : data?.title.toLowerCase().split(" ").join("-")
                    }
                    className="-m-3 p-3 flex items-center rounded-md hover:bg-gray-50"
                  >
                    <span className="ml-3 text-base font-medium text-gray-900">
                      {data?.title}
                    </span>
                  </Link>
                )
              )}
            </nav>
          </div>
        </div>
        <div className="py-6 px-5 space-y-6">
          {/* <div>
                <a
                  href="#"
                  className="w-full flex items-center justify-center px-4 py-2 border border-transparent rounded-md shadow-sm text-base font-medium text-white bg-indigo-600 hover:bg-indigo-700"
                >
                  Sign up
                </a>
                <p className="mt-6 text-center text-base font-medium text-gray-500">
                  Existing customer?
                  <a href="#" className="text-indigo-600 hover:text-indigo-500">
                    Sign in
                  </a>
                </p>
              </div> */}
        </div>
      </div>
    </div>
  );
};

export default MobileMenu;
