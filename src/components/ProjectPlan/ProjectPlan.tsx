import { Box, Stack, Typography } from '@mui/material';
import Image from 'next/image';
import React from 'react';
import { ProjectPlanProps } from './ProjectPlanDataTypes';

const ProjectPlan: React.FC<ProjectPlanProps> = ({ title, img, alt }) => {
  return (
    <Stack gap={4} marginTop={3}>
      <Box marginLeft={23}>
        <Typography variant="h5">{title}</Typography>
      </Box>
      <Box display={'flex'} justifyContent={'center'} alignItems={'center'}>
        <Image src={img} alt={alt} width={500} height={400} />
      </Box>
    </Stack>
  );
};

export default ProjectPlan;
