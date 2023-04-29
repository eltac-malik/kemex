import * as React from 'react';
import Box from '@mui/material/Box';
import MenuItem from '@mui/material/MenuItem';
import FormControl from '@mui/material/FormControl';
import Select from '@mui/material/Select';
import { TR_AZ } from '../../shared/lang/locales/az';
import { TR_EN } from '../../shared/lang/locales/en';
import { TR_RU } from '../../shared/lang/locales/ru';


export const BasicSelect = () => {
  const [age, setAge] = React.useState(TR_AZ);

  const handleChange = (event) => {
    setAge(event.target.value);
  };

  return (
    <Box  sx={{ minWidth: 80, paddingTop: '5px', paddingBottom: '5px' }}>
    <FormControl fullWidth>
      
      <Select
        labelId="demo-simple-select-label"
        id="demo-simple-select"
        value={age}
        onChange={handleChange}
      >
        <MenuItem value={TR_AZ}>AZ</MenuItem>
        <MenuItem value={TR_EN}>EN</MenuItem>
        <MenuItem value={TR_RU}>RU</MenuItem>
      </Select>
    </FormControl>
  </Box>
  
  );
}
