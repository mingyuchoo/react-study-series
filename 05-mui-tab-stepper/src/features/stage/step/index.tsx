import { useReactiveVar } from '@apollo/client';
import { Box, Button, Paper, Step, StepContent, StepLabel, Stepper, Typography } from '@mui/material';
import React from 'react';

import { setStages, TStage } from '@/features/stage/vars';

type Props = TStage;
export default function Progress(props: Props): React.ReactElement {
  const stages = useReactiveVar(setStages);

  const handleNext = () => {
    setStages(stages.map((item) => (item.id === props.id ? { ...item, activeStep: item.activeStep + 1 } : item)));
  };
  const handleBack = () => {
    setStages(stages.map((item) => (item.id === props.id ? { ...item, activeStep: item.activeStep - 1 } : item)));
  };
  const handleSave = () => {
    setStages(stages.map((item) => (item.id === props.id ? { ...item, disabled: true, saved: true } : item)));
  };

  return (
    <Box>
      <Stepper activeStep={props.activeStep} orientation="vertical">
        {props.steps.map((step, index) => (
          <Step key={step.label}>
            <StepLabel
              optional={index === props.steps.length - 1 ? <Typography variant="caption">Last step</Typography> : null}
            >
              {props.label}-{step.label}
            </StepLabel>
            <StepContent>
              <Typography>
                {props.label}-{step.description}
              </Typography>
              <Box sx={{ mb: 2 }}>
                <div>
                  <Button onClick={handleNext} sx={{ mt: 1, mr: 1 }}>
                    {index === props.steps.length - 1 ? 'Finish' : 'Continue'}
                  </Button>
                  <Button disabled={index === 0} onClick={handleBack} sx={{ mt: 1, mr: 1 }}>
                    Back
                  </Button>
                </div>
              </Box>
            </StepContent>
          </Step>
        ))}
      </Stepper>
      {props.activeStep === props.steps.length && (
        <Paper square elevation={0} sx={{ p: 3 }}>
          <Typography>All steps completed - you&apos;re finished</Typography>
          <Button onClick={handleSave} sx={{ mt: 1, mr: 1 }} disabled={props.saved}>
            {props.saved ? 'Completed' : 'Save'}
          </Button>
        </Paper>
      )}
    </Box>
  );
}
