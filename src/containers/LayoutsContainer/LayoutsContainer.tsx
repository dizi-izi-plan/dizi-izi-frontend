'use client';
import { useAppDispatch } from '@/redux/hooks';
import { setCurrentModal } from '@/redux/slices/modal-slice';
import { routes } from '@/helpers/common-constants/routes-constants';
import { modalNames } from '@/helpers/common-constants/modal-constants';
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
  const router = useRouter();
  const dispatch = useAppDispatch();

  type ModalStateType =
    | 'isOpenDelete'
    | 'isOpenDuplicate'
    | 'isOpenContinue'
    | 'isOpenDraftDelete';
  type ModalState = {
    isOpen: boolean;
    modalType: ModalStateType | null;
  };

  const [modalState, setModalState] = useState<ModalState>({
    isOpen: false,
    modalType: null,
  });

  const handleDeleteYes = () => {
    console.log(`handleDeleteYes for project `);
  };

  const handleDuplicateYes = () => {
    console.log(`handleDuplicateYes for project `);
  };

  const handleСontinueYes = () => {
    console.log(`handleContinueYes for project `);
  };
  const handleDraftDeleteYes = () => {
    //логика удаления черновика старого
    console.log(`handleDraftDeleteYes for draft `);
    router.push(routes.projectRoutes.roomSelection);
    //добавить уведомление какое
    alert('Нужно ли увед Черновик удален');
  };

  const modalActions = {
    handleYes: () => {
      switch (modalState.modalType) {
        case 'isOpenDelete':
          handleDeleteYes();
          break;
        case 'isOpenDuplicate':
          handleDuplicateYes();
          break;
        case 'isOpenContinue':
          handleСontinueYes();
          break;
        case 'isOpenDraftDelete':
          handleDraftDeleteYes();
          break;

        default:
          break;
      }
      handleCloseModal();
    },
    handleNo: () => {
      console.log('handleNo');
    },
  };

  const handleOpenModal = (modalType: ModalStateType) => {
    setModalState({ isOpen: true, modalType });
  };

  const handleCloseModal = () => {
    setModalState({ isOpen: false, modalType: null });
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

  const draft: { id: number; date: string } | null = {
    id: 3,
    date: '25.11.2024, 22:21',
  };
  const hasDraft = draft && Object.keys(draft).length !== 0
  

  const getModalText = (): string[] => {
    switch (modalState.modalType) {
      case 'isOpenDelete':
        return MODAL_YES_NO_QUESTIONS[2];
      case 'isOpenDuplicate':
        return MODAL_YES_NO_QUESTIONS[0];
      case 'isOpenContinue':
        return MODAL_YES_NO_QUESTIONS[1];
      case 'isOpenDraftDelete':
        return [MODAL_YES_NO_QUESTIONS[1][0], MODAL_YES_NO_QUESTIONS[5][0]];
      default:
        return [''];
    }
  };
  const clickOneModal = () => {
    if (hasDraft) {
      handleOpenModal('isOpenDraftDelete');
      dispatch(setCurrentModal(modalNames.modalTooMuchFurniture));
    } else {
      dispatch(setCurrentModal(modalNames.modalStartNewProject));
    }
  };

  return (
    <>
      <Stack direction="row" gap="32px" flexWrap="wrap">
        <Button
          variant="box"
          size="large"
          startIcon={<AddBoxOutlinedIcon />}
          onClick={
            () => clickOneModal()
            // dispatch(setCurrentModal(modalNames.modalStartNewProject))
          }
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
        modalName={modalNames.modalStartNewProject}
        text={MODAL_TEXT}
        handleConfirm={() => router.push(routes.projectRoutes.roomSelection)}
        icon={<ModalIcon width="75" height="126" />}
        nameButton="Начать"
      />

      <ModalTwoButtons
        handleYes={modalActions.handleYes}
        handleNo={modalActions.handleNo}
        text={getModalText()}
        icon={<ModalIcon width="75" height="126" />}
        nameButtonYes="Да"
        nameButtonNo="Нет"
        modalName={modalNames.modalTooMuchFurniture}
      />
    </>
  );
};
