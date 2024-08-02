'use client';
import { useRouter } from 'next/navigation';
import { useAppDispatch } from '@/redux/hooks';
import AddBoxOutlinedIcon from '@mui/icons-material/AddBoxOutlined';
import Button from '@mui/material/Button';
import Stack from '@mui/material/Stack';
import { setCurrentModal } from '@/redux/slices/modal-slice';
import { ModalOneButton } from '@/components/Modal/ModalOneButton';
import ModalIcon from '../../../public/assets/icons/modal_icon.svg';
import { routes } from '@/helpers/common-constants/routes-constants';
import { modalNames } from '@/helpers/common-constants/modal-constants';

const MODAL_TEXT = [
  'Генеририуемые планировки носят исключительно рекомендательный характер.',
  'Dizi_izi  напоминает, что ремонтные работы, лучше выполнять с профильными специалистами. ',
];

export const LayoutsContainer = () => {
  const dispatch = useAppDispatch();
  const router = useRouter();

  return (
    <>
      <Stack direction="row" columnGap="32px" rowGap="32px" flexWrap="wrap">
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
      </Stack>
      <ModalOneButton
        modalName={modalNames.modalStartNewProject}
        text={MODAL_TEXT}
        handleConfirm={() => router.push(routes.projectRoutes.roomSelection)}
        icon={<ModalIcon width="75" height="126" />}
        nameButton={'Начать'}
      />
    </>
  );
};
