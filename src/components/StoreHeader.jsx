import headerData from "../JSON/header.json";
import SearchBar from "./SearchBar";
import { NavLink } from "react-router-dom";
import { IoMenu, IoSettingsSharp } from "react-icons/io5";

const StoreHeader = () => {
  const StoreHeader = headerData.store;
  const NavClases = ({ isActive }) => {
    return isActive
      ? "inline-block mx-1 my-0 rounded-md py-3 xl:px-7 px-4 bg-secondary hover:bg-[#4B619B75] transition-all"
      : "inline-block mx-1 my-0 rounded-md py-3 xl:px-7 px-4 hover:bg-bg-hover transition-all";
  };

  return (
    <>
      <header className="flex md:hidden bg-bg-tertiary text-text-main body-medium px-2.5 py-1.5 w-full h-14 justify-between">
        <IoMenu
          size={50}
          className="text-text-main text-3xl p-2 cursor-pointer"
        />
        <div>
          <div className="lg:flex md:hidden items-center h-full w-fit">
            <ul className="list-none flex-row flex">
              <li>
                <NavLink to="/wishlist" className={NavClases}>
                  Wishlist
                </NavLink>
              </li>
              <li>
                <NavLink to="/cart" className={NavClases}>
                  Cart
                </NavLink>
              </li>
            </ul>
          </div>
        </div>
      </header>

      <header
        className="md:flex hidden gap-5 bg-bg-tertiary text-text-main body-medium lg:px-1.5 py-7.5
        w-full h-14 md:justify-center lg:justify-between"
      >
        <div className="flex items-center h-full w-fit">
          <ul className="list-none">
            {StoreHeader.map((item, index) => (
              <li key={index} className="inline-block">
                <NavLink to={item.href} className={NavClases}>
                  {item.label}
                </NavLink>
              </li>
            ))}
          </ul>
        </div>

        <div>
          <SearchBar />
        </div>

        <div className="flex items-center justify-center">
          <div className="lg:flex md:hidden items-center h-full w-fit">
            <ul className="list-none flex-row flex">
              <li>
                <NavLink to="/wishlist" className={NavClases}>
                  Wishlist
                </NavLink>
              </li>
              <li>
                <NavLink to="/cart" className={NavClases}>
                  Cart
                </NavLink>
              </li>
            </ul>
          </div>
          <IoSettingsSharp
            size={20}
            className="social-icon text-text-dim ml-8 md:ml-2 md:hidden lg:flex
            bg-[#76808C30] hover:bg-[#5A5A5A30] transition-all"
          />
        </div>
      </header>
    </>
  );
};

export default StoreHeader;
