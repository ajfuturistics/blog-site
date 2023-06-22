"use client";

import axios from "axios";
import Link from "next/link";
import { useRouter } from "next/navigation";
import React, { FormEvent, useRef, useState } from "react";

const UserForm = () => {
  const usernameRef = useRef<HTMLInputElement | null>(null);
  const passwordRef = useRef<HTMLInputElement | null>(null);
  const [submitting, setSubmitting] = useState(false);

  const router = useRouter();

  const handleSubmit = (e: FormEvent) => {
    setSubmitting(true);
    e.preventDefault();
    if (
      (usernameRef && usernameRef?.current?.value === "") ||
      (passwordRef && passwordRef?.current?.value === "")
    ) {
      alert("username and password required");
      return;
    }
    axios
      .post(`${process.env.NEXT_PUBLIC_SERVER_URL}/api/auth/signup`, {
        username: usernameRef?.current?.value,
        password: passwordRef?.current?.value,
      })
      .then((res) => {
        console.log(res.data);
        alert(res.data?.message);
        router.push("/admin/home");
      })
      .catch((err) => {
        console.log(err);
        alert(err?.response?.data?.message);
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
              ref={usernameRef}
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
              ref={passwordRef}
            />
          </div>

          {/* Submit Button */}
          <div className="flex mx-3 mb-5 gap-2">
            <button
              type="submit"
              disabled={submitting}
              className="flex justify-center items-center gap-2 bg-indigo-700 hover:bg-indigo-500 text-white rounded-md py-1 px-2 transition-all duration-300 "
            >
              {submitting ? `Submitting...` : "Add"}
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

export default UserForm;
