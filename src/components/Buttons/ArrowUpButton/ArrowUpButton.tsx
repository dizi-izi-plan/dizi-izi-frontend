'use client';
import { FC, useEffect, useState } from 'react';

import ArrowUpwardIcon from '@mui/icons-material/ArrowUpward';
import Button from '@mui/material/Button';
import Box from '@mui/material/Box';

export interface ArrowUpButtonProps {
  color?: string;
  backgroundColor?: string;
  border?: string;
}

export const ArrowUpButton: FC<ArrowUpButtonProps> = ({
  color,
  backgroundColor,
  border,
}) => {
  const [isVisible, setIsVisible] = useState(false);

  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: 'smooth',
    });
  };

  useEffect(() => {
    const toggleVisibility = () => {
      if (window.scrollY > 812) {
        setIsVisible(true);
      } else {
        setIsVisible(false);
      }
    };

    window.addEventListener('scroll', toggleVisibility);
    return () => window.removeEventListener('scroll', toggleVisibility);
  }, []);

  return (
    isVisible && (
      <Box
        sx={{
          position: 'fixed',
          bottom: '120px',
          right: '75px',
          zIndex: 1000,
        }}
      >
        <Button
          variant="box"
          onClick={scrollToTop}
          sx={{
            borderRadius: '50%',
            width: '72px',
            height: '72px',
            color: color,
            backgroundColor: backgroundColor,
            border:  `1px solid ${border}`,
            '&:hover': { color: color },
          }}
        >
          <ArrowUpwardIcon fontSize="large" />
        </Button>
      </Box>
    )
  );
};
