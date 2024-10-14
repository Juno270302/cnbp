import React, { useEffect } from "react";
import phone from "../../assets/icon_header/icon_phone.png";
import mail from "../../assets/icon_header/icon_email.png";
import search from "../../assets/icon_header/icon_search.png";
import flag_vn from "../../assets/icon_header/icon_vn.png";
import flag_uk from "../../assets/icon_header/icon_uk.png";
import { useTranslation } from "react-i18next";
import { useLocation, useNavigate } from "react-router-dom";

const languages = [
  { code: "en", lang: "English", flag: flag_uk },
  { code: "vn", lang: "VietNam", flag: flag_vn },
];

const Header = () => {
  const { i18n } = useTranslation();
  const navigate = useNavigate();
  const location = useLocation();

  const changeLanguage = (lng) => {
    i18n.changeLanguage(lng);
    const currentPath = location.pathname.split("/").slice(2).join("/"); // Remove existing language prefix
    navigate(`/${lng}/${currentPath}`);
  };

  useEffect(() => {
    // Lấy ngôn ngữ từ localStorage
    const storedLanguage = localStorage.getItem("i18nextLng");

    // Nếu có ngôn ngữ được lưu trữ, sử dụng nó
    if (storedLanguage) {
      i18n.changeLanguage(storedLanguage);
    } else {
      // Mặc định là tiếng Anh nếu không có ngôn ngữ được lưu trữ
      i18n.changeLanguage("en");
    }

    const currentLang = location.pathname.split("/")[1];
    if (!languages.map((l) => l.code).includes(currentLang)) {
      navigate(`/${i18n.language}${location.pathname}`); // Sử dụng ngôn ngữ từ localStorage
    }
  }, [location, navigate, i18n]);

  return (
    <div className="w-full">
      <div className="flex ">
        <div className="w-[47%]  text-[18px] bg-[#39444D] py-5 flex justify-center items-center text-[#FFFFFF] space-x-10 max-md:space-x-2 max-xl:space-x-5 max-md:w-[75%] max-md:text-[10px] max-lg:text-[12px] max-xl:text-[14px] max-2xl:text-[16px] max-xl:py-2 max-2xl:py-3 ">
          <div className="flex items-center space-x-2 max-md:space-x-0 max-lg:space-x-1">
            <img
              src={phone}
              alt="icon_phone"
              className="w-[31px] max-md:w-[10px] max-lg:w-[15px] max-xl:w-[20px] max-2xl:w-[25px]"
            />
            <a href="tel:+84915430543">+84 915 430 543</a>
          </div>
          <div className="flex items-center space-x-2 max-md:space-x-0 max-lg:space-x-1">
            <img
              src={mail}
              alt="icon_mail"
              className="w-[31px] max-md:w-[10px] max-lg:w-[15px] max-xl:w-[20px] max-2xl:w-[25px]"
            />
            <a href="mailto:CAONGUYENBP.COCO@GMAIL.COM">
              CAONGUYENBP.COCO@GMAIL.COM
            </a>
          </div>
        </div>

        <div className="w-[53%] bg-[#969696]  flex justify-center items-center text-[#FFFFFF] space-x-10 max-md:w-[25%] max-md:space-x-0 ">
          <div className="relative flex items-center space-x-2 max-md:hidden">
            <input className="py-2 px-5 text-[18px] text-black w-[440px] rounded-[34px] max-md:w-[200px] max-lg:w-[200px] max-xl:w-[250px] max-2xl:w-[300px] max-xl:py-0 max-2xl:py-1 max-md:text-[10px] max-lg:text-[12px] max-xl:text-[14px] max-2xl:text-[16px]" />
            <div className="absolute right-5  max-xl:right-2 max-2xl:right-3">
              <img
                src={search}
                alt="icon_search"
                className="text-black w-[18px] max-md:w-[10px] max-lg:w-[12px] max-xl:w-[12px] max-2xl:w-[16px]"
              />
            </div>
          </div>
          <div className="flex space-x-2 ">
            {languages.map((lang) => (
              <button key={lang.code} onClick={() => changeLanguage(lang.code)}>
                <img
                  src={lang.flag}
                  alt={lang.lang}
                  className="w-[31px] max-xl:w-[20px] max-2xl:w-[25px]"
                />
              </button>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default Header;
