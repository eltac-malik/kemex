import {useTranslation} from 'react-i18next';

import TextField from "@mui/material/TextField";
import Autocomplete from "@mui/material/Autocomplete";
import ClearIcon from "@mui/icons-material/Clear";

import { products } from "shared/mock";


export default function SearchBox({ onChange, clear }) {
  const {t} = useTranslation()

  return (
    <Autocomplete
      disablePortal
      autoHighlight
      id="combo-box-demo"
      options={productList}
      sx={{ width: 220 }}
      onChange={onChange}
      getOptionLabel={(option) => option.label}
      renderInput={(params) => (
        <TextField {...params} label={t('searchBar')} />
      )}
      clearIcon={<ClearIcon fontSize="small" onClick={clear} />}
    />
  );
}

const productList = products.map((product) => ({
  label: product.name,
  id: product.id,
}));
