import footerData from "@json/footer.json";
import { FaFacebookF } from "react-icons/fa6";
import { BsTwitterX } from "react-icons/bs";

const ClientFooter = () => {
  return (
    <footer className="bg-bg-highlight w-full lg:h-[325px] h-fit flex">
      <div
        className="container 2xl:w-[1388px] mx-auto flex flex-col
        lg:flex-row justify-between items-center
        gap-8 pt-5 pb-20"
      >
        <div className="items-start h-full">
          <div className="flex flex-row gap-2">
            <img
              src="/valv.png"
              alt="valv-logo"
              height={50}
              width={176}
              className="cursor-pointer"
            />
            <img
              src="/F-Logo.png"
              alt="footer-logo"
              height={50}
              width={209}
              className="cursor-pointer"
            />
          </div>
          <div className="mt-6">
            <p className="text-text-dim body-large w-[380px]">
              © 2023 Valve Corporation. All rights reserved. All trademarks are
              property of their respective owners in the US and other countries.
              VAT included in all prices where applicable.
            </p>
          </div>
        </div>

        <div
          className="flex flex-row h-full lg:w-[38%]
        md:w-[55%] w-full gap-8 max-sm:flex-col max-sm:gap-8
        items-start justify-between body-medium max-sm:body-small"
        >
          <div>
            <ul className="text-text-main list-none flex flex-col gap-4">
              {footerData["list-one"].map((item, index) => (
                <li
                  key={index}
                  className="cursor-pointer hover:underline transition-all"
                >
                  {item}
                </li>
              ))}
            </ul>
          </div>

          <div>
            <ul className="text-text-main list-none flex flex-col gap-4">
              {footerData["list-two"].map((item, index) => (
                <li
                  key={index}
                  className="cursor-pointer hover:underline transition-all"
                >
                  {item}
                </li>
              ))}
            </ul>
          </div>
        </div>

        <div className="flex lg:gap-4 items-start h-full gap-20">
          <FaFacebookF
            size={24}
            className="bg-bg-main text-text-dim social-icon hover:bg-bg-hover transition-all"
          />
          <BsTwitterX
            size={24}
            className="bg-bg-main text-text-dim social-icon hover:bg-bg-hover transition-all"
          />
        </div>
      </div>
    </footer>
  );
};

export default ClientFooter;
