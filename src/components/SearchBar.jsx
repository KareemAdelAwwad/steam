import { IoMdSearch } from "react-icons/io";

const SearchBar = () => {
  return (
    <div
      className="bg-[#0E141B30] rounded-md px-3
    xl:flex lg:w-96 md:hidden xl:w-72
    items-center justify-between h-full"
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
