import * as React from "react";
import TextField from "@mui/material/TextField";
import Autocomplete from "@mui/material/Autocomplete";
import { IconButton } from "@mui/material";
import ClearIcon from "@mui/icons-material/Clear";
import { products } from "shared/mock";

export default function SearchBox({ onChange, clear }) {

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
        <TextField {...params} label="Search product..." />
      )}
      clearIcon={<ClearIcon fontSize="small" onClick={clear} />}
    />
  );
}

const productList = products.map((product) => ({
  label: product.name,
  id: product.id,
}));
