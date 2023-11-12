import { useTranslation } from "react-i18next";

import { SwitchButton, SwitcherDiv } from "./LanguageSwitcher.styled";

const languages = {
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
          currentLanguage={i18n.resolvedLanguage}
        >
          {languages[language].nativeName}
        </SwitchButton>
      ))}
    </SwitcherDiv>
  );
}
