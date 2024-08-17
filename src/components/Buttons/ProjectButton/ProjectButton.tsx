import { PopperMessage } from '@/components/Popper/PopperMessage';
import { Button } from '@mui/material';
import Image from 'next/image';
import React from 'react';
import { ProjectButtonProps } from './ProjectButtonDataTypes';

const ProjectButton: React.FC<ProjectButtonProps> = ({
  action,
  img,
  alt,
  fn,
}) => {
  return (
    <Button
      variant="empty"
      onClick={fn}
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
