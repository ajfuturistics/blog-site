"use client";

import axios from "axios";
import Image from "next/image";
import Link from "next/link";
import React, { FormEvent, useState, useRef } from "react";
import { Editor } from "@tinymce/tinymce-react";
import { Editor as TinyMCEEditor } from "tinymce";
import { useRouter } from "next/navigation";
import { toast } from "react-hot-toast";
import { categoryData } from "@/utils/categoryData";

export const metadata = {
  title: "Admin Add New Post",
  description:
    "Lorem ipsum dolor sit amet consectetur adipisicing elit. Quaerat aperiam dicta possimus voluptatem laboriosam quidem fugiat expedita ipsam officia animi!",
};

const PostAddForm = () => {
  const router = useRouter();

  const editorRef = useRef<TinyMCEEditor | null>(null);
  const [post, setPost] = useState<PostData>({
    banner: "",
    imageDesc: "",
    title: "",
    category: "",
    desc: "",
  });
  const [imagePreview, setImagePreview] = useState("");
  const [submitting, setSubmitting] = useState(false);

  const handleFileChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    if (e.target.files && e.target.files?.length > 0) {
      let file = e?.target?.files[0];

      const fsize = Math.round(file.size / 1024);

      // Allowing file type
      var allowedExtensions = /(\.jpg|\.jpeg|\.png|\.webp)$/i;

      if (!allowedExtensions.exec(file.name)) {
        toast.error("Invalid file type");
        return;
      }

      // Checking image size
      if (fsize >= 4096) {
        toast.error("Image too Big, please select a file less than 4mb");
        return;
      }

      let fileReader = new FileReader();
      fileReader.readAsDataURL(file);
      fileReader.onloadend = async () => {
        if (typeof fileReader.result === "string") {
          setPost({
            ...post,
            banner: fileReader.result,
          });
          setImagePreview(URL.createObjectURL(file));
        }
      };

      // setPost({
      //   ...post,
      //   banner: file,
      // });
      // setImagePreview(URL.createObjectURL(file));
    }
  };

  const handleSubmit = (e: FormEvent) => {
    e.preventDefault();

    const data = { ...post, desc: editorRef.current?.getContent() };

    if (!data.title || !data.category || !data.desc) {
      toast.error("Fill all required fields");
      return;
    }
    if (data?.desc.length <= 300) {
      toast.error("Post description is too short");
      return;
    }
    setSubmitting(true);
    const toastId = toast.loading("Loading...");

    axios
      .post(`${process.env.NEXT_PUBLIC_SERVER_URL}/api/blog`, data)
      .then((res) => {
        console.log(res.data);
        toast.success(res.data.message || "Post added successfully", {
          id: toastId,
        });
        router.push("/admin/posts");
      })
      .catch((err) => {
        console.log(err);
        toast.error(err.response.data.message || "Something went wrong", {
          id: toastId,
        });
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
                      onChange={handleFileChange}
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

          <div>
            <label className="block mb-2 text-indigo-500" htmlFor="imageDesc">
              Image Description
            </label>
            <input
              className="w-full p-2 mb-6 text-indigo-700 border-b-2 border-indigo-500 outline-none focus:bg-gray-300"
              type="text"
              name="imageDesc"
              maxLength={160}
              value={post?.imageDesc}
              onChange={(e) =>
                setPost((prev) => ({ ...prev, imageDesc: e.target.value }))
              }
            />
          </div>

          {/* Other Fields */}
          <div>
            <label className="block mb-2 text-indigo-500" htmlFor="title">
              Title <span className="text-red-600">*</span>
            </label>
            <input
              className="w-full p-2 mb-6 text-indigo-700 border-b-2 border-indigo-500 outline-none focus:bg-gray-300"
              type="text"
              name="title"
              value={post?.title}
              onChange={(e) =>
                setPost((prev) => ({ ...prev, title: e.target.value }))
              }
            />
          </div>
          <div>
            <label className="block mb-2 text-indigo-500" htmlFor="category">
              Category <span className="text-red-600">*</span>
            </label>
            <select
              className="w-full p-2 mb-6 text-indigo-700 border-b-2 border-indigo-500 outline-none focus:bg-gray-300"
              name="category"
              value={post?.category}
              onChange={(e) =>
                setPost((prev) => ({ ...prev, category: e.target.value }))
              }
            >
              <option value="">Select Category</option>
              {categoryData.map((c) => (
                <option key={c.id} value={c.value}>
                  {c.name}
                </option>
              ))}
            </select>
          </div>

          {/* TinyMCE Section */}
          <div>
            <label className="block mb-2 text-indigo-500">
              Description <span className="text-red-600">*</span>
            </label>
            <Editor
              onInit={(evt, editor) => (editorRef.current = editor)}
              initialValue=""
              init={{
                height: 500,
                menubar: false,
                plugins:
                  "advcode advlist advtable anchor autocorrect autolink autosave casechange charmap checklist codesample directionality editimage emoticons export footnotes formatpainter help insertdatetime link linkchecker lists media mediaembed mergetags nonbreaking pagebreak permanentpen powerpaste searchreplace table tableofcontents tinymcespellchecker typography visualblocks visualchars wordcount",
                toolbar:
                  "undo redo spellcheckdialog  | blocks fontfamily fontsize | bold italic underline forecolor backcolor link | align lineheight checklist bullist numlist | indent outdent | removeformat typography",
                // content_style:
                //   "body { font-family:inherit,Arial,sans-serif; font-size:14px }",
              }}
            />
          </div>

          {/* Submit Button */}
          <div className="flex mx-3 my-5 gap-2 ">
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
