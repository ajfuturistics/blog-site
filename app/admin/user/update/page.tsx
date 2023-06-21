"use client";

import axios from "axios";
import Link from "next/link";
import React, { FormEvent, useState } from "react";

const UserUpdateForm = () => {
  const [user, setUser] = useState({
    username: "",
    password: "",
  });
  const userId = 123;
  const [submitting, setSubmitting] = useState(false);

  const handleSubmit = (e: FormEvent) => {
    setSubmitting(true);
    e.preventDefault();
    axios
      .put(`${process.env.NEXT_PUBLIC_SERVER_URL}/api/user/${userId}`, user)
      .then((res) => {
        console.log(res.data);
      })
      .catch((err) => {
        console.log(err);
      })
      .finally(() => setSubmitting(false));
  };

  return (
    <section className="flex my-8">
      <div className="shadow w-full max-w-xs m-auto bg-indigo-100 p-5">
        <h1 className="text-center my-4">
          <span className="font-semibold text-xl mb-6 text-indigo-700 ">
            Add User
          </span>
        </h1>

        <form onSubmit={handleSubmit}>
          <div>
            <label className="block mb-2 text-indigo-500" htmlFor="username">
              Username
            </label>
            <input
              className="w-full p-2 mb-6 text-indigo-700 border-b-2 border-indigo-500 outline-none focus:bg-gray-300"
              type="text"
              name="username"
            />
          </div>
          <div>
            <label className="block mb-2 text-indigo-500" htmlFor="a-password">
              Password
            </label>
            <input
              className="w-full p-2 mb-6 text-indigo-700 border-b-2 border-indigo-500 outline-none focus:bg-gray-300"
              type="text"
              name="a-password"
            />
          </div>

          {/* Submit Button */}
          <div className="flex mx-3 mb-5 gap-2">
            <button
              type="submit"
              disabled={submitting}
              className="flex justify-center items-center gap-2 bg-indigo-700 hover:bg-indigo-500 text-white rounded-md py-1 px-2 transition-all duration-300 "
            >
              {submitting ? `Submitting...` : "Update"}
            </button>

            <Link
              href="/admin/home"
              className="flex justify-center items-center gap-2 bg-indigo-700 hover:bg-indigo-500 text-white rounded-md py-1 px-2 transition-all duration-300 "
            >
              Cancel
            </Link>
          </div>
        </form>
      </div>
    </section>
  );
};

export default UserUpdateForm;
