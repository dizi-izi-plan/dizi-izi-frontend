'use client';

import { useState } from 'react';
import { useRouter } from 'next/navigation';
import AddBoxOutlinedIcon from '@mui/icons-material/AddBoxOutlined';
import Button from '@mui/material/Button';
import Stack from '@mui/material/Stack';
import { ModalOneButton } from '@/components/Modal/ModalOneButton';
import ModalIcon from '../../../public/assets/icons/modal_icon.svg';

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

  return (
    <>
      <Stack direction="row" columnGap="32px" rowGap="32px" flexWrap="wrap">
        <Button
          variant="box"
          size="large"
          startIcon={<AddBoxOutlinedIcon />}
          onClick={() => setIsOpen(true)}
        >
          Создать проект
        </Button>
      </Stack>

      <ModalOneButton
        text={MODAL_TEXT}
        isModalOpen={isOpen}
        handleConfirm={handleConfirm}
        handleClose={handleClose}
        icon={<ModalIcon width="75" height="126" />}
        nameButton={'Начать'}
      />
    </>
  );
};
