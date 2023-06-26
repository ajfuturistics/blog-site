"use client";

import axios from "axios";
import Link from "next/link";
import { useRouter, useSearchParams } from "next/navigation";
import React, { FormEvent, useEffect, useRef, useState } from "react";
import { toast } from "react-hot-toast";

export const metadata = {
  title: "Admin Update User",
  description:
    "Lorem ipsum dolor sit amet consectetur adipisicing elit. Quaerat aperiam dicta possimus voluptatem laboriosam quidem fugiat expedita ipsam officia animi!",
};

const UserUpdateForm = () => {
  const [username, setUsername] = useState("");
  const passwordRef = useRef<HTMLInputElement | null>(null);
  const [submitting, setSubmitting] = useState(false);
  const [deleting, setDeleting] = useState(false);

  const router = useRouter();
  const searchParams = useSearchParams();

  const userId = searchParams.get("id");

  const handleSubmit = (e: FormEvent) => {
    setSubmitting(true);
    e.preventDefault();
    if (
      (username && username === "") ||
      (passwordRef && passwordRef?.current?.value === "")
    ) {
      toast.error("username and password required");
      return;
    }
    axios
      .put(`${process.env.NEXT_PUBLIC_SERVER_URL}/api/user?id=${userId}`, {
        username: username,
        password: passwordRef?.current?.value,
      })
      .then((res) => {
        console.log(res.data);
        toast.success(res?.data?.message || "User updated successfully");
        router.push("/admin/home");
      })
      .catch((err) => {
        console.log(err);
        toast.error(err?.response?.data?.message || "Failed to update user");
      })
      .finally(() => setSubmitting(false));
  };
  const handleDelete = (e: FormEvent) => {
    e.preventDefault();
    setDeleting(true);
    axios
      .delete(`${process.env.NEXT_PUBLIC_SERVER_URL}/api/user/${userId}`)
      .then((res) => {
        console.log(res.data);
        toast.success(res?.data?.message || "User removed sucessfully");
        router.push("/admin/home");
      })
      .catch((err) => {
        console.log(err);
        toast.error(err?.response?.data?.message || "Failed to delete user");
      })
      .finally(() => setDeleting(false));
  };

  useEffect(() => {
    const fetchUser = async () => {
      axios
        .get(`${process.env.NEXT_PUBLIC_SERVER_URL}/api/user/${userId}`)
        .then((res) => {
          const name = res.data.user.username;
          setUsername(name);
        })
        .catch((err) => {
          console.log(err);
          alert(err?.response?.data?.message);
        })
        .finally(() => setSubmitting(false));
    };
    if (userId) fetchUser();
  }, [userId, router]);

  return (
    <section className="flex my-8">
      <div className="shadow w-full max-w-xs m-auto bg-indigo-100 p-5">
        <h1 className="text-center my-4">
          <span className="font-semibold text-xl mb-6 text-indigo-700 ">
            Update User
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
              value={username}
              onChange={(e) => setUsername(e.target.value)}
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
              placeholder="Enter new password"
              ref={passwordRef}
            />
          </div>

          {/* Submit Button */}
          <div className="flex mx-3 mb-5 gap-2">
            <button
              type="submit"
              disabled={submitting || deleting}
              className="flex justify-center items-center gap-2 bg-indigo-700 hover:bg-indigo-500 text-white rounded-md py-1 px-2 transition-all duration-300 "
            >
              {submitting ? `Submitting...` : "Update"}
            </button>
            <button
              type="button"
              onClick={handleDelete}
              disabled={deleting || submitting}
              className="flex justify-center items-center gap-2 bg-indigo-700 hover:bg-indigo-500 text-white rounded-md py-1 px-2 transition-all duration-300 "
            >
              {deleting ? `Submitting...` : "Delete"}
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
