import React, { useState } from "react";
import logo from "../../assets/image/home/image_logo.png";
import icon_menu from "../../assets/icons_navbar/icon_menu_main.png";
import { useTranslation } from "react-i18next";
import { Link, useLocation } from "react-router-dom";
import { motion, AnimatePresence } from "framer-motion";

const NavBar = () => {
  const { t } = useTranslation();
  const menu = t("Menu");
  const location = useLocation();
  const currentLanguage = localStorage.getItem("i18nextLng");
  const [showProducts, setShowProducts] = useState(false); // State for dropdown visibility

  // Hàm kiểm tra xem đường dẫn có bắt đầu bằng một trong các tiền tố ngôn ngữ không
  const isCurrentPath = (path) => {
    return (
      location.pathname === path ||
      location.pathname.startsWith("/vn" + path) ||
      location.pathname.startsWith("/en" + path)
    );
  };

  return (
    <div className="w-full ">
      <div className="py-10 px-[10rem] max-sm:px-[3rem] max-md:px-[3rem] max-lg:px-[3rem] max-xl:px-[5rem] max-2xl:px-[10rem] max-md:py-5 border">
        <div className="w-full flex max-md:hidden">
          <div className="w-[10%] flex items-center justify-center ">
            <img
              src={logo}
              alt="logo"
              className="w-[115px] max-sm:w-[36px] max-md:w-[60px] max-lg:w-[80px] max-xl:w-[100px] max-2xl:w-[115px]"
            />
          </div>
          <div className=" w-[90%] flex items-center justify-center space-x-16 text-[20px] font-mainB max-md:text-[14px] max-lg:text-[16px] max-xl:text-[18px] max-2xl:text-[20px] max-md:space-x-5 max-lg:space-x-5 max-xl:space-x-12 max-2xl:space-x-14">
            <button
              className={`hover:text-[#639F7A] ${
                isCurrentPath("/home") ? "border-b-[2.5px] border-black" : ""
              }`}
            >
              <Link to={`/${currentLanguage}/home`}>{menu.Home}</Link>
            </button>
            <button
              className={`hover:text-[#639F7A] ${
                isCurrentPath("/our") ? "border-b-[2.5px] border-black" : ""
              }`}
            >
              <Link to={`/${currentLanguage}/our`}>{menu.Our}</Link>
            </button>
            {/* Lặp lại cho các mục menu khác */}
            <button
              className={`hover:text-[#639F7A] relative ${
                isCurrentPath("/product") ? "border-b-[2.5px] border-black" : ""
              }`}
              onMouseEnter={() => setShowProducts(true)}
              onMouseLeave={() => setShowProducts(false)}
            >
              <Link to={`/${currentLanguage}/product`}>{menu.Product}</Link>
              <AnimatePresence>
                {showProducts && (
                  <motion.div
                    className="absolute w-[200px] bg-white shadow-md rounded-md p-4 z-50 pl-10"
                    initial={{ opacity: 0, y: -10 }}
                    animate={{ opacity: 1, y: 0 }}
                    exit={{ opacity: 0, y: -10 }}
                    transition={{ duration: 0.2 }}
                  >
                    <div className="flex flex-col font-mainR text-[#E1E1E1] text-[18px] space-y-3">
                      <button className=" text-left hover:text-black">
                        <Link to={`/${currentLanguage}/product/1`}>
                          Sản phẩm 1
                        </Link>
                      </button>
                      <button className="text-left hover:text-black">
                        <Link to={`/${currentLanguage}/product/2`}>
                          Sản phẩm 2
                        </Link>
                      </button>
                      <button className="text-left hover:text-black">
                        <Link to={`/${currentLanguage}/product/5`}>
                          Sản phẩm 5
                        </Link>
                      </button>
                    </div>
                  </motion.div>
                )}
              </AnimatePresence>
            </button>
            <button
              className={`hover:text-[#639F7A] ${
                isCurrentPath("/library") ? "border-b-[2.5px] border-black" : ""
              }`}
            >
              <Link to={`/${currentLanguage}/library`}>{menu.Library}</Link>
            </button>
            <button
              className={`hover:text-[#639F7A] ${
                isCurrentPath("/recruitment")
                  ? "border-b-[2.5px] border-black"
                  : ""
              }`}
            >
              <Link to={`/${currentLanguage}/recruitment`}>
                {menu.Recruitment}
              </Link>
            </button>
            <button
              className={`hover:text-[#639F7A] ${
                isCurrentPath("/contact") ? "border-b-[2.5px] border-black" : ""
              }`}
            >
              <Link to={`/${currentLanguage}/contact`}>{menu.Contact}</Link>
            </button>
          </div>
        </div>
        <div className="hidden max-md:block relative w-full">
          <div className="absolute top-1.5 -left-6  max">
            <img src={icon_menu} alt="icon_menu" />
          </div>
          <div className="w-full flex items-center justify-center">
            <div className="w-[25%] "><img src={logo} alt="logo" className="w-[36px] h-[36px]" /></div>
            <div className="w-[70%] text-right  ">
              <input type="text" className="bg-[#D9D9D9] py-1 px-5 rounded-[15px]" />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default NavBar;
