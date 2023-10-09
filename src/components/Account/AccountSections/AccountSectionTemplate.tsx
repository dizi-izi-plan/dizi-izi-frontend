import Typography from '@mui/material/Typography';

interface AccountSectionProps {
  name: string;
}

export const AccountSectionTemplate = ({ name }: AccountSectionProps) => {
  return <Typography>{name}</Typography>;
};
