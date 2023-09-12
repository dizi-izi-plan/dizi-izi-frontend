'use client';

import { ReactNode, useRef } from 'react';
import Modal, { ModalProps } from '@mui/material/Modal';
import Box from '@mui/material/Box';

type CookieModalProps = ModalProps & {
  children: ReactNode;
  minWidth: string;
};

export const InfoModal = ({
  children,
  minWidth,
  ...props
}: CookieModalProps) => {
  const rootRef = useRef<HTMLDivElement>(null);

  return (
    <Box
      sx={{
        minWidth: minWidth,
        '@media all and (-ms-high-contrast: none)': {
          display: 'none',
        },
      }}
      ref={rootRef}
    >
      <Modal
        disableEnforceFocus
        disableAutoFocus
        container={() => rootRef.current}
        {...props}
      >
        {children}
      </Modal>
    </Box>
  );
};
