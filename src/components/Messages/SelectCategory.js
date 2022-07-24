import {
  Box,
  FormControl,
  MenuItem,
  OutlinedInput,
  Select,
} from '@mui/material';
import { useTheme } from '@mui/material/styles';
import React from 'react';

import { CATEGORY_NAMES } from './data';

function getStyles(name, categoryId, theme) {
  return {
    fontWeight:
      categoryId !== name
        ? theme.typography.fontWeightRegular
        : theme.typography.fontWeightMedium,
  };
}

const SelectCategory = ({ value, onChange }) => {
  const theme = useTheme();

  return (
    <Box component='div'>
      <FormControl
        className='form-control1'
        sx={{
          width: {
            xs: '100%',
          },
        }}
        size='small'
        fullWidth
      >
        <Select
          input={<OutlinedInput />}
          placeholder='Select'
          fullWidth
          className='select-control1'
          onChange={onChange}
          value={value || CATEGORY_NAMES[0].id}
        >
          {CATEGORY_NAMES.map(({ name, id }) => (
            <MenuItem key={id} value={id} style={getStyles(id, value, theme)}>
              {name}
            </MenuItem>
          ))}
        </Select>
      </FormControl>
    </Box>
  );
};

export default SelectCategory;
