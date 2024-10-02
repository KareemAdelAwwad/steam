import { useState } from "react";
import { IoHeart, IoHeartOutline } from "react-icons/io5";

const Wishlist_Button = ({ hidden = false }) => {
  const [isWishlisted, setIsWishlisted] = useState(false);
  return (
    <button
      className={`px-3 py-2.5 rounded bg-bg-highlight text-text-main body-large cursor-pointer
        hover:bg-bg-hover transition-all lg:block ${
          hidden ? "max-sm:hidden sm:hidden" : "max-sm:block sm:block"
        }`}
    >
      {isWishlisted ? (
        <IoHeart
          size={24}
          className="text-primary inline-block"
          onClick={() => setIsWishlisted(false)}
        />
      ) : (
        <IoHeartOutline
          size={24}
          className="text-text-main inline-block"
          onClick={() => setIsWishlisted(true)}
        />
      )}
    </button>
  );
};

export default Wishlist_Button;
