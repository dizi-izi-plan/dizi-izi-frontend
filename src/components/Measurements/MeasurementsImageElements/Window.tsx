'use client';
import { useMemo } from 'react';

import Box from '@mui/material/Box';
import Stack from '@mui/material/Stack';

import ArrowLeftIcon from '@mui/icons-material/ArrowLeft';
import ArrowRightIcon from '@mui/icons-material/ArrowRight';
import ArrowDropUpIcon from '@mui/icons-material/ArrowDropUp';
import ArrowDropDownIcon from '@mui/icons-material/ArrowDropDown';

type TWindow = {
  wall: number;
  size: number;
  distance: number;
  distanceFrom: number;
  isFocused: boolean;
};

type WindowProps = {
  window: TWindow;
  horizontalWall: number;
  verticalWall: number;
};

export const Window = ({
  window,
  horizontalWall,
  verticalWall,
}: WindowProps) => {
  const arrowSize = useMemo(() => {
    if (window.wall === 1 || window.wall === 3) {
      if ((window.distance + 0.5 * window.size) / verticalWall === 0.5)
        return 'calc(50% - 100px)';
      if (window.distance / verticalWall < 0.5) return '25%';
      if (window.distance / verticalWall > 0.5) return '60%';
      if (window.distance / verticalWall === 0.5) return '50%';
    }
    if (window.wall === 2 || window.wall === 4) {
      if ((window.distance + 0.5 * window.size) / horizontalWall === 0.5)
        return 'calc(50% - 100px)';
      if (window.distance / horizontalWall < 0.5) return '25%';
      if (window.distance / horizontalWall > 0.5) return 'calc(75% - 200px)';
      if (window.distance / horizontalWall === 0.5) return '50%';
    }
  }, [window.distance, window.wall, window.size, verticalWall, horizontalWall]);

  const reversedOrder = useMemo(() => {
    if ((window.wall === 1 || window.wall === 3) && window.distanceFrom === 2)
      return false;
    if ((window.wall === 1 || window.wall === 3) && window.distanceFrom === 4)
      return true;

    if ((window.wall === 2 || window.wall === 4) && window.distanceFrom === 1)
      return false;
    if ((window.wall === 2 || window.wall === 4) && window.distanceFrom === 3)
      return true;
  }, [window.wall, window.distanceFrom]);

  return (
    <Stack
      display={window.size === 0 ? 'none' : 'undefind'}
      position="absolute"
      top={
        window.wall === 2
          ? '-20px'
          : window.distanceFrom === 2
          ? '0px'
          : 'undefind'
      }
      bottom={
        window.wall === 4
          ? '-20px'
          : window.distanceFrom === 4
          ? '0px'
          : 'undefind'
      }
      right={
        window.wall === 3
          ? '-20px'
          : window.distanceFrom === 3
          ? '0px'
          : 'undefind'
      }
      left={
        window.wall === 1
          ? '-20px'
          : window.distanceFrom === 1
          ? '0px'
          : 'undefind'
      }
      direction={
        window.wall === 2 || window.wall === 4
          ? reversedOrder
            ? 'row-reverse'
            : 'row'
          : reversedOrder
          ? 'column-reverse'
          : 'column'
      }
      width={window.wall === 2 || window.wall === 4 ? '100%' : 'auto'}
      height={window.wall === 2 || window.wall === 4 ? 'auto' : '100%'}
      alignItems={
        window.wall === 4 || window.wall === 3 ? 'flex-end' : 'flex-start'
      }
    >
      <Stack
        height={window.wall === 2 || window.wall === 4 ? '20px' : arrowSize}
        width={window.wall === 2 || window.wall === 4 ? arrowSize : '20px'}
        position="relative"
        justifyContent="center"
        alignItems="center"
        p={window.wall === 2 || window.wall === 4 ? '0 5px' : '5px 0'}
      >
        <Box
          height={window.wall === 2 || window.wall === 4 ? '2px' : '100%'}
          width={window.wall === 2 || window.wall === 4 ? '100%' : '2px'}
          sx={{
            backgroundColor: window.isFocused
              ? 'primary.main'
              : 'myGrey.grey700',
          }}
        ></Box>
        {window.wall === 2 || window.wall === 4 ? (
          <>
            <ArrowLeftIcon
              fontSize="large"
              sx={{
                position: 'absolute',
                left: '-10px',
                color: window.isFocused ? 'primary.main' : 'myGrey.grey700',
              }}
            />
            <ArrowRightIcon
              fontSize="large"
              sx={{
                position: 'absolute',
                right: '-10px',
                color: window.isFocused ? 'primary.main' : 'myGrey.grey700',
              }}
            />
          </>
        ) : (
          <>
            <ArrowDropUpIcon
              fontSize="large"
              sx={{
                position: 'absolute',
                top: '-10px',
                color: window.isFocused ? 'primary.main' : 'myGrey.grey700',
              }}
            />
            <ArrowDropDownIcon
              fontSize="large"
              sx={{
                position: 'absolute',
                bottom: '-10px',
                color: window.isFocused ? 'primary.main' : 'myGrey.grey700',
              }}
            />
          </>
        )}
      </Stack>
      <Stack
        height={window.wall === 2 || window.wall === 4 ? '20px' : '200px'}
        width={window.wall === 2 || window.wall === 4 ? '200px' : '20px'}
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
            <Box
              height={window.wall === 2 || window.wall === 4 ? '1px' : '100%'}
              width={window.wall === 2 || window.wall === 4 ? '100%' : '1px'}
              sx={(theme) => ({
                backgroundColor: theme.palette.black.main,
              })}
            ></Box>
            <Box
              height={window.wall === 2 || window.wall === 4 ? '1px' : '100%'}
              width={window.wall === 2 || window.wall === 4 ? '100%' : '1px'}
              sx={(theme) => ({
                backgroundColor: theme.palette.black.main,
              })}
            ></Box>
          </>
        )}
      </Stack>
      {/* {!window.isFocused && (
        <DoorIcon
          style={{
            transform: `${rotateWindow}`,
          }}
        />
      )} */}
    </Stack>
  );
};
