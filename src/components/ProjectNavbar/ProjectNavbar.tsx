'use client';
import ArrowBackOutlinedIcon from '@mui/icons-material/ArrowBackOutlined';
import { Box, Button, Typography } from '@mui/material';
import ModalIcon from '@public/assets/icons/modal_icon.svg';
import React from 'react';
import { ModalTwoButtons } from '../Modal/ModalTwoButtons';
import { PopperMessage } from '../Popper/PopperMessage';
import ProjectButtonsList from '../ProjectButtonsList/ProjectButtonsList';
import { modalConfigs } from './projectNavbar.data';
import { ProjectNavbarProps } from './ProjectNavbarDataTypes';

const ProjectNavbar: React.FC<ProjectNavbarProps> = ({ title }) => {
  return (
    <>
      <Box display="flex" flexDirection="row" justifyContent="space-between">
        <Box>
          <PopperMessage tip="Назад">
            <Button variant="empty" onClick={() => console.log('Назад')}>
              <ArrowBackOutlinedIcon />
            </Button>
          </PopperMessage>
        </Box>
        <Box>
          <Typography variant="h3">{title}</Typography>
        </Box>
        <ProjectButtonsList />
      </Box>
      {modalConfigs.map((config) => (
        <ModalTwoButtons
          key={config.modalName}
          modalName={config.modalName}
          text={config.text}
          icon={<ModalIcon width="75" height="126" />}
          handleYes={config.handleYes}
          handleNo={config.handleNo}
          nameButtonYes="Да"
          nameButtonNo="Нет"
        />
      ))}
    </>
  );
};

export default ProjectNavbar;
