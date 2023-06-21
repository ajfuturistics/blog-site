"use client";

import Image from "next/image";
import { useRouter } from "next/navigation";
import React, { FormEvent, useEffect, useRef } from "react";

const AdminLogin = () => {
  const usernameRef = useRef<HTMLInputElement>(null);
  const passwordRef = useRef<HTMLInputElement>(null);

  const router = useRouter();

  const user = JSON.parse(localStorage.getItem("user")!);

  const handleLogin = (e: FormEvent) => {
    e.preventDefault();

    if (
      usernameRef.current?.value === "" ||
      passwordRef.current?.value === ""
    ) {
      alert("fill all fields");
    }

    const data = {
      username: usernameRef.current?.value,
      password: passwordRef.current?.value,
    };

    localStorage.setItem("user", JSON.stringify(data));
    router.refresh();
  };

  useEffect(() => {
    if (user) {
      router.push("/admin/home");
    }
  }, [user, router]);

  return (
    <section className="flex my-8">
      <div className="shadow w-full max-w-xs m-auto bg-indigo-100 p-5">
        <header>
          <Image
            alt=""
            className="w-20 mx-auto mb-5"
            src="/assets/logo/year-of-tiger.png"
            width="0"
            height="0"
            sizes="100vw"
          />
        </header>
        <form onSubmit={handleLogin}>
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
            <label className="block mb-2 text-indigo-500" htmlFor="password">
              Password
            </label>
            <input
              className="w-full p-2 mb-6 text-indigo-700 border-b-2 border-indigo-500 outline-none focus:bg-gray-300"
              type="password"
              name="password"
              ref={passwordRef}
            />
          </div>
          <div>
            <input
              className="w-full bg-indigo-700 hover:bg-indigo-500 text-white font-bold py-2 px-4 mb-6"
              type="submit"
            />
          </div>
        </form>
      </div>
    </section>
  );
};

export default AdminLogin;
