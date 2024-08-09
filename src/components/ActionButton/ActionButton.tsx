import { Box, Typography } from '@mui/material';
import Image from 'next/image';
import { ActionButtonProps } from './ActionButtonDataTypes';

const ActionButton: React.FC<ActionButtonProps> = ({ title, fn, img }) => {
  return (
    <Box
      onClick={fn}
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
