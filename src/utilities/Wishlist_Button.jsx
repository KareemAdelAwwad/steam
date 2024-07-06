import React from "react";
import { IoHeart, IoHeartOutline } from "react-icons/io5";

const Wishlist_Button = ({ hidden = false }) => {
  return (
    <button
      className={`px-3 py-3 rounded bg-bg-highlight text-text-main body-large cursor-pointer hover:bg-bg-hover transition-all lg:block ${
        hidden ? "max-sm:hidden sm:hidden" : "max-sm:block sm:block"
      }`}
    >
      <IoHeartOutline size={24} className="text-text-main inline-block" />
    </button>
  );
};

export default Wishlist_Button;
