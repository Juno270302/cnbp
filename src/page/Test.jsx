import React from "react";
import { Trans, useTranslation } from "react-i18next";
import LanguageSelector from "../components/language-selector/language-selector";

const Test = () => {
  const { t } = useTranslation();
  const { line1, line2 } = t("description", {
    Hay: "hello",
  });
  return (
    <div>
      {/* <LanguageSelector />
      <h1>{t("greeting")}</h1>
      <Trans
        i18nKey={line1}
        values={{
          Hay: "Concat",
        }}
        components={{ 1: <b /> }}
      />
      <p>{line2}</p> */}
      Hello World
    </div>
  );
};

export default Test;
