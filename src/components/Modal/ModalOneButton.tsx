'use client';

import Button from '@mui/material/Button';
import { ModalCommonTemplate } from './ModalCommonTemplate';
import { ModalOneButtonProps } from './ModalTypes';

export const ModalOneButton = ({
  handleClose,
  handleConfirm,
  nameButton,
  ...props
}: ModalOneButtonProps) => {
  return (
    <ModalCommonTemplate handleClose={handleClose} {...props}>
      <Button
        variant="default"
        sx={{ color: 'black.main', p: '16px 54px' }}
        size="medium"
        onClick={() => {
          handleConfirm?.();
          handleClose?.();
        }}
      >
        {nameButton}
      </Button>
    </ModalCommonTemplate>
  );
};
