import {
  IoIosArrowDroprightCircle,
  IoIosArrowDropleftCircle,
} from "react-icons/io";
import F2P_Game_Card from "./F2P_Game_Card";

const GroupSlider = () => {
  return (
    <>
      <h2 className="px-3 mb-4 heading-large">Free To Play</h2>
      <div className="w-full h-fit bg-bg-main bg-opacity-20 rounded-md">
        <div className="py-5 h-full">
          <F2P_Game_Card />
        </div>
      </div>
    </>
  );
};

export default GroupSlider;
