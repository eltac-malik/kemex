import Box from '@mui/material/Box';
import TextField from '@mui/material/TextField';

export const Search = (
    {
    onChange,
    placeholder='Axtar'
    }
    )=> {
  return (
    <div className='w-full'>
      <TextField 
      placeholder={placeholder}
      className='w-full'
      onChange={onChange}
    />
    </div>
  );
}