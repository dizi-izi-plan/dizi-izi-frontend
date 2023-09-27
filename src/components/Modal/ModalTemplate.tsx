'use client';

import Modal from '@mui/material/Modal';
import Box from '@mui/material/Box';
import Stack from '@mui/material/Stack';
import Typography from '@mui/material/Typography';
import Button from '@mui/material/Button';
import ModalIcon from '../../../public/assets/icons/modal_icon.svg';
import { textArrType } from './modal.data';

interface ModalTemplate {
  open: boolean;
  text: textArrType;
  yesNoQuestion?: boolean;
  handleYes?: () => void;
  confirmQuestion?: boolean;
  handleConfirm?: () => void;
  onClose?: () => void;
}

export const ModalTemplate = ({
  open,
  text,
  yesNoQuestion,
  confirmQuestion,
  onClose,
  handleYes,
  handleConfirm,
}: ModalTemplate) => {
  return (
    <Modal
      open={open}
      onClose={onClose}
      sx={{
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center',
      }}
    >
      <Box
        sx={{
          width: '680px',
          minHeight: '250px',
          display: 'flex',
          justifyContent: 'center',
          alignItems: 'center',
          border: 'none',
          backgroundColor: 'secondary.contrastText',
          padding: '24px 80px',
        }}
      >
        <Stack rowGap="16px">
          <Stack direction="row" columnGap="21px" alignItems="center">
            <ModalIcon />
            <Stack rowGap="20px">
              {text.map((part, index) => (
                <Typography
                  key={index}
                  variant="body1"
                  color="black.main"
                  maxWidth="425px"
                  whiteSpace="pre-line"
                >
                  {part}
                </Typography>
              ))}
            </Stack>
          </Stack>
          <Stack
            direction="row"
            columnGap="24px"
            alignItems="center"
            justifyContent="center"
          >
            {yesNoQuestion && (
              <>
                <Button
                  variant="default"
                  sx={{ color: 'black.main' }}
                  size="small"
                  onClick={() => {
                    handleYes?.();
                    onClose?.();
                  }}
                >
                  Да
                </Button>
                <Button
                  variant="default"
                  sx={{ color: 'black.main' }}
                  size="small"
                  onClick={onClose}
                >
                  Нет
                </Button>
              </>
            )}
            {confirmQuestion && (
              <Button
                variant="default"
                sx={{ color: 'black.main', p: '16px 54px' }}
                size="medium"
                onClick={() => {
                  handleConfirm?.();
                  onClose?.();
                }}
              >
                Продолжить
              </Button>
            )}
          </Stack>
        </Stack>
      </Box>
    </Modal>
  );
};
