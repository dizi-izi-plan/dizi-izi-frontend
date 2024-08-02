import Button from '@mui/material/Button';
import AddBoxOutlinedIcon from '@mui/icons-material/AddBoxOutlined';
import { CustomLink } from '@/components/Link/CustomLink';

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
    <CustomLink
      href={href}
      style={{ pointerEvents: isDisabled ? 'none' : 'auto' }}
    >
      <Button
        variant="box"
        size="large"
        startIcon={<AddBoxOutlinedIcon />}
        disabled={isDisabled}
      >
        {title}
      </Button>
    </CustomLink>
  );
};
