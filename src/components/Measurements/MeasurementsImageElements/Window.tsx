import { useMemo } from 'react';

import Stack from '@mui/material/Stack';

import { TWindow } from '../MeasurementsTypes';
import { Line } from './Line';
import { ElementContainer } from './ElementContainer';
import { getWindowStyles } from './getElementsStyles';

type WindowProps = {
  window: TWindow;
  horizontalWall: number;
  verticalWall: number;
  wallThickness: number;
};

export const Window = ({
  window,
  horizontalWall,
  verticalWall,
  wallThickness,
}: WindowProps) => {
  const windowStyles = useMemo(() => {
    return getWindowStyles(
      wallThickness,
      window.wall,
      window.size,
      verticalWall,
      horizontalWall,
    );
  }, [wallThickness, horizontalWall, verticalWall, window.size, window.wall]);

  return (
    <ElementContainer
      element={window}
      horizontalWall={horizontalWall}
      verticalWall={verticalWall}
      wallThickness={wallThickness}
    >
      <Stack
        height={windowStyles[window.wall].height}
        width={windowStyles[window.wall].width}
        sx={(theme) => ({
          backgroundColor: window.isFocused
            ? 'primary.main'
            : 'secondary.contrastText',
          border: window.isFocused
            ? 'none'
            : `1px solid ${theme.palette.black.main}`,
        })}
        justifyContent="center"
        alignItems="center"
        rowGap="6px"
        columnGap="6px"
        direction={windowStyles[window.wall].direction}
      >
        {!window.isFocused && (
          <>
            {[...new Array(2)].map((el, index) => (
              <Line key={index} wall={window.wall} />
            ))}
          </>
        )}
      </Stack>
    </ElementContainer>
  );
};
