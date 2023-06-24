"use client";
import { usePathname, useSearchParams, useRouter } from "next/navigation";
import React, { FormEvent, useEffect, useRef } from "react";

const SearchBar = () => {
  const router = useRouter();
  const searchParams = useSearchParams();
  const pathname = usePathname();

  const category = searchParams.get("category") || "all";
  const query = searchParams.get("query") || "";

  const searchRef = useRef<HTMLInputElement | null>(null);
  const categoryRef = useRef<HTMLSelectElement | null>(null);

  const handleSearch = (e: FormEvent) => {
    e.preventDefault();

    let pathurl = `${pathname}?`;
    if (!category && !query) {
      return;
    }
    if (categoryRef.current?.value && searchRef.current?.value) {
      pathurl += `category=${categoryRef.current?.value}&query=${searchRef.current?.value}`;
    } else if (categoryRef.current?.value) {
      pathurl += `category=${categoryRef.current?.value}`;
    } else if (searchRef.current?.value) {
      pathurl += `query=${searchRef.current?.value}`;
    }

    router.push(pathurl);
  };

  useEffect(() => {
    if (categoryRef?.current && category) {
      categoryRef!.current.value = category;
    }
    if (searchRef?.current && query) {
      searchRef!.current.value = query;
    }
  }, [category, query]);

  return (
    <div className="box pt-6">
      <div className="box-wrapper">
        <div className=" bg-white rounded flex items-center w-full p-3 shadow-sm border border-gray-200">
          <input
            type="search"
            ref={searchRef}
            placeholder="search for posts"
            className="w-full pl-4 text-sm outline-none focus:outline-none bg-transparent"
          />

          <div className="select">
            <select
              ref={categoryRef}
              className="text-sm outline-none focus:outline-none bg-transparent"
            >
              <option value="all" selected>
                All
              </option>
              <option value="blog">Blog</option>
              <option value="job">Job</option>
              <option value="news">News</option>
              <option value="info">Information</option>
            </select>
          </div>

          <button
            onClick={handleSearch}
            className="outline-none focus:outline-none mx-4"
          >
            <svg
              className=" w-5 text-gray-600 h-5 cursor-pointer"
              fill="none"
              stroke-linecap="round"
              stroke-linejoin="round"
              stroke-width="2"
              stroke="currentColor"
              viewBox="0 0 24 24"
            >
              <path d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z"></path>
            </svg>
          </button>
        </div>
      </div>
    </div>
  );
};

export default SearchBar;
