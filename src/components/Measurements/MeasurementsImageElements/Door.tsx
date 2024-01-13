'use client';
import { useMemo } from 'react';

// import Typography from '@mui/material/Typography';
import Box from '@mui/material/Box';
import Stack from '@mui/material/Stack';

import ArrowLeftIcon from '@mui/icons-material/ArrowLeft';
import ArrowRightIcon from '@mui/icons-material/ArrowRight';
// import ArrowDropUpIcon from '@mui/icons-material/ArrowDropUp';
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
    }
    if (door.wall === 2 || door.wall === 4) {
      if ((door.distance + 0.5 * door.size) / horizontalWall === 0.5)
        return 'calc(50% - 75px)';
      if (door.distance / horizontalWall < 0.5) return '25%';
      if (door.distance / horizontalWall > 0.5) return 'calc(75% - 150px)';
    }
  }, [door, verticalWall, horizontalWall]);

  const reversedOrder = useMemo(() => {
    //мб придется изменить
    if (door.wall === 1 && door.distanceFrom === 2) return false;
    if (door.wall === 1 && door.distanceFrom === 4) return true;

    if ((door.wall === 2 || door.wall === 4) && door.distanceFrom === 1)
      return false;
    if ((door.wall === 2 || door.wall === 4) && door.distanceFrom === 3)
      return true;

    if (door.wall === 3 && door.distanceFrom === 2) return true;
    if (door.wall === 3 && door.distanceFrom === 4) return false;
  }, [door]);

  const rotateDoor = useMemo(() => {
    if (door.wall === 1) return 'rotate(-90deg)';
    if (door.wall === 2) return 'rotate(-180deg)';
    if (door.wall === 3) return 'rotate(-270deg)';
    if (door.wall === 4) return 'rotate(0deg)';
  }, [door]);

  const openRight = useMemo(() => {
    if (!door.openLeft) return 'scaleX(-1)';
    return 'scaleX(1)';
  }, [door]);

  return (
    <Stack
      display={door.size === 0 ? 'none' : 'undefind'}
      position="absolute"
      top={
        door.wall === 2 ? '-20px' : door.distanceFrom === 2 ? '0px' : 'undefind'
      }
      bottom={
        door.wall === 4 ? '-20px' : door.distanceFrom === 4 ? '0px' : 'undefind'
      }
      right={
        door.wall === 3 ? '-20px' : door.distanceFrom === 3 ? '0px' : 'undefind'
      }
      left={
        door.wall === 1 ? '-20px' : door.distanceFrom === 1 ? '0px' : 'undefind'
      }
      direction={
        (door.wall === 2 || door.wall === 4) && reversedOrder
          ? 'row-reverse'
          : 'row'
      }
      width="100%"
      alignItems={door.wall === 4 ? 'flex-end' : 'flex-start'}
    >
      <Stack
        height="20px"
        width={arrowSize}
        position="relative"
        justifyContent="center"
        p="0 5px"
      >
        <Box
          height="2px"
          width="100%"
          sx={{
            backgroundColor: door.isFocused ? 'primary.main' : 'myGrey.grey700',
          }}
        ></Box>
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
      </Stack>
      <Box
        height="20px"
        width="150px"
        display={
          (door.openInside && door.isFocused) || !door.openInside
            ? 'udefined'
            : 'none'
        }
        sx={{
          backgroundColor: door.isFocused
            ? 'primary.main'
            : 'secondary.contrastText',
        }}
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
