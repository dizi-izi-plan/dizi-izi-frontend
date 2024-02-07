import { useMemo } from 'react';

import Box from '@mui/material/Box';
import Stack from '@mui/material/Stack';

import { TBalcony } from '../MeasurementsTypes';
import { Line } from './Line';
import { ImageElementContainer } from './ImageElementContainer';
import { getBalconyStyles } from './elementsStyles';

type BalconyProps = {
  balcony: TBalcony;
  horizontalWall: number;
  verticalWall: number;
  wallThickness: number;
};

export const Balcony = ({
  balcony,
  horizontalWall,
  verticalWall,
  wallThickness,
}: BalconyProps) => {
  const balconyStyles = useMemo(() => {
    return getBalconyStyles(
      wallThickness,
      balcony.wall,
      balcony.size,
      verticalWall,
      horizontalWall,
    );
  }, [horizontalWall, verticalWall, balcony.size, balcony.wall, wallThickness]);

  return (
    <ImageElementContainer
      element={balcony}
      horizontalWall={horizontalWall}
      verticalWall={verticalWall}
      wallThickness={wallThickness}
    >
      <Box
        position="relative"
        height={balconyStyles[balcony.wall].window.height}
        width={balconyStyles[balcony.wall].window.width}
      >
        <Stack
          height="100%"
          width="100%"
          sx={(theme) => ({
            backgroundColor: balcony.isFocused
              ? 'primary.main'
              : 'secondary.contrastText',
            border: balcony.isFocused
              ? 'none'
              : `1px solid ${theme.palette.black.main}`,
          })}
          justifyContent="center"
          alignItems="center"
          rowGap="6px"
          columnGap="6px"
          direction={balconyStyles[balcony.wall].window.direction}
          position="relative"
          zIndex={2}
        >
          {!balcony.isFocused && (
            <>
              {[...new Array(2)].map((el, index) => (
                <Line key={index} wall={balcony.wall} />
              ))}
            </>
          )}
        </Stack>
        {!balcony.isFocused && (
          <Stack
            height={balconyStyles[balcony.wall].door.height}
            width={balconyStyles[balcony.wall].door.width}
            direction={balconyStyles[balcony.wall].door.direction}
            position="absolute"
            zIndex={1}
            justifyContent="center"
            alignItems="center"
            sx={(theme) => ({
              backgroundColor: 'secondary.contrastText',
              border: `1px solid ${theme.palette.black.main}`,
              ...(balcony.openLeft
                ? balconyStyles[balcony.wall].door.position.openLeft
                : balconyStyles[balcony.wall].door.position.openRight),
            })}
          >
            <Line wall={balcony.wall}></Line>
          </Stack>
        )}
      </Box>
    </ImageElementContainer>
  );
};
