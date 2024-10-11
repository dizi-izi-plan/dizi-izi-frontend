'use client';
import React, { ReactNode, useState } from 'react';
import Box from '@mui/material/Box';
import Popper from '@mui/material/Popper';
import { Placement } from '@popperjs/core';
import Fade from '@mui/material/Fade';
import Typography from '@mui/material/Typography';
import { PopperTarget } from '@/components/Popper/PopperTarget';
import { Variant } from '@mui/material/styles/createTypography';

interface PopperMessageProps {
  tip: string;
  tipColor?: string;
  typographyVariant?: Variant;
  placement?: Placement;
  children: ReactNode;
}

export const PopperMessage = ({
  tip,
  tipColor = 'black',
  placement = 'top',
  typographyVariant = 'overline',
  children,
}: PopperMessageProps) => {
  const [isOpen, setIsOpen] = useState(false);
  const [anchorEl, setAnchorEl] = useState<null | HTMLElement>(null);

  const handlePopperOpen = (event: React.MouseEvent<HTMLElement>) => {
    setAnchorEl(event.currentTarget);
    setIsOpen(true);
  };

  const handlePopperClose = () => {
    setAnchorEl(null);
    setIsOpen(false);
  };

  const canBeOpen = isOpen && Boolean(anchorEl);
  const id = canBeOpen ? 'transition-popper' : undefined;

  return (
    <div>
      <PopperTarget
        id={id}
        handlePopperOpen={handlePopperOpen}
        handlePopperClose={handlePopperClose}
      >
        {children}
      </PopperTarget>
      <Popper
        id={id}
        open={isOpen}
        anchorEl={anchorEl}
        transition
        placement={placement}
      >
        {({ TransitionProps }) => (
          <Fade {...TransitionProps} timeout={350}>
            <Box>
              <Typography
                color={tipColor}
                variant={typographyVariant}
                // sx={{ fontFamily: '' }}
              >
                {tip}
              </Typography>
            </Box>
          </Fade>
        )}
      </Popper>
    </div>
  );
};
