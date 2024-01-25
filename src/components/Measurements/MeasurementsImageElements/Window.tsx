import { useMemo } from 'react';

import Stack from '@mui/material/Stack';

import { TWindow } from '../MeasurementsTypes';
import { Line } from './Line';
import { ImageElementContainer } from './ImageElementContainer';
import { getElementSize } from '../helpers';

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
  const elementImageSize = useMemo(() => {
    return getElementSize(
      window.wall,
      window.size,
      verticalWall,
      horizontalWall,
    );
  }, [horizontalWall, verticalWall, window.size, window.wall]);

  return (
    <ImageElementContainer
      element={window}
      horizontalWall={horizontalWall}
      verticalWall={verticalWall}
      wallThickness={wallThickness}
    >
      <Stack
        height={
          window.wall === 2 || window.wall === 4
            ? `${wallThickness}px`
            : `${elementImageSize}%`
        }
        width={
          window.wall === 2 || window.wall === 4
            ? `${elementImageSize}%`
            : `${wallThickness}px`
        }
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
        direction={window.wall === 2 || window.wall === 4 ? 'column' : 'row'}
      >
        {!window.isFocused && (
          <>
            {[...new Array(2)].map((el, index) => (
              <Line key={index} wall={window.wall} />
            ))}
          </>
        )}
      </Stack>
    </ImageElementContainer>
  );
};
