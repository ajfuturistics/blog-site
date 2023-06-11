"use client";
import React, { Dispatch, SetStateAction } from "react";
import Dropdown from "./Dropdown";
import Link from "next/link";

interface PageProps {
  navData: NavData[];
  flyerTwo: boolean;
  setFlyerTwo: Dispatch<SetStateAction<boolean>>;
}

const DesktopMenu = ({ navData, flyerTwo, setFlyerTwo }: PageProps) => {
  return (
    <nav className="hidden md:flex space-x-10">
      {navData.map((data) =>
        data.subitems ? (
          <Dropdown
            key={data.id}
            flyerTwo={flyerTwo}
            setFlyerTwo={setFlyerTwo}
            title={data.title}
            subitems={data.subitems}
          />
        ) : (
          <Link
            key={data.id}
            href={
              data?.title === "Home"
                ? "/"
                : data?.title.toLowerCase().split(" ").join("-")
            }
            className="text-base font-medium text-gray-500 hover:text-gray-900"
          >
            {data.title}
          </Link>
        )
      )}
    </nav>
  );
  {
    /* <div className="hidden md:flex items-center justify-end md:flex-1 lg:w-0">
  <a
    href="#"
    className="whitespace-nowrap text-base font-medium text-gray-500 hover:text-gray-900"
  >
    Sign in
  </a>
  <a
    href="#"
    className="ml-8 whitespace-nowrap inline-flex items-center justify-center px-4 py-2 border border-transparent rounded-md shadow-sm text-base font-medium text-white bg-indigo-600 hover:bg-indigo-700"
  >
    Sign up
  </a>
</div> */
  }
};

export default DesktopMenu;
