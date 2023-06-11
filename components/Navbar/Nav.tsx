"use client";
import { useState } from "react";
// import Image from "next/image";
import Link from "next/link";
import MobileMenu from "./MobileMenu";
import DesktopMenu from "./DesktopMenu";

const navData: NavData[] = [
  { id: 1, title: "Home" },
  { id: 2, title: "About" },
  { id: 3, title: "Latest" },
  {
    id: 4,
    title: "Categories",
    subitems: ["Blog", "Jobs", "News", "Information"],
  },
];

const Nav = () => {
  const [open, setOpen] = useState<boolean>(false);
  const [flyerTwo, setFlyerTwo] = useState<boolean>(false);

  return (
    <>
      <div className="sticky top-0 bg-white shadow z-50">
        <div className="max-w-6xl mx-auto px-4 sm:px-6">
          <div className="flex justify-between items-center py-6 md:justify-between md:space-x-10">
            <div className="flex justify-start lg:w-0 lg:flex-1">
              <Link href="/">
                <span className="text-2xl font-semibold">Workflow</span>
                {/* <Image
                  className="h-8 w-auto sm:h-10"
                  src="/assets/logo/logo.svg"
                  alt=""
                  width={32}
                  height={32}
                /> */}
              </Link>
            </div>
            <div className="-mr-2 -my-2 md:hidden">
              <button
                type="button"
                className="bg-white rounded-md p-2 inline-flex items-center justify-center text-gray-400 hover:text-gray-500 hover:bg-gray-100 focus:outline-none focus:ring-2 focus:ring-inset focus:ring-indigo-500"
                onClick={() => setOpen(!open)}
              >
                <span className="sr-only">Open menu</span>
                {/* Heroicon name: outline/menu */}
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
                    d="M4 6h16M4 12h16M4 18h16"
                  />
                </svg>
              </button>
            </div>

            <DesktopMenu
              navData={navData}
              flyerTwo={flyerTwo}
              setFlyerTwo={setFlyerTwo}
            />
          </div>
        </div>
        {/*
            Mobile menu, show/hide based on mobile menu state.

            Entering: "duration-200 ease-out"
            From: ""
            To: ""
            Leaving: "duration-100 ease-in"
            From: "opacity-100 scale-100"
            To: "opacity-0 scale-95"
        */}

        <MobileMenu open={open} setOpen={setOpen} navData={navData} />
      </div>
    </>
  );
};

export default Nav;
