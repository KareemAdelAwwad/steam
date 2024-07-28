import { FaRegHeart } from "react-icons/fa";

const Btn = ({
  title = "Title Here",
  outline = false,
  size = 2,
  hasIcon = false,
  Icon = FaRegHeart,
}) => {
  let BTNclass;
  if (outline) {
    BTNclass = (`bg-transparent border-solid border-[1px] border-text-dim opacity-20 body-medium px-${3*size} py-${2*size} rounded hover:opacity-80 transition-all`);
  } else {
    BTNclass = (`bg-bg-highlight body-medium px-${3*size} py-${2*size} rounded hover:bg-bg-hover transition-all`);
  }
  return (
    <button className={BTNclass}>
      {title}
      {hasIcon && <Icon className="inline ml-2.5" size={20} />}
    </button>
  );
};

export default Btn;
