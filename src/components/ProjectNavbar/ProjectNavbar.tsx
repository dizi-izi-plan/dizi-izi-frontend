import ArrowBackOutlinedIcon from '@mui/icons-material/ArrowBackOutlined';
import { Box, Button, Stack, Typography } from '@mui/material';
import React from 'react';
import ProjectButton from '../Buttons/ProjectButton/ProjectButton';
import { PopperMessage } from '../Popper/PopperMessage';
import { ProjectNavbarProps } from './ProjectNavbarDataTypes';

const ProjectNavbar: React.FC<ProjectNavbarProps> = ({ title }) => {
  return (
    <Stack
      flexDirection={'row'}
      justifyContent={'space-around'}
      margin={'4vh'}
      gap={'10%'}
    >
      <Box>
        <PopperMessage tip="Назад">
          <Button variant="empty">
            <ArrowBackOutlinedIcon />
          </Button>
        </PopperMessage>
      </Box>
      <Box>
        <Typography variant="h3">{title}</Typography>
      </Box>
      <Box display={'flex'} flexDirection={'row'} gap={'10px'}>
        <ProjectButton
          action="Попровать еще"
          img="assets/icons/refresh.svg"
          alt="Refresh Icon"
        />
        <ProjectButton
          action="Новый проект"
          img="assets/icons/add.svg"
          alt="New Project Icon"
        />
        <ProjectButton
          action="Удалить проект"
          img="assets/icons/delete.svg"
          alt="Delete Project Icon"
        />
        <ProjectButton
          action=""
          img="assets/icons/threeDots.svg"
          alt="More actions Icon"
        />
      </Box>
    </Stack>
  );
};

export default ProjectNavbar;
