'use client';
import React, { useState } from 'react';
import Box from '@mui/material/Box';
import Popper from '@mui/material/Popper';
import Fade from '@mui/material/Fade';
import Button from '@mui/material/Button';
import Typography from '@mui/material/Typography';

interface ButtonPopperProps {
  icon: React.ReactElement;
  tip: string;
}

export const ButtonPopper = ({ icon, tip }: ButtonPopperProps) => {
  const [open, setOpen] = useState(false);
  const [anchorEl, setAnchorEl] = useState<null | HTMLElement>(null);

  const handlePopperOpen = (event: React.MouseEvent<HTMLElement>) => {
    setAnchorEl(event.currentTarget);
    setOpen((previousOpen) => !previousOpen);
  };

  const handlePopperClose = () => {
    setAnchorEl(null);
    setOpen((previousOpen) => !previousOpen);
  };

  const canBeOpen = open && Boolean(anchorEl);
  const id = canBeOpen ? 'transition-popper' : undefined;

  return (
    <div>
      <Button
        variant="empty"
        aria-describedby={id}
        onMouseEnter={handlePopperOpen}
        onMouseLeave={handlePopperClose}
      >
        {icon}
      </Button>
      <Popper
        id={id}
        open={open}
        anchorEl={anchorEl}
        transition
        placement="top"
      >
        {({ TransitionProps }) => (
          <Fade {...TransitionProps} timeout={350}>
            <Box>
              <Typography color="black" variant="overline">
                {tip}
              </Typography>
            </Box>
          </Fade>
        )}
      </Popper>
    </div>
  );
};
