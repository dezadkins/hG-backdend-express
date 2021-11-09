import mongoose from "mongoose";

const Schema = mongoose.Schema;

const PostSchema = Schema(
  {
    name: String,

    desc: String,
    img: {
      data: Buffer,
      contentType: String,
    },
  },
  { timestamps: true }
);

export const Post = mongoose.model("Post", PostSchema);
