'use client';

import { useAppDispatch } from '@/redux/hooks';
import { setCurrentModal } from '@/redux/slices/modal-slice';
import Button from '@mui/material/Button';
import { ModalCommonTemplate } from './ModalCommonTemplate';
import { ModalOneButtonProps } from './modalTypes';

export const ModalOneButton = ({
  handleConfirm,
  nameButton,
  ...props
}: ModalOneButtonProps) => {
  const dispatch = useAppDispatch();

  return (
    <ModalCommonTemplate {...props}>
      <Button
        variant="default"
        sx={{ color: 'black.main', p: '16px 54px' }}
        size="medium"
        onClick={() => {
          handleConfirm?.();
          dispatch(setCurrentModal(null));
        }}
      >
        {nameButton}
      </Button>
    </ModalCommonTemplate>
  );
};
