import React from "react";

const SliderHeader = ({title}) => {
  return (
    <div className="flex justify-between mb-6 px-6 items-center">
      <h2 className="heading-small">{title}</h2>
      <button className="text-text-dim border-text-dim border-[1px] border-solid px-5 py-2 rounded-md hover:border-text-main hover:text-text-main transition-all">
        See more
      </button>
    </div>
  );
};

export default SliderHeader;
