import { useMemo } from 'react';

import Box from '@mui/material/Box';
import Stack from '@mui/material/Stack';

import { TBalcony } from '../MeasurementsTypes';
import { Line } from './Line';
import { ImageElementContainer } from './ImageElementContainer';
import { getElementSize } from '../helpers';

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
  const elementImageSize = useMemo(() => {
    return getElementSize(
      balcony.wall,
      balcony.size,
      verticalWall,
      horizontalWall,
    );
  }, [horizontalWall, verticalWall, balcony.size, balcony.wall]);

  const balconyPosition = useMemo(() => {
    if (balcony.wall === 1) {
      if (balcony.openLeft) {
        return {
          top: '0px',
          right: '-15px',
          transform: 'rotate(-15deg)',
        };
      } else {
        return {
          bottom: '0px',
          right: '-15px',
          transform: 'rotate(15deg)',
        };
      }
    }
    if (balcony.wall === 2) {
      if (balcony.openLeft) {
        return {
          bottom: '-15px',
          right: '0px',
          transform: 'rotate(-15deg)',
        };
      } else {
        return {
          bottom: '-15px',
          left: '0px',
          transform: 'rotate(15deg)',
        };
      }
    }
    if (balcony.wall === 3) {
      if (balcony.openLeft) {
        return {
          bottom: '0px',
          left: '-15px',
          transform: 'rotate(-15deg)',
        };
      } else {
        return {
          top: '0px',
          left: '-15px',
          transform: 'rotate(15deg)',
        };
      }
    }
    if (balcony.wall === 4) {
      if (balcony.openLeft) {
        return {
          top: '-15px',
          left: '0px',
          transform: 'rotate(-15deg)',
        };
      } else {
        return {
          top: '-15px',
          right: '0px',
          transform: 'rotate(15deg)',
        };
      }
    }
  }, [balcony.wall, balcony.openLeft]);

  return (
    <ImageElementContainer
      element={balcony}
      horizontalWall={horizontalWall}
      verticalWall={verticalWall}
      wallThickness={wallThickness}
    >
      <Box
        position="relative"
        height={
          balcony.wall === 2 || balcony.wall === 4
            ? `${wallThickness}px`
            : `${elementImageSize}%`
        }
        width={
          balcony.wall === 2 || balcony.wall === 4
            ? `${elementImageSize}%`
            : `${wallThickness}px`
        }
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
          direction={
            balcony.wall === 2 || balcony.wall === 4 ? 'column' : 'row'
          }
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
            height={balcony.wall === 2 || balcony.wall === 4 ? '9px' : '33%'}
            width={balcony.wall === 2 || balcony.wall === 4 ? '33%' : '9px'}
            direction={
              balcony.wall === 2 || balcony.wall === 4 ? 'column' : 'row'
            }
            position="absolute"
            zIndex={1}
            justifyContent="center"
            alignItems="center"
            sx={(theme) => ({
              backgroundColor: 'secondary.contrastText',
              border: `1px solid ${theme.palette.black.main}`,
              ...balconyPosition,
            })}
          >
            <Line wall={balcony.wall}></Line>
          </Stack>
        )}
      </Box>
    </ImageElementContainer>
  );
};
