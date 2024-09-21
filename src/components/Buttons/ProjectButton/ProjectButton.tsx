import { PopperMessage } from '@/components/Popper/PopperMessage';
import { Button } from '@mui/material';
import Image from 'next/image';

export interface ProjectButtonProps {
  action: string;
  img: string;
  alt: string;
  callback?: () => void;
}

const ProjectButton = ({ action, img, alt, callback }: ProjectButtonProps) => {
  return (
    <Button
      variant="empty"
      onClick={callback}
      sx={{
        minWidth: '24px',
        padding: '0.2rem',
      }}
    >
      <PopperMessage tip={action}>
        <Image
          src={img}
          alt={alt}
          width={24}
          height={24}
          style={{
            display: 'flex',
            justifyContent: 'center',
            alignItems: 'center',
          }}
        />
      </PopperMessage>
    </Button>
  );
};

export default ProjectButton;
