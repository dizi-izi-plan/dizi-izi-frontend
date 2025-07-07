'use client';

import { useState } from 'react';
import { useAppDispatch } from '@/redux/hooks';
import Link from '@mui/material/Link';
import Box from '@mui/material/Box';
import ContentCopyIcon from '@mui/icons-material/ContentCopy';
import { setSnackbar } from '@/redux/slices/modal-slice';

const EMAIL = 'dizi.izi.plan@gmail.com';

export const EmailCopyLink = () => {
  const [isIconOpen, setIsIconOpen] = useState(false);
  const dispatch = useAppDispatch();

  const handleMouseEnter = () => {
    setIsIconOpen(true);
  };

  const handleMouseLeave = () => {
    setIsIconOpen(false);
  };

  const handleCopyClick = () => {
    navigator.clipboard.writeText(EMAIL);
    dispatch(
      setSnackbar({
        isOpen: true,
        message: 'Ссылка скопированна',
        severity: 'success',
      }),
    );
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
    </Box>
  );
};
