'use client';

import { FC, ReactNode, useRef } from 'react';
import Modal, { ModalProps } from '@mui/material/Modal';
import Box from '@mui/material/Box';

type CookieModalProps = ModalProps & {
  children: ReactNode;
  minWidth: string;
};

export const InfoModal: FC<CookieModalProps> = ({
  children,
  minWidth,
  ...props
}) => {
  const rootRef = useRef<HTMLDivElement>(null);

  return (
    <Box
      sx={{
        minWidth: minWidth,
        transform: 'translateZ(0)',
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
