import { makeVar } from '@apollo/client';

export type TStep = { label: string; description: string };
export type TStage = {
  id: number;
  label: string;
  value: string;
  disabled: boolean;
  activeStep: number;
  saved: boolean;
  steps: Array<TStep>;
};

export const initStages: Array<TStage> = [
  {
    id: 1,
    label: 'Stage 1',
    value: 'value-1',
    disabled: false,
    activeStep: 0,
    saved: false,
    steps: [
      { label: 'Step 1', description: 'Step 1 description' },
      { label: 'Step 2', description: 'Step 2 description' },
      { label: 'Step 3', description: 'Step 3 description' },
    ],
  },
  {
    id: 2,
    label: 'Stage 2',
    value: 'value-2',
    disabled: false,
    activeStep: 0,
    saved: false,
    steps: [
      { label: 'Step 1', description: 'Step 1 description' },
      { label: 'Step 2', description: 'Step 2 description' },
      { label: 'Step 3', description: 'Step 3 description' },
    ],
  },
  {
    id: 3,
    label: 'Stage 3',
    value: 'value-3',
    disabled: false,
    activeStep: 0,
    saved: false,
    steps: [
      { label: 'Step 1', description: 'Step 1 description' },
      { label: 'Step 2', description: 'Step 2 description' },
      { label: 'Step 3', description: 'Step 3 description' },
    ],
  },
  {
    id: 4,
    label: 'Stage 4',
    value: 'value-4',
    disabled: false,
    activeStep: 0,
    saved: false,
    steps: [
      { label: 'Step 1', description: 'Step 1 description' },
      { label: 'Step 2', description: 'Step 2 description' },
      { label: 'Step 3', description: 'Step 3 description' },
    ],
  },
  {
    id: 5,
    label: 'Stage 5',
    value: 'value-5',
    disabled: false,
    activeStep: 0,
    saved: false,
    steps: [
      { label: 'Step 1', description: 'Step 1 description' },
      { label: 'Step 2', description: 'Step 2 description' },
      { label: 'Step 3', description: 'Step 3 description' },
    ],
  },
];
export const setStages = makeVar<Array<TStage>>(initStages);
