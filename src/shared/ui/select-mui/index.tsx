import React from 'react';
import Select, { SelectProps } from '@mui/material/Select';
import InputLabel from '@mui/material/InputLabel';
import FormControl from '@mui/material/FormControl';
import { v1 } from 'uuid';

import './style.scss';

type Props = SelectProps;

const SelectMUI: React.FC<Props> = (props) => {
  const id = v1();
  const style = {
    sx: {
      '.Mui-selected': {
        backgroundColor: 'var(--color_accent)!important',
        opacity: 0.85,
        color: '#ffffff',
      },
    },
  };

  const { label } = props;

  return (
    <FormControl className="SelectWrapper" size="small">
      <InputLabel id={id}>{label}</InputLabel>
      <Select MenuProps={style} labelId={id} id={id} {...props} />
      {/* <Select
        labelId="demo-select-small"
        id={id}
        value={age}
        label="Age"
        onChange={handleChange}
      >
        <MenuItem value="">
          <em>None</em>
        </MenuItem>
        <MenuItem value={10}>Ten</MenuItem>
        <MenuItem value={20}>Twenty</MenuItem>
        <MenuItem value={30}>Thirty</MenuItem>
      </Select> */}
    </FormControl>

    // <FormControl size="small">
    //   <InputLabel id={id}>{label}</InputLabel>
    //   <Select MenuProps={style} labelId={id} {...restprops} />
    // </FormControl>
  );
};

export default React.memo(SelectMUI) as typeof SelectMUI;
