import mongoose from "mongoose";

const Schema = mongoose.Schema;

const PostSchema = Schema(
  {
    name: {
      type: String,
      required: true,
    },

    content: {
      type: String,
      required: true,
    },
  },
  { timestamps: true }
);

export const Post = mongoose.model("Post", PostSchema);
