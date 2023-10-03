'use client';

import { useState, SyntheticEvent } from 'react';
import Link from '@mui/material/Link';
import Box from '@mui/material/Box';
import Snackbar from '@mui/material/Snackbar';
import Alert from '@mui/material/Alert';
import ContentCopyIcon from '@mui/icons-material/ContentCopy';

const EMAIL = 'dizi.izi.plan@gmail.com';

export const EmailCopyLink = () => {
  const [isIconOpen, setIsIconOpen] = useState(false);
  const [openSnackbar, setOpenSnackbar] = useState(false);

  const handleMouseEnter = () => {
    setIsIconOpen(true);
  };

  const handleMouseLeave = () => {
    setIsIconOpen(false);
  };

  const handleCopyClick = () => {
    navigator.clipboard.writeText(EMAIL);
    setOpenSnackbar(true);
  };

  const handleSnackbarClose = (
    event: SyntheticEvent | Event,
    reason?: string,
  ) => {
    if (reason === 'clickaway') {
      return;
    }

    setOpenSnackbar(false);
  };

  return (
    <Box
      onMouseLeave={handleMouseLeave}
      sx={{
        position: 'relative',
        padding: '20px 20px 0 20px',
      }}
    >
      <Link
        href="mailto:dizi.izi.plan@gmail.com"
        variant="m"
        onMouseEnter={handleMouseEnter}
      >
        {EMAIL}
      </Link>

      {isIconOpen && (
        <ContentCopyIcon
          sx={{
            position: 'absolute',
            right: '-10px',
            top: '10px',
            cursor: 'pointer',
            color: 'secondary.contrastText',
            '&: hover': {
              color: 'primary.main',
            },
          }}
          onClick={handleCopyClick}
        />
      )}

      <Snackbar
        open={openSnackbar}
        onClose={handleSnackbarClose}
        autoHideDuration={1500}
        anchorOrigin={{ vertical: 'bottom', horizontal: 'right' }}
      >
        <Alert
          onClose={handleSnackbarClose}
          severity="success"
          sx={{ width: '100%', display: 'flex', alignItems: 'center' }}
        >
          Ссылка скопированна
        </Alert>
      </Snackbar>
    </Box>
  );
};
