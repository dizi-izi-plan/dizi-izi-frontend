'use client';
import {
  Box,
  IconButton,
  Menu,
  MenuItem,
  Stack,
  Typography,
} from '@mui/material';
import React, { MouseEvent, useRef, useState } from 'react';
import MoreHorizIcon from '@mui/icons-material/MoreHoriz';
import { theme } from '@/mui/theme';

interface MenuOptionsProps {
  actions: { name: string; onClick: () => void }[];
}

export const MenuOptions = ({ actions }: MenuOptionsProps) => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const anchorRef = useRef<HTMLElement | null>(null);

  const handleClick = (event: MouseEvent<HTMLElement>) => {
    anchorRef.current = event.currentTarget;
    setIsMenuOpen(true);
  };

  const handleClose = () => {
    setIsMenuOpen(false);
    anchorRef.current = null;
  };

  return (
    <Box>
      <Stack>
        <IconButton
          onClick={handleClick}
          sx={{
            padding: 0,
          }}
        >
          <MoreHorizIcon
            sx={{
              color: ` ${theme.palette.secondary.dark}`,
              opacity: '0.6',
            }}
          />
        </IconButton>
      </Stack>
      <Menu
        elevation={0}
        anchorOrigin={{
          vertical: 'top',
          horizontal: 'left',
        }}
        transformOrigin={{
          vertical: 'bottom',
          horizontal: 'left',
        }}
        anchorEl={anchorRef.current}
        open={isMenuOpen}
        onClose={handleClose}
      >
        <Box>
          {actions.map((el) => (
            <MenuItem
              key={el.name}
              onClick={() => {
                el.onClick();
                handleClose();
              }}
            >
              <Typography variant="overline">{el.name}</Typography>
            </MenuItem>
          ))}
        </Box>
      </Menu>
    </Box>
  );
};
