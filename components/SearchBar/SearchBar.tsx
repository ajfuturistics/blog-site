import React from "react";

const SearchBar = () => {
  return (
    <div className="box pt-6">
      <div className="box-wrapper">
        <div className=" bg-white rounded flex items-center w-full p-3 shadow-sm border border-gray-200">
          <input
            type="search"
            name=""
            id=""
            placeholder="search for posts"
            className="w-full pl-4 text-sm outline-none focus:outline-none bg-transparent"
          />

          <div className="select">
            <select
              name=""
              id=""
              x-model="image_type"
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

          <button className="outline-none focus:outline-none mx-4">
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
