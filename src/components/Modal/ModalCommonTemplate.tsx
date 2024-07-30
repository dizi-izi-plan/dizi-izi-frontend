import { InfoModal } from '@/components/InfoModal';
import Box from '@mui/material/Box';
import Stack from '@mui/material/Stack';
import Button from '@mui/material/Button';
import Typography from '@mui/material/Typography';
import { useAppDispatch, useAppSelector } from '@/redux/hooks';
import {
  selectCommonModal,
  closeCommonModal,
} from '@/redux/slices/modal-slice';

const MODAL_MINWIDTH = '275px';

export const ModalCommonTemplate = () => {
  const currentModal = useAppSelector(selectCommonModal);
  const dispatch = useAppDispatch();

  const handleClose = () => {
    dispatch(closeCommonModal());
  };

  return (
    currentModal.isOpen && (
      <InfoModal
        minWidth={MODAL_MINWIDTH}
        open={currentModal.isOpen}
        onClose={handleClose}
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
              {currentModal.data?.icon}
              <Stack rowGap="20px">
                {currentModal.data?.text.map((part, index) => (
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
              {currentModal.data?.сonsentText && (
                <Button
                  variant="default"
                  sx={{
                    color: 'black.main',
                    p: '16px',
                  }}
                  size={currentModal.data?.dissentText ? 'small' : 'medium'}
                  onClick={() => {
                    currentModal.data?.сonsentCallback?.();
                    handleClose?.();
                  }}
                >
                  {currentModal.data?.сonsentText}
                </Button>
              )}
              {currentModal.data?.dissentText && (
                <Button
                  variant="default"
                  sx={{ color: 'black.main', p: '16px' }}
                  size="small"
                  onClick={() => {
                    currentModal.data?.dissentCallback?.();
                    handleClose?.();
                  }}
                >
                  {currentModal.data?.dissentText}
                </Button>
              )}
            </Stack>
          </Stack>
        </Box>
      </InfoModal>
    )
  );
};
