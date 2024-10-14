import React, { useEffect } from "react";
import { useTranslation } from "react-i18next";
import { useLocation, useNavigate } from "react-router-dom";

const languages = [
  { code: "en", lang: "English" },
  { code: "vn", lang: "VietNam" },
  { code: "hi", lang: "Hindi" },
];

const LanguageSelector = () => {
    const { i18n } = useTranslation();
    const navigate = useNavigate();
    const location = useLocation();
  
    const changeLanguage = (lng) => {
      i18n.changeLanguage(lng);
      const currentPath = location.pathname.split("/").slice(2).join("/"); // Remove existing language prefix
      navigate(`/${lng}/${currentPath}`);
    };
  
    useEffect(() => {
      const currentLang = location.pathname.split("/")[1];
      if (!languages.map(l => l.code).includes(currentLang)) {
        navigate(`/en${location.pathname}`); // Default to English if no valid language in URL
      }
    }, [location, navigate]);
  
    return (
      <div>
        {languages.map((lng) => (
          <button
            className={lng.code === i18n.language ? "text-red-500" : ""}
            key={lng.code}
            onClick={() => changeLanguage(lng.code)}
          >
            {lng.lang}
          </button>
        ))}
      </div>
    );
  };

export default LanguageSelector;
