"use client"

import { FaComments } from "react-icons/fa";

const CommentPendingDonor=()=>{
return(
    <button className="btn btn-sm capitalize hover:bg-black hover:text-white text-white bg-secondaryColor">
    <FaComments className="w-full h-full p-2" />
  </button> 
)
}
export default CommentPendingDonor;