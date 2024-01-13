'use client';

import { useMemo, useState } from 'react';
import Stack from '@mui/material/Stack';
import Button from '@mui/material/Button';

import { WallNumbers } from './MeasurementsImageElements/WallNumbers';
import { Door } from './MeasurementsImageElements/Door';

type TDoor = {
  wall: number;
  size: number;
  distance: number;
  distanceFrom: number;
  openInside: boolean;
  openLeft: boolean;
  isFocused: boolean;
};

export const MeasurementsImage = () => {
  const [horizontalWall, setHorizontalWall] = useState<number>(5000);
  const [horizontalFocus, setHorizontalFocus] = useState<boolean>(false);

  const [verticalWall, setVerticalWall] = useState<number>(4000);
  const [verticalFocus, setVerticalFocus] = useState<boolean>(false);

  const [doors, setDoors] = useState<TDoor[]>([
    {
      wall: 4,
      size: 800,
      distance: 3000,
      distanceFrom: 3,
      openInside: true,
      openLeft: false,
      isFocused: false,
    },
    {
      wall: 0,
      size: 0,
      distance: 0,
      distanceFrom: 0,
      openInside: true,
      openLeft: true,
      isFocused: false,
    },
  ]);

  const width = useMemo(() => {
    if (horizontalWall > 0) {
      if (horizontalWall > verticalWall) {
        return '100%';
      } else if (horizontalWall === verticalWall) {
        return '520px';
      } else {
        return '400px';
      }
    } else {
      return '50%';
    }
  }, [horizontalWall, verticalWall]);

  return (
    <>
      <Stack
        position="relative"
        width={width}
        height="100%"
        sx={(theme) => ({
          borderBottom: `solid ${horizontalWall > 0 ? '20px' : '0px'} ${
            horizontalFocus && horizontalWall > 1
              ? theme.palette.primary.main
              : theme.palette.myGrey.grey700
          }
        `,
          borderTop: `solid ${horizontalWall > 0 ? '20px' : '0px'} ${
            horizontalFocus && horizontalWall > 1
              ? theme.palette.primary.main
              : theme.palette.myGrey.grey700
          }
        `,
          borderLeft: `solid ${verticalWall > 0 ? '20px' : '0px'} ${
            verticalFocus && verticalWall > 1
              ? theme.palette.primary.main
              : theme.palette.myGrey.grey700
          }
        `,
          borderRight: `solid ${verticalWall > 0 ? '20px' : '0px'} ${
            verticalFocus && verticalWall > 1
              ? theme.palette.primary.main
              : theme.palette.myGrey.grey700
          }
        `,
        })}
      >
        <WallNumbers
          horizontalWall={horizontalWall}
          horizontalFocus={horizontalFocus}
          verticalWall={verticalWall}
          verticalFocus={verticalFocus}
        />
        {doors.map((door, index) => (
          <Door
            key={index}
            door={door}
            horizontalWall={horizontalWall}
            verticalWall={verticalWall}
          />
        ))}
      </Stack>
      <Stack position="absolute" bottom="-150px" left="0px" rowGap="20px">
        <Stack direction="row" columnGap="20px">
          <Button
            variant="default"
            sx={{ color: 'black.main', p: '10px 10px' }}
            size="medium"
            onClick={() => {
              setHorizontalWall(5000);
              setVerticalWall(4000);
            }}
          >
            Длина больше ширины
          </Button>
          <Button
            variant="default"
            sx={{ color: 'black.main', p: '10px 10px' }}
            size="medium"
            onClick={() => {
              setHorizontalWall(5000);
              setVerticalWall(5000);
            }}
          >
            Квадрат
          </Button>
          <Button
            variant="default"
            sx={{ color: 'black.main', p: '10px 10px' }}
            size="medium"
            onClick={() => {
              setHorizontalWall(4000);
              setVerticalWall(5000);
            }}
          >
            Ширина больше длины
          </Button>
        </Stack>
        <Stack direction="row" columnGap="20px">
          <Button
            variant="default"
            sx={{ color: 'black.main', p: '10px 10px' }}
            size="medium"
            onClick={() => {
              setVerticalFocus(true);
              setHorizontalFocus(false);
            }}
          >
            Фокус 1 и 3
          </Button>
          <Button
            variant="default"
            sx={{ color: 'black.main', p: '10px 10px' }}
            size="medium"
            onClick={() => {
              setVerticalFocus(false);
              setHorizontalFocus(true);
            }}
          >
            Фокус 2 и 4
          </Button>
          <Button
            variant="default"
            sx={{ color: 'black.main', p: '10px 10px' }}
            size="medium"
            onClick={() => {
              setVerticalFocus(false);
              setHorizontalFocus(false);
            }}
          >
            Снять фокус
          </Button>
        </Stack>
      </Stack>
    </>
  );
};

export default MeasurementsImage;
