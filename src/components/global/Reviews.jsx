// Import Icons
import { BiSolidDislike, BiSolidLike } from "react-icons/bi";

const Reviews = ({ game }) => {
  return (
    <div className="flex justify-between items-end my-1">
      <h4 className="body-medium w-[24%]">{game.title}</h4>
      <div className="w-[45%] flex flex-col mb-1">
        <div className="flex flex-row justify-between">
          <div className="flex flex-row-reverse gap-1 items-center">
            <BiSolidLike className="text-primary" />
            <h4 className="body-small text-primary">{game.postive}</h4>
          </div>
          <div className="flex flex-row-reverse gap-1 items-center">
            <BiSolidDislike className="text-accent-red" />
            <h4 className="body-medium text-accent-red">
              {game.negative}
            </h4>
          </div>
        </div>
        <div className="h-1 w-full flex gap-1">
          <div
            style={{ width: game.postive }}
            className="h-full bg-primary rounded-full"
          ></div>
          <div
            style={{ width: game.negative }}
            className="h-full bg-accent-red rounded-full"
          ></div>
        </div>
      </div>
      <h5 className="body-medium text-secondary w-[24%]">
        {game.total} Reviews
      </h5>
    </div>
  );
};

export default Reviews;
