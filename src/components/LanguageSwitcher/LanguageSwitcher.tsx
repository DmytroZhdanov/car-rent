import { useTranslation } from "react-i18next";

import { SwitchButton, SwitcherDiv } from "./LanguageSwitcher.styled";

type Language = {
  nativeName: string;
};

type Languages = {
  [key: string]: Language;
};

const languages: Languages = {
  en: { nativeName: "🇬🇧" },
  uk: { nativeName: "🇺🇦" },
};

export default function LanguageSwitcher() {
  const { i18n } = useTranslation();

  return (
    <SwitcherDiv>
      {Object.keys(languages).map(language => (
        <SwitchButton
          key={language}
          type="submit"
          onClick={() => i18n.changeLanguage(language)}
          buttonLanguage={language}
          currentLanguage={i18n.resolvedLanguage || "en"}
        >
          {languages[language].nativeName}
        </SwitchButton>
      ))}
    </SwitcherDiv>
  );
}