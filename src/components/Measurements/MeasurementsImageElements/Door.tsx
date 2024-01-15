'use client';
import { useMemo } from 'react';

import Box from '@mui/material/Box';
import Stack from '@mui/material/Stack';

import ArrowLeftIcon from '@mui/icons-material/ArrowLeft';
import ArrowRightIcon from '@mui/icons-material/ArrowRight';
import ArrowDropUpIcon from '@mui/icons-material/ArrowDropUp';
import ArrowDropDownIcon from '@mui/icons-material/ArrowDropDown';

import DoorIcon from '../../../../public/assets/icons/measurements/icon_door.svg';

type TDoor = {
  wall: number;
  size: number;
  distance: number;
  distanceFrom: number;
  openInside: boolean;
  openLeft: boolean;
  isFocused: boolean;
};

type DoorProps = {
  door: TDoor;
  horizontalWall: number;
  verticalWall: number;
};

export const Door = ({ door, horizontalWall, verticalWall }: DoorProps) => {
  const arrowSize = useMemo(() => {
    if (door.wall === 1 || door.wall === 3) {
      if ((door.distance + 0.5 * door.size) / verticalWall === 0.5)
        return 'calc(50% - 75px)';
      if (door.distance / verticalWall < 0.5) return '25%';
      if (door.distance / verticalWall > 0.5) return '60%';
      if (door.distance / verticalWall === 0.5) return '50%';
    }
    if (door.wall === 2 || door.wall === 4) {
      if ((door.distance + 0.5 * door.size) / horizontalWall === 0.5)
        return 'calc(50% - 75px)';
      if (door.distance / horizontalWall < 0.5) return '25%';
      if (door.distance / horizontalWall > 0.5) return 'calc(75% - 150px)';
      if (door.distance / horizontalWall === 0.5) return '50%';
    }
  }, [door.distance, door.wall, door.size, verticalWall, horizontalWall]);

  const reversedOrder = useMemo(() => {
    if ((door.wall === 1 || door.wall === 3) && door.distanceFrom === 2)
      return false;
    if ((door.wall === 1 || door.wall === 3) && door.distanceFrom === 4)
      return true;

    if ((door.wall === 2 || door.wall === 4) && door.distanceFrom === 1)
      return false;
    if ((door.wall === 2 || door.wall === 4) && door.distanceFrom === 3)
      return true;
  }, [door.wall, door.distanceFrom]);

  const rotateDoor = useMemo(() => {
    if (door.wall === 1) return 'rotate(90deg)';
    if (door.wall === 2) return 'rotate(180deg)';
    if (door.wall === 3) return 'rotate(-90deg)';
    if (door.wall === 4) return 'rotate(0deg)';
  }, [door.wall]);

  const openRight = useMemo(() => {
    if (!door.openLeft) return 'scaleX(-1)';
    if (door.openLeft) return 'scaleX(1)';
  }, [door.openLeft]);

  return (
    <Stack
      display={door.size === 0 ? 'none' : undefined}
      position="absolute"
      top={
        door.wall === 2 ? '-20px' : door.distanceFrom === 2 ? '0px' : undefined
      }
      bottom={
        door.wall === 4 ? '-20px' : door.distanceFrom === 4 ? '0px' : undefined
      }
      right={
        door.wall === 3 ? '-20px' : door.distanceFrom === 3 ? '0px' : undefined
      }
      left={
        door.wall === 1 ? '-20px' : door.distanceFrom === 1 ? '0px' : undefined
      }
      direction={
        door.wall === 2 || door.wall === 4
          ? reversedOrder
            ? 'row-reverse'
            : 'row'
          : reversedOrder
          ? 'column-reverse'
          : 'column'
      }
      width={door.wall === 2 || door.wall === 4 ? '100%' : 'auto'}
      height={door.wall === 2 || door.wall === 4 ? 'auto' : '100%'}
      alignItems={
        door.wall === 4 || door.wall === 3 ? 'flex-end' : 'flex-start'
      }
    >
      <Stack
        height={door.wall === 2 || door.wall === 4 ? '20px' : arrowSize}
        width={door.wall === 2 || door.wall === 4 ? arrowSize : '20px'}
        position="relative"
        justifyContent="center"
        alignItems="center"
        p={door.wall === 2 || door.wall === 4 ? '0 5px' : '5px 0'}
      >
        <Box
          height={door.wall === 2 || door.wall === 4 ? '2px' : '100%'}
          width={door.wall === 2 || door.wall === 4 ? '100%' : '2px'}
          sx={{
            backgroundColor: door.isFocused ? 'primary.main' : 'myGrey.grey700',
          }}
        ></Box>
        {door.wall === 2 || door.wall === 4 ? (
          <>
            <ArrowLeftIcon
              fontSize="large"
              sx={{
                position: 'absolute',
                left: '-10px',
                color: door.isFocused ? 'primary.main' : 'myGrey.grey700',
              }}
            />
            <ArrowRightIcon
              fontSize="large"
              sx={{
                position: 'absolute',
                right: '-10px',
                color: door.isFocused ? 'primary.main' : 'myGrey.grey700',
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
                color: door.isFocused ? 'primary.main' : 'myGrey.grey700',
              }}
            />
            <ArrowDropDownIcon
              fontSize="large"
              sx={{
                position: 'absolute',
                bottom: '-10px',
                color: door.isFocused ? 'primary.main' : 'myGrey.grey700',
              }}
            />
          </>
        )}
      </Stack>
      <Box
        height={door.wall === 2 || door.wall === 4 ? '20px' : '150px'}
        width={door.wall === 2 || door.wall === 4 ? '150px' : '20px'}
        display={
          (door.openInside && door.isFocused) || !door.openInside
            ? 'udefined'
            : 'none'
        }
        sx={(theme) => ({
          backgroundColor: door.isFocused
            ? 'primary.main'
            : 'secondary.contrastText',
          border: door.isFocused
            ? 'none'
            : `1px solid ${theme.palette.black.main}`,
        })}
      ></Box>
      {door.openInside && !door.isFocused && (
        <DoorIcon
          style={{
            transform: `${rotateDoor} ${openRight}`,
          }}
        />
      )}
    </Stack>
  );
};
