import React from "react";

const Discount = ({game}) => {
  return (
    <>
      <button className="heading-small  text-bg-main bg-accent-green rounded-sm px-4 max-sm:px-3 py-2 hover:bg-opacity-90">
        {game.discount}
      </button>
      <div className="heding-small">
        <h6 className="text-text-dim line-through">{game.price}</h6>
        <h6 className="text-accent-green">{game.originalPrice}</h6>
      </div>
    </>
  );
};

export default Discount;
