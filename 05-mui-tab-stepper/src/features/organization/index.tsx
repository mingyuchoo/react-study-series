import { useMutation, useQuery } from '@apollo/client';
import Autocomplete, { createFilterOptions } from '@mui/material/Autocomplete';
import TextField from '@mui/material/TextField';
import React from 'react';

import { INSERT_ORGANIZATION_ONE, SELECT_ORGANIZATIONS } from './gql';

type OrganizationOptionType = Organization & { inputValue?: string };
const filter = createFilterOptions<OrganizationOptionType>();
const initValue: OrganizationOptionType = { inputValue: '', id: 0, name: '', activated: false };

export default function FreeSoloCreateOption() {
  const { loading, error, data } = useQuery<Query_Root>(SELECT_ORGANIZATIONS);
  const [insertOrganizationOne] = useMutation<Mutation_Root>(INSERT_ORGANIZATION_ONE, {
    refetchQueries: [SELECT_ORGANIZATIONS, 'SelectOrganizations'],
  });
  const [value, setValue] = React.useState<OrganizationOptionType>(initValue);

  if (loading) return <div>Loading</div>;
  if (error) return <div>Error!</div>;
  if (!data) return <div>No Data</div>;

  return (
    <div>
      <p>
        Organization: {value.id} - {value.name}
      </p>
      <Autocomplete
        id="organization-select-or-insert"
        sx={{ width: 300 }}
        freeSolo
        selectOnFocus
        clearOnBlur
        handleHomeEndKeys
        value={value}
        options={data.organization as OrganizationOptionType[]}
        renderOption={(props, option) => <li {...props}>{option.name}</li>}
        getOptionLabel={(option) => {
          if (typeof option === 'string') return option;
          if (option.inputValue) return option.inputValue;
          return option.name;
        }}
        filterOptions={(options, params) => {
          const filtered = filter(options, params);
          const { inputValue } = params;
          const isExisting = options.some((option) => inputValue === option.name);
          if (inputValue !== '' && !isExisting) {
            filtered.push({ ...value, inputValue, name: `Add "${inputValue}"` });
          }
          return filtered;
        }}
        renderInput={(params) => <TextField {...params} label="Organization" />}
        onChange={(event, newValue) => {
          if (typeof newValue === 'string') {
            // WHEN A NAME IS TYPED IN CORRECTLY
            const selected = data.organization.filter((element) => element.name === newValue).at(0);
            setValue({
              inputValue: '',
              id: selected?.id || 0,
              name: selected?.name || '',
              activated: selected?.activated || false,
            });
          } else if (newValue && newValue.inputValue) {
            // CREATE NEW ORGANIZATION
            void insertOrganizationOne({ variables: { name: newValue.inputValue } }).then((result) => {
              const created = result.data?.insert_organization_one;
              setValue({
                inputValue: '',
                id: created?.id || 0,
                name: created?.name || '',
                activated: created?.activated || false,
              });
            });
          } else if (!!newValue) {
            // PICK A NAME (FULL INFORMATION)
            setValue(newValue);
          } else {
            // DELETE WHOLE STRING (NULL)
            setValue(initValue);
          }
        }}
      />
    </div>
  );
}
