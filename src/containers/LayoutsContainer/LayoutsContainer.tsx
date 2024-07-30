'use client';
import { useRouter } from 'next/navigation';
import { useAppDispatch } from '@/redux/hooks';
import AddBoxOutlinedIcon from '@mui/icons-material/AddBoxOutlined';
import Button from '@mui/material/Button';
import Stack from '@mui/material/Stack';
import { setCurrentModal } from '@/redux/slices/modal-slice';
import { ModalOneButton } from '@/components/Modal/ModalOneButton';
import ModalIcon from '../../../public/assets/icons/modal_icon.svg';
import { ProjectsContainer } from '../ProjectContainer/ProjectContainer';
import { DraftContainer } from '../DraftContainer/DraftContainer';
import { ModalTwoButtons } from '@/components/Modal/ModalTwoButtons';
import { MODAL_YES_NO_QUESTIONS } from '@/components/Modal/modal.data';
import DraftIcon from '../../../public/assets/icons/draftIcon.svg';
import Maket from '../../../public/assets/icons/maket.svg'

import { routes } from '@/helpers/common-constants/routes-constants';
import { modalNames } from '@/helpers/common-constants/modal-constants';
import { useState } from 'react';

const MODAL_TEXT = [
  'Генеририуемые планировки носят исключительно рекомендательный характер.',
  'Dizi_izi  напоминает, что ремонтные работы, лучше выполнять с профильными специалистами. ',
];

