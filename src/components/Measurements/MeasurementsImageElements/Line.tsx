import Box from '@mui/material/Box';
import { WALLS_NAMES_TYPE } from '@/components/Forms/SizesForm/types';
import { lineStyles } from './getElementsStyles';

type LineProps = {
  wall: WALLS_NAMES_TYPE;
};

export const Line = ({ wall }: LineProps) => {
  return (
    <Box
      height={lineStyles[wall].height}
      width={lineStyles[wall].width}
      sx={(theme) => ({
        backgroundColor: theme.palette.black.main,
      })}
    ></Box>
  );
};
