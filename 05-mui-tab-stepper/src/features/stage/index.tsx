import { useReactiveVar } from '@apollo/client';
import { TabContext, TabList, TabPanel } from '@mui/lab';
import { Box, Tab } from '@mui/material';
import React from 'react';

import Progress from '@/features/stage/step';
import { setStages } from '@/features/stage/vars';

export default function Stage(): React.ReactElement {
  const stages = useReactiveVar(setStages);
  const [currentValue, setCurrentValue] = React.useState(stages[0].value);

  const handleChange = (event: React.SyntheticEvent, newValue: string) => {
    setCurrentValue(newValue);
  };

  return (
    <Box sx={{ width: '100%', typography: 'body1' }}>
      <TabContext value={currentValue}>
        <Box sx={{ borderBottom: 1, borderColor: 'divider' }}>
          <TabList onChange={handleChange}>
            {stages.map((item) => (
              <Tab key={item.id} label={item.label} value={item.value} disabled={item.disabled} />
            ))}
          </TabList>
        </Box>
        {stages.map((item) => (
          <TabPanel key={item.id} value={item.value}>
            <Progress {...item} />
          </TabPanel>
        ))}
      </TabContext>
    </Box>
  );
}
