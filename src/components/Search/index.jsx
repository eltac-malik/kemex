import Box from '@mui/material/Box';
import TextField from '@mui/material/TextField';
import {useTranslation} from 'react-i18next'

export const Search = (
    {
    onChange,
    placeholder='searchBar'
    }
    )=> {
      const {t} = useTranslation();

  return (
    <div className='w-full'>
      <TextField 
      placeholder={t(placeholder)}
      className='w-full'
      onChange={onChange}
    />
    </div>
  );
}