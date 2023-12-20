import * as React from 'react';
import TextField from '@mui/material/TextField';
import Autocomplete from '@mui/material/Autocomplete';

interface AutocompleteProps {
    title: string;
    options: string[];
    onChange: any;
}

function AutoComplete(props: AutocompleteProps) {
const { options, title, onChange } = props;

  return (
    <Autocomplete
      disablePortal
      id="combo-box-demo"
      options={options}
      sx={{ width: 600, marginTop: 2 }}
      onChange={onChange}
      renderInput={(params) => <TextField {...params} label={title} />}
    />
  );
}

export default AutoComplete