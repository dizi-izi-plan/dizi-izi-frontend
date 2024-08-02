import { Link as MUILink } from '@mui/material';
import { LinkProps } from '@mui/material/Link';
import Link from 'next/link';

export const CustomLink = ({ ...props }: LinkProps) => (
  <MUILink component={Link} {...props} />
);
