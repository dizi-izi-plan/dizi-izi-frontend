import { ReactNode } from 'react';

// type a11yPropsTypes = {
//   id: string;
//   ['aria-controls']: string;
// };

// export type a11yPropsFuncType = (index: number) => a11yPropsTypes;

export type AccountMenuItemsType = {
  name: string;
  component: ReactNode | null;
};
