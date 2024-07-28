import React from "react";

const Discount = ({ game }) => {
  if (game.newPrice) {
    return (
      <div className="w-fit flex gap-2.5 items-center">
        <button className="heading-small text-bg-main bg-accent-green rounded-sm px-4 max-sm:px-3 py-2 hover:bg-opacity-90">
          {game.discount}
        </button>
        <div className="heading-small">
          <h6 className="text-text-dim line-through">{game.price}</h6>
          <h6 className="text-accent-green">{game.newPrice}</h6>
        </div>
      </div>
    );
  } else {
    return (
      <h6 className="heading-small">{game.price}</h6>
    );
  }
};

export default Discount;