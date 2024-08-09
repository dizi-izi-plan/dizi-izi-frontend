'use client';
import ArrowBackOutlinedIcon from '@mui/icons-material/ArrowBackOutlined';
import { Box, Button, Stack, Typography } from '@mui/material';
import ModalIcon from '@public/assets/icons/modal_icon.svg';
import React, { useState } from 'react';
import ActionButton from '../ActionButton/ActionButton';
import ProjectButton from '../Buttons/ProjectButton/ProjectButton';
import { ModalTwoButtons } from '../Modal/ModalTwoButtons';
import { PopperMessage } from '../Popper/PopperMessage';
import { modalData } from './projectNavbar.data';
import { ProjectNavbarProps } from './ProjectNavbarDataTypes';

const ProjectNavbar: React.FC<ProjectNavbarProps> = ({ title }) => {
  const [modalConfig, setModalConfig] = useState<{ [key: string]: boolean }>({
    tryAgain: false,
    newProject: false,
    deleteProject: false,
    moreActions: false,
  });
  const [actionVisible, setActionVisible] = useState<boolean>(false);

  const openModal = (modalName: string) => {
    setModalConfig({ ...modalConfig, [modalName]: true });
  };

  const closeModal = (modalName: string) => {
    setModalConfig({ ...modalConfig, [modalName]: false });
  };

  const toggleActionBlock = () => {
    setActionVisible(!actionVisible);
  };

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
            <Button variant="empty">
              <ArrowBackOutlinedIcon />
            </Button>
          </PopperMessage>
        </Box>
        <Box>
          <Typography variant="h3">{title}</Typography>
        </Box>
        <Box display="flex" flexDirection="row" gap="10px">
          <ProjectButton
            action="Попровать еще"
            img="assets/icons/refresh.svg"
            alt="Refresh Icon"
            fn={() => openModal('tryAgain')}
          />
          <ProjectButton
            action="Новый проект"
            img="assets/icons/add.svg"
            alt="New Project Icon"
            fn={() => openModal('newProject')}
          />
          <ProjectButton
            action="Удалить проект"
            img="assets/icons/delete.svg"
            alt="Delete Project Icon"
            fn={() => openModal('deleteProject')}
          />
          <Box
            display="flex"
            flexDirection="column"
            justifyContent="center"
            alignItems="center"
          >
            <ProjectButton
              action=""
              img="assets/icons/threeDots.svg"
              alt="More actions Icon"
              fn={() => toggleActionBlock()}
            />
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
                <ActionButton
                  img={'../../../assets/icons/downloadPdfIcon.svg'}
                  title={'Скачать в pdf'}
                  fn={() => {
                    console.log('Сработало');
                  }}
                />
                <ActionButton
                  img={'../../../assets/icons/sendMailIcon.svg'}
                  title={'Отправить на почту'}
                  fn={() => {
                    console.log('Сработало');
                  }}
                />
                <ActionButton
                  img={'../../../assets/icons/saveProjectIcon.svg'}
                  title={'Сохранить'}
                  fn={() => {
                    console.log('Сработало');
                  }}
                />
              </Box>
            )}
          </Box>
        </Box>
      </Stack>
      {Object.keys(modalData).map((key) => (
        <ModalTwoButtons
          key={key}
          isModalOpen={modalConfig[key]}
          text={modalData[key].text}
          icon={<ModalIcon width="75" height="126" />}
          handleClose={() => closeModal(key)}
          handleYes={modalData[key].handleYes}
          handleNo={() => console.log(`${key}: No`)}
          nameButtonYes="Да"
          nameButtonNo="Нет"
        />
      ))}
    </>
  );
};

export default ProjectNavbar;
