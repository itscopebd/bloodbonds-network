"use client";

import { FaComments } from "react-icons/fa";

const Comment = () => {
  const handleComment = async () => {};
  return (
    <button className="btn btn-sm capitalize hover:bg-black hover:text-white text-white bg-secondaryColor">
      <FaComments className="w-full" />
    </button>
  );
};
export default Comment;
