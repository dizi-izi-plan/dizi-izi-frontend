'use client';
import { useMemo, ReactNode } from 'react';

import Box from '@mui/material/Box';
import Stack from '@mui/material/Stack';

import ArrowLeftIcon from '@mui/icons-material/ArrowLeft';
import ArrowRightIcon from '@mui/icons-material/ArrowRight';
import ArrowDropUpIcon from '@mui/icons-material/ArrowDropUp';
import ArrowDropDownIcon from '@mui/icons-material/ArrowDropDown';

type TDoorOrBalcony = {
  wall: number;
  size: number;
  distance: number;
  distanceFrom: number;
  openInside: boolean;
  openLeft: boolean;
  isFocused: boolean;
};

type DoorOrBalconyProps = {
  element: TDoorOrBalcony;
  horizontalWall: number;
  verticalWall: number;
  size: string;
  image: ReactNode;
};

export const DoorOrBalcony = ({
  element,
  horizontalWall,
  verticalWall,
  size,
  image,
}: DoorOrBalconyProps) => {
  const arrowSize = useMemo(() => {
    if (element.wall === 1 || element.wall === 3) {
      if ((element.distance + 0.5 * element.size) / verticalWall === 0.5)
        return 'calc(50% - 75px)';
      if (element.distance / verticalWall < 0.5) return '25%';
      if (element.distance / verticalWall > 0.5) return '60%';
      if (element.distance / verticalWall === 0.5) return '50%';
    }
    if (element.wall === 2 || element.wall === 4) {
      if ((element.distance + 0.5 * element.size) / horizontalWall === 0.5)
        return 'calc(50% - 75px)';
      if (element.distance / horizontalWall < 0.5) return '25%';
      if (element.distance / horizontalWall > 0.5) return `calc(75% - ${size})`;
      if (element.distance / horizontalWall === 0.5) return '50%';
    }
  }, [
    element.distance,
    element.wall,
    element.size,
    verticalWall,
    horizontalWall,
    size,
  ]);

  const reversedOrder = useMemo(() => {
    if (
      (element.wall === 1 || element.wall === 3) &&
      element.distanceFrom === 2
    )
      return false;
    if (
      (element.wall === 1 || element.wall === 3) &&
      element.distanceFrom === 4
    )
      return true;

    if (
      (element.wall === 2 || element.wall === 4) &&
      element.distanceFrom === 1
    )
      return false;
    if (
      (element.wall === 2 || element.wall === 4) &&
      element.distanceFrom === 3
    )
      return true;
  }, [element.wall, element.distanceFrom]);

  const rotateDoor = useMemo(() => {
    if (element.wall === 1) return 'rotate(90deg)';
    if (element.wall === 2) return 'rotate(180deg)';
    if (element.wall === 3) return 'rotate(-90deg)';
    if (element.wall === 4) return 'rotate(0deg)';
  }, [element.wall]);

  const openRight = useMemo(() => {
    if (!element.openLeft) return 'scaleX(-1)';
    if (element.openLeft) return 'scaleX(1)';
  }, [element.openLeft]);

  return (
    <Stack
      display={element.size === 0 ? 'none' : undefined}
      position="absolute"
      top={
        element.wall === 2
          ? '-20px'
          : element.distanceFrom === 2
          ? '0px'
          : undefined
      }
      bottom={
        element.wall === 4
          ? '-20px'
          : element.distanceFrom === 4
          ? '0px'
          : undefined
      }
      right={
        element.wall === 3
          ? '-20px'
          : element.distanceFrom === 3
          ? '0px'
          : undefined
      }
      left={
        element.wall === 1
          ? '-20px'
          : element.distanceFrom === 1
          ? '0px'
          : undefined
      }
      direction={
        element.wall === 2 || element.wall === 4
          ? reversedOrder
            ? 'row-reverse'
            : 'row'
          : reversedOrder
          ? 'column-reverse'
          : 'column'
      }
      width={element.wall === 2 || element.wall === 4 ? '100%' : 'auto'}
      height={element.wall === 2 || element.wall === 4 ? 'auto' : '100%'}
      alignItems={
        element.wall === 4 || element.wall === 3 ? 'flex-end' : 'flex-start'
      }
    >
      <Stack
        height={element.wall === 2 || element.wall === 4 ? '20px' : arrowSize}
        width={element.wall === 2 || element.wall === 4 ? arrowSize : '20px'}
        position="relative"
        justifyContent="center"
        alignItems="center"
        p={element.wall === 2 || element.wall === 4 ? '0 5px' : '5px 0'}
      >
        <Box
          height={element.wall === 2 || element.wall === 4 ? '2px' : '100%'}
          width={element.wall === 2 || element.wall === 4 ? '100%' : '2px'}
          sx={{
            backgroundColor: element.isFocused
              ? 'primary.main'
              : 'myGrey.grey700',
          }}
        ></Box>
        {element.wall === 2 || element.wall === 4 ? (
          <>
            <ArrowLeftIcon
              fontSize="large"
              sx={{
                position: 'absolute',
                left: '-10px',
                color: element.isFocused ? 'primary.main' : 'myGrey.grey700',
              }}
            />
            <ArrowRightIcon
              fontSize="large"
              sx={{
                position: 'absolute',
                right: '-10px',
                color: element.isFocused ? 'primary.main' : 'myGrey.grey700',
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
                color: element.isFocused ? 'primary.main' : 'myGrey.grey700',
              }}
            />
            <ArrowDropDownIcon
              fontSize="large"
              sx={{
                position: 'absolute',
                bottom: '-10px',
                color: element.isFocused ? 'primary.main' : 'myGrey.grey700',
              }}
            />
          </>
        )}
      </Stack>
      <Box
        height={element.wall === 2 || element.wall === 4 ? '20px' : size}
        width={element.wall === 2 || element.wall === 4 ? size : '20px'}
        display={
          (element.openInside && element.isFocused) || !element.openInside
            ? 'udefined'
            : 'none'
        }
        sx={(theme) => ({
          backgroundColor: element.isFocused
            ? 'primary.main'
            : 'secondary.contrastText',
          border: element.isFocused
            ? 'none'
            : `1px solid ${theme.palette.black.main}`,
        })}
      ></Box>
      {element.openInside && !element.isFocused && (
        <Box
          sx={{
            transform: `${rotateDoor} ${openRight}`,
            maxHeight: size,
          }}
        >
          {image}
        </Box>
      )}
    </Stack>
  );
};
