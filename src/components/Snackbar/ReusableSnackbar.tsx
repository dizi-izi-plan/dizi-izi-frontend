'use client';
import { SyntheticEvent } from 'react';
import { useAppDispatch, useAppSelector } from '@/redux/hooks';
import Snackbar from '@mui/material/Snackbar';
import Alert from '@mui/material/Alert';
import { selectSnackbar, setSnackbar } from '@/redux/slices/modal-slice';

export const ReusableSnackbar = () => {
  const dispatch = useAppDispatch();
  const currentSnackbar = useAppSelector(selectSnackbar);

  const handleSnackbarClose = (
    event: SyntheticEvent | Event,
    reason?: string,
  ) => {
    if (reason === 'clickaway') {
      return;
    }

    dispatch(setSnackbar(null));
  };

  return currentSnackbar ? (
    <Snackbar
      open={currentSnackbar.isOpen}
      onClose={handleSnackbarClose}
      autoHideDuration={1500}
      anchorOrigin={{ vertical: 'bottom', horizontal: 'right' }}
    >
      <Alert
        onClose={handleSnackbarClose}
        severity={currentSnackbar.severity}
        sx={{ width: '100%', display: 'flex', alignItems: 'center' }}
      >
        {currentSnackbar.message}
      </Alert>
    </Snackbar>
  ) : null;
};
