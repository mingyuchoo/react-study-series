import { useMutation, useQuery } from '@apollo/client';
import CheckBoxIcon from '@mui/icons-material/CheckBox';
import CheckBoxOutlineBlankIcon from '@mui/icons-material/CheckBoxOutlineBlank';
import { Autocomplete, Checkbox, Stack, TextField } from '@mui/material';
import React, { useState } from 'react';

import { INSERT_BABY_ONE, SELECT_BABIES } from './gql';

const icon = <CheckBoxOutlineBlankIcon fontSize="small" />;
const checkedIcon = <CheckBoxIcon fontSize="small" />;

export default function Baby(): React.ReactElement {
  const { loading, error, data } = useQuery<Query_Root>(SELECT_BABIES);
  const [insertBabyOne] = useMutation<Mutation_Root>(INSERT_BABY_ONE, {
    refetchQueries: [SELECT_BABIES, 'SelectBabies'],
  });
  const [selectedCount, setSelectedCount] = useState<number>(0);
  const [name, setName] = useState<string>('');

  function handleName(event: React.ChangeEvent<HTMLInputElement>) {
    setName(event.target.value);
  }

  if (loading) return <div>Loading...</div>;
  if (error) return <div>Error!</div>;
  if (!data) return <div>No Data</div>;
  return (
    <Stack spacing={3} sx={{ width: 500 }}>
      <div>{selectedCount} babies selected</div>
      <Autocomplete
        id="tags-standard"
        size="small"
        multiple
        disableCloseOnSelect
        options={data.baby}
        getOptionLabel={(option) => option.name}
        renderInput={(params) => (
          <TextField
            {...params}
            variant="standard"
            label="Babies"
            placeholder="Name"
            value={name}
            onChange={handleName}
          />
        )}
        renderOption={(props, option, { selected }) => (
          <li {...props}>
            <Checkbox icon={icon} checkedIcon={checkedIcon} style={{ marginRight: 2 }} checked={selected} />
            {option.name}
          </li>
        )}
        onChange={(event, value) => {
          console.log(value);
          setSelectedCount(value.length);
        }}
        onKeyPress={(event) => {
          if (event.key === 'Enter') {
            void insertBabyOne({ variables: { name: name } });
          }
        }}
      />
    </Stack>
  );
}
