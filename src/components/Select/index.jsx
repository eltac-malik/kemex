import * as React from "react";
import Box from "@mui/material/Box";
import MenuItem from "@mui/material/MenuItem";
import FormControl from "@mui/material/FormControl";
import Select from "@mui/material/Select";
import { TR_AZ } from "../../shared/lang/locales/az";
import { TR_EN } from "../../shared/lang/locales/en";
import { TR_RU } from "../../shared/lang/locales/ru";
import { useTranslation } from "react-i18next";
import i18n from "i18next";
import { initReactI18next } from "react-i18next";

i18n
  .use(initReactI18next)
  .init({
    resources: {
      en: {
        translation: TR_EN,
      },
      az: {
        translation: TR_AZ,
      },
      ru: {
        translation: TR_RU,
      },
    },
    lng: "az", // varsayılan dil
    fallbackLng: "az", // varsayılan dili belirtin
    interpolation: {
      escapeValue: false,
    },
  });

export const BasicSelect = ({ value, onChange }) => {
  const [lang, setLang] = React.useState("az");
  const { i18n } = useTranslation();
  
  const handleChange = (event) => {
    const selectedLang = event.target.value;
    setLang(selectedLang);
    i18n.changeLanguage(selectedLang);
  };
  
  return (
    <Box sx={{ minWidth: 120 }}>
      <FormControl fullWidth>
        <Select
          labelId="demo-simple-select-label"
          id="demo-simple-select"
          value={lang}
          onChange={handleChange}
        >
          <MenuItem value={"az"}>AZ</MenuItem>
          <MenuItem value={"en"}>EN</MenuItem>
          <MenuItem value={"ru"}>RU</MenuItem>
        </Select>
      </FormControl>
    </Box>
  );
};