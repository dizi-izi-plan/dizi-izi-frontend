import { Box, Typography } from '@mui/material';
import Image from 'next/image';
import React, { FC } from 'react';

export interface ProjectPlanProps {
  title: string;
  img: string;
  alt: string;
}

const ProjectPlan: FC<ProjectPlanProps> = ({ title, img, alt }) => {
  return (
    <Box display="flex" flexDirection="column" gap="2rem" marginTop="2.5rem">
      <Box>
        <Typography variant="h5" sx={{ fontSize: '1.5rem' }}>
          {title}
        </Typography>
      </Box>
      <Box display="flex" justifyContent="center" alignItems="center">
        <Image src={img} alt={alt} width={500} height={400} />
      </Box>
    </Box>
  );
};

export default ProjectPlan;
