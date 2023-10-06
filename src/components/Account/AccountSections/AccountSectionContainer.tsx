import Box from '@mui/material/Box';

interface AccountSectionContainerProps {
  children?: React.ReactNode;
  index: number;
  value: number;
}

export const AccountSectionContainer = ({
  children,
  value,
  index,
}: AccountSectionContainerProps) => {
  return <Box hidden={value !== index}>{children}</Box>;
};