export const LayoutsContainer = () => {
  const dispatch = useAppDispatch();
  const router = useRouter();


  const [selectedProjectId, setSelectedProjectId] = useState<number | null>(null);

  const handleDeleteYes = () => {
    console.log('handleDeleteYes');
  }

  const handleDuplicateYes = () => {
    console.log('handleDuplicateYes');

  }

  const handleСontinueYes = () => {
    console.log('handleСontinueYes');
  }

  const modalActions = {
    handleYes: () => {
      if (selectedProjectId != null) {
        switch (modalState.modalType) {
          case 'isOpenDelete':
            handleDeleteYes()
            console.log(`handleDeleteYes for project ${selectedProjectId}`);
            break;
          case 'isOpenDuplicate':
            handleDuplicateYes()
            console.log(`handleDuplicateYes for project ${selectedProjectId}`);
            break;
          case 'isOpenContinue':
            handleСontinueYes()
            console.log(`handleContinueYes for project ${selectedProjectId}`);
            break;
          default:
            break;
        }
      }
      handleCloseModal();
    },
    handleNo: () => {
      console.log('handleNo');
      handleCloseModal();
    },
  };


  type ModalStateType = 'isOpenDelete' | 'isOpenDuplicate' | 'isOpenContinue';

  const [modalState, setModalState] = useState<{
    isOpen: boolean;
    modalType: ModalStateType | null;
  }>({
    isOpen: false,
    modalType: null,
  });
  const handleOpenModal = (modalType: ModalStateType, projectId: number) => {
    setSelectedProjectId(projectId);
    setModalState({ isOpen: true, modalType });

  };

  const handleCloseModal = () => {
    setSelectedProjectId(null);
    setModalState({ isOpen: false, modalType: null });
  };

  const projects = [
    { id: 1, name: 'Проект 1', date: '25.11.2024, 22:21' },
    { id: 2, name: 'Проект 2', date: '12.04.2023, 20:13' },
  ];

  const draft = {
    id: 3,
    date: '25.11.2024, 22:21'
  };

  const getModalText = (): string[] => {
    switch (modalState.modalType) {
      case 'isOpenDelete':
        return MODAL_YES_NO_QUESTIONS[2];
      case 'isOpenDuplicate':
        return MODAL_YES_NO_QUESTIONS[0];
      case 'isOpenContinue':
        return MODAL_YES_NO_QUESTIONS[1];
      default:
        return [''];
    }
  };


  const [selectedProjectId, setSelectedProjectId] = useState<number | null>(null);

  const handleDeleteYes = () => {
    console.log('handleDeleteYes');
  }

  const handleDuplicateYes = () => {
    console.log('handleDuplicateYes');

  }

  const handleСontinueYes = () => {
    console.log('handleСontinueYes');
  }

  const modalActions = {
    handleYes: () => {
      if (selectedProjectId != null) {
        switch (modalState.modalType) {
          case 'isOpenDelete':
            handleDeleteYes()
            console.log(`handleDeleteYes for project ${selectedProjectId}`);
            break;
          case 'isOpenDuplicate':
            handleDuplicateYes()
            console.log(`handleDuplicateYes for project ${selectedProjectId}`);
            break;
          case 'isOpenContinue':
            handleСontinueYes()
            console.log(`handleContinueYes for project ${selectedProjectId}`);
            break;
          default:
            break;
        }
      }
      handleCloseModal();
    },
    handleNo: () => {
      console.log('handleNo');
      handleCloseModal();
    },
  };


  type ModalStateType = 'isOpenDelete' | 'isOpenDuplicate' | 'isOpenContinue';

  const [modalState, setModalState] = useState<{
    isOpen: boolean;
    modalType: ModalStateType | null;
  }>({
    isOpen: false,
    modalType: null,
  });
  const handleOpenModal = (modalType: ModalStateType, projectId: number) => {
    setSelectedProjectId(projectId);
    setModalState({ isOpen: true, modalType });

  };

  const handleCloseModal = () => {
    setSelectedProjectId(null);
    setModalState({ isOpen: false, modalType: null });
  };

  const projects = [
    { id: 1, name: 'Проект 1', date: '25.11.2024, 22:21' },
    { id: 2, name: 'Проект 2', date: '12.04.2023, 20:13' },
  ];

  const draft = {
    id: 3,
    date: '25.11.2024, 22:21'
  };

  const getModalText = (): string[] => {
    switch (modalState.modalType) {
      case 'isOpenDelete':
        return MODAL_YES_NO_QUESTIONS[2];
      case 'isOpenDuplicate':
        return MODAL_YES_NO_QUESTIONS[0];
      case 'isOpenContinue':
        return MODAL_YES_NO_QUESTIONS[1];
      default:
        return [''];
    }
  };

  return (
    <>
      <Stack
        direction="row"
        columnGap="32px"
        rowGap="32px"
        flexWrap="wrap"
      >
        <Button
          variant="box"
          size="large"
          startIcon={<AddBoxOutlinedIcon />}
          onClick={() =>
            dispatch(setCurrentModal(modalNames.modalStartNewProject))
          }
        >
          Создать проект
        </Button>
        {projects.map((project) => (
          <ProjectsContainer
            image={<Maket />}
            key={project.id}
            id={project.id}
            name={project.name}
            date={project.date}
            handleDuplicate={(id) => handleOpenModal('isOpenDuplicate', id)}
            handleDelete={(id) => handleOpenModal('isOpenDelete', id)}
          />
        ))}

        {draft && draft.id &&
          <DraftContainer
            id={draft.id}
            date={draft.date}
            handleContinue={(id) => handleOpenModal('isOpenContinue', id)}
            handleDelete={(id) => handleOpenModal('isOpenDelete', id)}
          />}

      </Stack>

      <ModalOneButton
        modalName={modalNames.modalStartNewProject}
        text={MODAL_TEXT}
        handleConfirm={() => router.push(routes.projectRoutes.roomSelection)}
        icon={<ModalIcon width="75" height="126" />}
        nameButton={'Начать'}
      />

      <ModalTwoButtons
        handleYes={modalActions.handleYes}
        handleNo={modalActions.handleNo}
        text={getModalText()}
        isModalOpen={modalState.isOpen}
        handleClose={handleCloseModal}
        icon={<ModalIcon width="75" height="126" />}
        nameButtonYes={'Да'}
        nameButtonNo={'Нет'}
      />

    </>
  );
};
