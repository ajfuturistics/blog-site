import mongoose, { Schema, model, models } from "mongoose";

const PostSchema = new Schema(
  {
    title: {
      type: String,
      required: [true, "Title is required!"],
    },
    desc: {
      type: String,
      required: [true, "Description is required!"],
    },
    category: {
      type: String,
      required: [true, "Category is required!"],
    },
    banner: {
      type: String,
    },
    imageDesc: {
      type: String,
    },
    userId: {
      type: Schema.Types.ObjectId,
      ref: "User",
      required: [true, "User is required!"],
    },
  },
  {
    timestamps: true,
  }
);

const Post = models.Post || model("Post", PostSchema);

export default Post;
