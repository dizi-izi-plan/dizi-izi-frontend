'use client';
import { useRouter } from 'next/navigation';
import { useAppDispatch } from '@/redux/hooks';
import AddBoxOutlinedIcon from '@mui/icons-material/AddBoxOutlined';
import Button from '@mui/material/Button';
import Stack from '@mui/material/Stack';
import { openCommonModal } from '@/redux/slices/modal-slice';
import ModalIcon from '../../../public/assets/icons/modal_icon.svg';

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
            dispatch(
              openCommonModal({
                text: MODAL_TEXT,
                icon: <ModalIcon width="75" height="126" />,
                сonsentText: 'Продолжить',
                сonsentCallback: router.push('/room-selection'),
              }),
            )
          }
        >
          Создать проект
        </Button>
      </Stack>
    </>
  );
};
