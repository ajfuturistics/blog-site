"use client";

import axios from "axios";
import Image from "next/image";
import Link from "next/link";
import React, { FormEvent, useState, useRef } from "react";
import { Editor } from "@tinymce/tinymce-react";
import { Editor as TinyMCEEditor } from "tinymce";

const PostAddForm = () => {
  const editorRef = useRef<TinyMCEEditor | null>(null);
  const [post, setPost] = useState<PostData>({
    banner: "",
    title: "",
    category: "",
    desc: "",
  });
  const [imagePreview, setImagePreview] = useState("");
  const [submitting, setSubmitting] = useState(false);

  const handleSubmit = (e: FormEvent) => {
    setSubmitting(true);
    e.preventDefault();
    axios
      .post(`${process.env.NEXT_PUBLIC_SERVER_URL}/api/user/add`, post)
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
      <div className="shadow w-full max-w-md m-auto bg-indigo-100 p-5">
        <h1 className="text-center my-4">
          <span className="font-semibold text-xl mb-6 text-indigo-700 ">
            Add Post
          </span>
        </h1>

        <form onSubmit={handleSubmit}>
          {/* Banner Image */}
          <div className="flex flex-wrap justify-center items-center">
            <div className="w-full mb-4 bg-white rounded shadow transition-all overflow-hidden">
              <div className="relative flex flex-col bg-indigo-50 cursor-pointer overflow-hidden text-center transition-colors hover:bg-indigo-100">
                <div className="flex w-full items-center justify-center">
                  <label className="w-64 flex flex-col items-center px-1 py-2 text-indigo-700  tracking-wide uppercase cursor-pointer">
                    <svg
                      className="w-8 h-8"
                      fill="currentColor"
                      xmlns="http://www.w3.org/2000/svg"
                      viewBox="0 0 20 20"
                    >
                      <path d="M16.88 9.1A4 4 0 0 1 16 17H5a5 5 0 0 1-1-9.9V7a3 3 0 0 1 4.52-2.59A4.98 4.98 0 0 1 17 8c0 .38-.04.74-.12 1.1zM11 11h3l-4-4-4 4h3v3h2v-3z" />
                    </svg>
                    <span className="mt-1 text-base leading-normal">
                      Select a banner image
                    </span>
                    <input
                      type="file"
                      className="hidden"
                      accept="image/*"
                      onChange={(e) => {
                        if (e.target.files) {
                          setImagePreview(
                            URL.createObjectURL(e?.target?.files[0])
                          );
                          setPost({
                            ...post,
                            banner: URL.createObjectURL(e?.target?.files[0]),
                          });
                        }
                      }}
                    />
                  </label>
                </div>
              </div>
              <div className="aspect-video w-full relative overflow-hidden">
                {imagePreview && (
                  <Image
                    className="w-full h-full"
                    src={imagePreview}
                    width="0"
                    height="0"
                    sizes="100vw"
                    alt=""
                  />
                )}
              </div>
            </div>
          </div>

          {/* Other Fields */}
          <div>
            <label className="block mb-2 text-indigo-500" htmlFor="title">
              Title
            </label>
            <input
              className="w-full p-2 mb-6 text-indigo-700 border-b-2 border-indigo-500 outline-none focus:bg-gray-300"
              type="text"
              name="title"
            />
          </div>
          <div>
            <label className="block mb-2 text-indigo-500" htmlFor="category">
              Category
            </label>
            <select
              className="w-full p-2 mb-6 text-indigo-700 border-b-2 border-indigo-500 outline-none focus:bg-gray-300"
              name="category"
            >
              <option value="">Select Category</option>
              <option value="blog">Blog</option>
              <option value="job">Job</option>
              <option value="news">News</option>
              <option value="info">Information</option>
            </select>
          </div>

          {/* TinyMCE Section */}
          <Editor
            onInit={(evt, editor) => (editorRef.current = editor)}
            initialValue=""
            init={{
              height: 500,
              menubar: false,
              plugins: [
                "advlist autolink lists link image charmap print preview anchor",
                "searchreplace visualblocks code fullscreen",
                "insertdatetime media table paste code help wordcount",
              ],
              toolbar:
                "undo redo | formatselect | " +
                "bold italic backcolor | alignleft aligncenter " +
                "alignright alignjustify | bullist numlist outdent indent | " +
                "removeformat | help",
              content_style:
                "body { font-family:Helvetica,Arial,sans-serif; font-size:14px }",
            }}
          />

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

export default PostAddForm;
