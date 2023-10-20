import { a11yPropsFuncType } from './tabTypes';

export const a11yProps: a11yPropsFuncType = (index: number) => {
  return {
    id: `simple-tab-${index}`,
    'aria-controls': `simple-tabpanel-${index}`,
  };
};
