'use client';

import { useAppDispatch } from '@/redux/hooks';
import { setCurrentModal } from '@/redux/slices/modal-slice';
import Button from '@mui/material/Button';
import { ModalCommonTemplate } from './ModalCommonTemplate';
import { ModalTwoButtonsProps } from './modalTypes';

export const ModalTwoButtons = ({
  handleYes,
  handleNo,
  nameButtonYes,
  nameButtonNo,
  ...props
}: ModalTwoButtonsProps) => {
  const dispatch = useAppDispatch();

  return (
    <ModalCommonTemplate {...props}>
      <Button
        variant="default"
        sx={{ color: 'black.main', p: '16px' }}
        size="small"
        onClick={() => {
          handleYes?.();
          dispatch(setCurrentModal(null));
        }}
      >
        {nameButtonYes}
      </Button>
      <Button
        variant="default"
        sx={{ color: 'black.main', p: '16px' }}
        size="small"
        onClick={() => {
          handleNo?.();
          dispatch(setCurrentModal(null));
        }}
      >
        {nameButtonNo}
      </Button>
    </ModalCommonTemplate>
  );
};
