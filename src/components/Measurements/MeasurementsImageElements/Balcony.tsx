// 'use client';
import { useMemo } from 'react';

import Box from '@mui/material/Box';
import Stack from '@mui/material/Stack';

import ArrowLeftIcon from '@mui/icons-material/ArrowLeft';
import ArrowRightIcon from '@mui/icons-material/ArrowRight';
import ArrowDropUpIcon from '@mui/icons-material/ArrowDropUp';
import ArrowDropDownIcon from '@mui/icons-material/ArrowDropDown';

import { Line } from './Line';

type TBalcony = {
  wall: number;
  size: number;
  distance: number;
  distanceFrom: number;
  openInside: boolean;
  openLeft: boolean;
  isFocused: boolean;
};

type BalconyProps = {
  balcony: TBalcony;
  horizontalWall: number;
  verticalWall: number;
};

export const Balcony = ({
  balcony,
  horizontalWall,
  verticalWall,
}: BalconyProps) => {
  const arrowSize = useMemo(() => {
    if (balcony.wall === 1 || balcony.wall === 3) {
      if ((balcony.distance + 0.5 * balcony.size) / verticalWall === 0.5)
        return 'calc(50% - 75px)';
      if (balcony.distance / verticalWall < 0.5) return '25%';
      if (balcony.distance / verticalWall > 0.5) return '60%';
      if (balcony.distance / verticalWall === 0.5) return '50%';
    }
    if (balcony.wall === 2 || balcony.wall === 4) {
      if ((balcony.distance + 0.5 * balcony.size) / horizontalWall === 0.5)
        return 'calc(50% - 75px)';
      if (balcony.distance / horizontalWall < 0.5) return '25%';
      if (balcony.distance / horizontalWall > 0.5) return 'calc(75% - 350px)';
      if (balcony.distance / horizontalWall === 0.5) return '50%';
    }
  }, [
    balcony.distance,
    balcony.wall,
    balcony.size,
    verticalWall,
    horizontalWall,
  ]);

  const reversedOrder = useMemo(() => {
    if (
      (balcony.wall === 1 || balcony.wall === 3) &&
      balcony.distanceFrom === 2
    )
      return false;
    if (
      (balcony.wall === 1 || balcony.wall === 3) &&
      balcony.distanceFrom === 4
    )
      return true;

    if (
      (balcony.wall === 2 || balcony.wall === 4) &&
      balcony.distanceFrom === 1
    )
      return false;
    if (
      (balcony.wall === 2 || balcony.wall === 4) &&
      balcony.distanceFrom === 3
    )
      return true;
  }, [balcony.wall, balcony.distanceFrom]);

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
    <Stack
      display={balcony.size === 0 ? 'none' : undefined}
      position="absolute"
      top={
        balcony.wall === 2
          ? '-20px'
          : balcony.distanceFrom === 2
          ? '0px'
          : undefined
      }
      bottom={
        balcony.wall === 4
          ? '-20px'
          : balcony.distanceFrom === 4
          ? '0px'
          : undefined
      }
      right={
        balcony.wall === 3
          ? '-20px'
          : balcony.distanceFrom === 3
          ? '0px'
          : undefined
      }
      left={
        balcony.wall === 1
          ? '-20px'
          : balcony.distanceFrom === 1
          ? '0px'
          : undefined
      }
      direction={
        balcony.wall === 2 || balcony.wall === 4
          ? reversedOrder
            ? 'row-reverse'
            : 'row'
          : reversedOrder
          ? 'column-reverse'
          : 'column'
      }
      width={balcony.wall === 2 || balcony.wall === 4 ? '100%' : 'auto'}
      height={balcony.wall === 2 || balcony.wall === 4 ? 'auto' : '100%'}
      alignItems={
        balcony.wall === 4 || balcony.wall === 3 ? 'flex-end' : 'flex-start'
      }
    >
      <Stack
        height={balcony.wall === 2 || balcony.wall === 4 ? '20px' : arrowSize}
        width={balcony.wall === 2 || balcony.wall === 4 ? arrowSize : '20px'}
        position="relative"
        justifyContent="center"
        alignItems="center"
        p={balcony.wall === 2 || balcony.wall === 4 ? '0 5px' : '5px 0'}
      >
        <Box
          height={balcony.wall === 2 || balcony.wall === 4 ? '2px' : '100%'}
          width={balcony.wall === 2 || balcony.wall === 4 ? '100%' : '2px'}
          sx={{
            backgroundColor: balcony.isFocused
              ? 'primary.main'
              : 'myGrey.grey700',
          }}
        ></Box>
        {balcony.wall === 2 || balcony.wall === 4 ? (
          <>
            <ArrowLeftIcon
              fontSize="large"
              sx={{
                position: 'absolute',
                left: '-10px',
                color: balcony.isFocused ? 'primary.main' : 'myGrey.grey700',
              }}
            />
            <ArrowRightIcon
              fontSize="large"
              sx={{
                position: 'absolute',
                right: '-10px',
                color: balcony.isFocused ? 'primary.main' : 'myGrey.grey700',
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
                color: balcony.isFocused ? 'primary.main' : 'myGrey.grey700',
              }}
            />
            <ArrowDropDownIcon
              fontSize="large"
              sx={{
                position: 'absolute',
                bottom: '-10px',
                color: balcony.isFocused ? 'primary.main' : 'myGrey.grey700',
              }}
            />
          </>
        )}
      </Stack>
      <Box position="relative">
        <Stack
          height={balcony.wall === 2 || balcony.wall === 4 ? '20px' : '350px'}
          width={balcony.wall === 2 || balcony.wall === 4 ? '350px' : '20px'}
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
            height={balcony.wall === 2 || balcony.wall === 4 ? '9px' : '120px'}
            width={balcony.wall === 2 || balcony.wall === 4 ? '120px' : '9px'}
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
    </Stack>
  );
};
