import Box from '@mui/material/Box';
import { TWalls } from '../MeasurementsTypes';
import { lineStyles } from './getElementsStyles';

type LineProps = {
  wall: TWalls;
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
