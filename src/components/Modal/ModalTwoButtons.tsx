'use client';

import Button from '@mui/material/Button';
import { ModalCommonTemplate } from './ModalCommonTemplate';
import { ModalTwoButtonsProps } from './ModalTypes';

export const ModalTwoButtons = ({
  handleClose,
  handleYes,
  handleNo,
  nameButtonYes,
  nameButtonNo,
  ...props
}: ModalTwoButtonsProps) => {
  return (
    <ModalCommonTemplate handleClose={handleClose} {...props}>
      <Button
        variant="default"
        sx={{ color: 'black.main' }}
        size="small"
        onClick={() => {
          handleYes?.();
          handleClose?.();
        }}
      >
        {nameButtonYes}
      </Button>
      <Button
        variant="default"
        sx={{ color: 'black.main' }}
        size="small"
        onClick={() => {
          handleNo?.();
          handleClose?.();
        }}
      >
        {nameButtonNo}
      </Button>
    </ModalCommonTemplate>
  );
};
