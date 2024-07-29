'use client';
import { useAppDispatch } from '@/redux/hooks';
import ArrowBackOutlinedIcon from '@mui/icons-material/ArrowBackOutlined';
import { Box, Button, Stack, Typography } from '@mui/material';
import ModalIcon from '@public/assets/icons/modal_icon.svg';
import React, { useState } from 'react';
import ActionButton from '../ActionButton/ActionButton';
import ProjectButton from '../Buttons/ProjectButton/ProjectButton';
import { ModalTwoButtons } from '../Modal/ModalTwoButtons';
import { PopperMessage } from '../Popper/PopperMessage';
import {
  actionConfigs,
  getProjectButtons,
  modalConfigs,
} from './projectNavbar.data';
import { ProjectNavbarProps } from './ProjectNavbarDataTypes';
import { ModalTwoButtons } from '../Modal/ModalTwoButtons';
import ModalIcon from '@public/assets/icons/modal_icon.svg';
import { modalData } from './projectNavbar.data';

const ProjectNavbar: React.FC<ProjectNavbarProps> = ({ title }) => {
  const dispatch = useAppDispatch();

  const [actionVisible, setActionVisible] = useState<boolean>(false);

  const toggleActionBlock = () => {
    setActionVisible((prev) => !prev);
  };

  const projectButtons = getProjectButtons(dispatch, toggleActionBlock);

  return (
    <>
      <Stack
        flexDirection="row"
        justifyContent="space-around"
        margin="4vh"
        gap="10%"
      >
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
        <Box display="flex" flexDirection="row" gap="10px">
          {projectButtons.map((button) => (
            <ProjectButton
              key={button.action}
              action={button.action}
              img={button.img}
              alt={button.alt}
              fn={button.fn}
            />
          ))}
          {actionVisible && (
            <Box
              display="flex"
              flexDirection="column"
              position="absolute"
              top="9.5rem"
              right="2.5rem"
              bgcolor="#DEDEDE"
              padding="5px"
              gap="10px"
            >
              {actionConfigs.map((config) => (
                <ActionButton
                  key={config.title}
                  img={config.img}
                  title={config.title}
                  fn={config.fn}
                />
              ))}
            </Box>
          )}
        </Box>
      </Stack>
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
