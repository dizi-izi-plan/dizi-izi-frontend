type a11yPropsTypes = {
  id: string;
  ['aria-controls']: string;
};

export type a11yPropsFuncType = (index: number) => a11yPropsTypes;
