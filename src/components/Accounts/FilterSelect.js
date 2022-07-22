import {
  FormControl,
  MenuItem,
  OutlinedInput,
  Select,
  Stack,
  Typography,
} from '@mui/material';
import { useTheme } from '@mui/material/styles';
import React from 'react';
const names = [
  'Oliver Hansen',
  'Van Henry',
  'April Tucker',
  'Ralph Hubbard',
  'Omar Alexander',
  'Carlos Abbott',
  'Miriam Wagner',
  'Bradley Wilkerson',
  'Virginia Andrews',
  'Kelly Snyder',
];

function getStyles(name, personName, theme) {
  return {
    fontWeight:
      personName.indexOf(name) === -1
        ? theme.typography.fontWeightRegular
        : theme.typography.fontWeightMedium,
  };
}

const FilterSelect = () => {
  const [personName, setPersonName] = React.useState([]);
  const theme = useTheme();
  const handleChange = (event) => {
    const { value } = event.target;
    setPersonName(typeof value === 'string' ? value.split(',') : value);
  };
  return (
    <Stack direction='row' spacing={1} alignItems='center'>
      <Typography variant='body1' component='p'>
        FilterList
      </Typography>
      <FormControl
        className='form-control1'
        sx={{
          width: {
            xs: '100%',
            sm: 300,
          },
        }}
        size='small'
        fullWidth
      >
        <Select
          value={personName}
          onChange={handleChange}
          input={<OutlinedInput />}
          placeholder='Select'
          fullWidth
          className='select-control1'
        >
          {names.map((name) => (
            <MenuItem
              key={name}
              value={name}
              style={getStyles(name, personName, theme)}
            >
              {name}
            </MenuItem>
          ))}
        </Select>
      </FormControl>
    </Stack>
  );
};

export default FilterSelect;
