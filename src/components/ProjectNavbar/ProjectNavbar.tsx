'use client';
import ArrowBackOutlinedIcon from '@mui/icons-material/ArrowBackOutlined';
import { Box, Button, Typography } from '@mui/material';
import ModalIcon from '@public/assets/icons/modal_icon.svg';
import React, { FC } from 'react';
import { ModalTwoButtons } from '../Modal/ModalTwoButtons';
import { PopperMessage } from '../Popper/PopperMessage';
import ProjectButtonsList from '../Lists/ProjectButtonsList/ProjectButtonsList';
import { modalConfigs } from './projectNavbar.data';

export interface ProjectNavbarProps {
  title: string;
}

const ProjectNavbar: FC<ProjectNavbarProps> = ({ title }) => {
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
      {modalConfigs.map(({ modalName, text, handleYes, handleNo }) => (
        <ModalTwoButtons
          key={modalName}
          modalName={modalName}
          text={text}
          icon={<ModalIcon width="75" height="126" />}
          handleYes={handleYes}
          handleNo={handleNo}
          nameButtonYes="Да"
          nameButtonNo="Нет"
        />
      ))}
    </>
  );
};

export default ProjectNavbar;
