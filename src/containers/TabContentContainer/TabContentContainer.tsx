import Box from '@mui/material/Box';

interface TabContentContainerProps {
  children?: React.ReactNode;
  index: number;
  value: number;
}

export const TabContentContainer = ({
  children,
  value,
  index,
}: TabContentContainerProps) => {
  return <Box hidden={value !== index}>{children}</Box>;
};
