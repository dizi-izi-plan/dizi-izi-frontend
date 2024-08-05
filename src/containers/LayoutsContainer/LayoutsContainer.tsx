import { ReactNode, useState } from 'react';
import { useRouter } from 'next/navigation';
import AddBoxOutlinedIcon from '@mui/icons-material/AddBoxOutlined';
import Button from '@mui/material/Button';
import Stack from '@mui/material/Stack';
import { ModalOneButton } from '@/components/Modal/ModalOneButton';
import ModalIcon from '../../../public/assets/icons/modal_icon.svg';
import { ProjectsContainer } from '../ProjectContainer/ProjectContainer';
import { DraftContainer } from '../DraftContainer/DraftContainer';
import { ModalTwoButtons } from '@/components/Modal/ModalTwoButtons';
import { MODAL_YES_NO_QUESTIONS } from '@/components/Modal/modal.data';
import Maket from '../../../public/assets/icons/maket.svg';

const MODAL_TEXT = [
  'Генеририуемые планировки носят исключительно рекомендательный характер.',
  'Dizi_izi  напоминает, что ремонтные работы, лучше выполнять с профильными специалистами. ',
];

export const LayoutsContainer = () => {
  const [isOpen, setIsOpen] = useState(false);
  const router = useRouter();

  const handleConfirm = () => {
    router.push('/room-selection');
    setIsOpen(false);
  };

  const handleClose = () => {
    setIsOpen(false);
  };

  const handleDeleteYes = (id: number) => {
    console.log(`handleDeleteYes for project ${id}`);
  };

  const handleDuplicateYes = (id: number) => {
    console.log(`handleDuplicateYes for project ${id}`);
  };

  const handleСontinueYes = (id: number) => {
    console.log(`handleContinueYes for project ${id}`);
  };

  const modalActions = {
    handleYes: () => {
      if (modalState.projectId !== null) {
        switch (modalState.modalType) {
          case 'isOpenDelete':
            handleDeleteYes(modalState.projectId);
            break;
          case 'isOpenDuplicate':
            handleDuplicateYes(modalState.projectId);
            break;
          case 'isOpenContinue':
            handleСontinueYes(modalState.projectId);
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
    projectId: number | null;
  }>({
    isOpen: false,
    modalType: null,
    projectId: null,
  });

  const handleOpenModal = (modalType: ModalStateType, projectId: number) => {
    setModalState({ isOpen: true, modalType, projectId });
  };

  const handleCloseModal = () => {
    setModalState({ isOpen: false, modalType: null, projectId: null });
  };

  const projects: {
    id: number;
    name: string;
    date: string;
    image: ReactNode;
  }[] = [
    { id: 1, name: 'Проект 1', date: '25.11.2024, 22:21', image: <Maket /> },
    { id: 2, name: 'Проект 2', date: '12.04.2023, 20:13', image: <Maket /> },
  ];

  const draft: { id: number; date: string } = {
    id: 3,
    date: '25.11.2024, 22:21',
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
      <Stack direction="row" gap="32px" flexWrap="wrap">
        <Button
          variant="box"
          size="large"
          startIcon={<AddBoxOutlinedIcon />}
          onClick={() => setIsOpen(true)}
        >
          Создать проект
        </Button>
        {projects.map((project) => (
          <ProjectsContainer
            image={project.image}
            key={project.id}
            id={project.id}
            name={project.name}
            date={project.date}
            onOpenModal={handleOpenModal}
          />
        ))}

        {draft && draft.id && (
          <DraftContainer
            id={draft.id}
            date={draft.date}
            onOpenModal={handleOpenModal}
          />
        )}
      </Stack>

      <ModalOneButton
        text={MODAL_TEXT}
        isModalOpen={isOpen}
        handleConfirm={handleConfirm}
        handleClose={handleClose}
        icon={<ModalIcon width="75" height="126" />}
        nameButton="Начать"
      />

      <ModalTwoButtons
        handleYes={modalActions.handleYes}
        handleNo={modalActions.handleNo}
        text={getModalText()}
        isModalOpen={modalState.isOpen}
        handleClose={handleCloseModal}
        icon={<ModalIcon width="75" height="126" />}
        nameButtonYes="Да"
        nameButtonNo="Нет"
      />
    </>
  );
};
