import { Box, Typography } from '@mui/material';
import Image from 'next/image';
import { FC } from 'react';

export interface ActionButtonProps {
  img: string;
  title: string;
  callback: () => void;
}

const ActionButton: FC<ActionButtonProps> = ({ title, callback, img }) => {
  return (
    <Box
      onClick={callback}
      display="flex"
      alignContent="center"
      gap="10px"
      sx={{ cursor: 'pointer' }}
    >
      <Box display="flex" justifyContent="center" alignItems="center">
        <Image alt={title} src={img} width={24} height={24}></Image>
      </Box>
      <Box>
        <Typography>{title}</Typography>
      </Box>
    </Box>
  );
};

export default ActionButton;
