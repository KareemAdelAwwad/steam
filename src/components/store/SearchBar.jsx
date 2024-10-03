import { IoMdSearch } from "react-icons/io";

const SearchBar = () => {
  return (
    <div
      className="bg-[#0E141B30] rounded-sm px-3
    xl:flex 2xl:w-[30rem] md:hidden lg:w-[18rem]
    items-center justify-between h-10"
    >
      <input
        type="text"
        placeholder="Search..."
        className="flex border-2 border-gray-300 p-2 placeholder-secondary body-medium"
      />
      <IoMdSearch size={20} className="text-secondary text-2xl top-2 right-2" />
    </div>
  );
};

export default SearchBar;
