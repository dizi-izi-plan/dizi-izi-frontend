import Link from 'next/link';
import Button from '@mui/material/Button';
import AddBoxOutlinedIcon from '@mui/icons-material/AddBoxOutlined';

interface LargeBoxButtonLinkProps {
  href: string;
  title: string;
  isDisabled: boolean;
}

export const LargeBoxButtonLink = ({
  href,
  title,
  isDisabled,
}: LargeBoxButtonLinkProps) => {
  return (
    <Link href={href} style={{ pointerEvents: isDisabled ? 'none' : 'auto' }}>
      <Button
        variant="box"
        size="large"
        startIcon={<AddBoxOutlinedIcon />}
        disabled={isDisabled}
      >
        {title}
      </Button>
    </Link>
  );
};
