'use client';

import { useEffect, useMemo, useState } from 'react';
import Stack from '@mui/material/Stack';
import Typography from '@mui/material/Typography';
import Button from '@mui/material/Button';

import { WallNumbers } from './MeasurementsImageElements/WallNumbers';
import { Door } from './MeasurementsImageElements/Door';
import DoorTransparentIcon from '../../../public/assets/icons/measurements/icon_door-transparent.svg';

type TDoor = {
  wall: number;
  size: number;
  distance: number;
  distanceFrom: number;
  openInside: boolean;
  openLeft: boolean;
  isFocused: boolean;
};

type MeasurementsImageProps = {
  stepOne: boolean;
  stepTwo: boolean;
  stepTree: boolean;
};

export const MeasurementsImage = ({
  stepOne,
  stepTwo,
}: MeasurementsImageProps) => {
  const [horizontalWall, setHorizontalWall] = useState<number>(6000);
  const [horizontalFocus, setHorizontalFocus] = useState<boolean>(false);

  const [verticalWall, setVerticalWall] = useState<number>(4000);
  const [verticalFocus, setVerticalFocus] = useState<boolean>(false);

  const [doors, setDoors] = useState<TDoor[]>([
    {
      wall: 4,
      size: 800,
      distance: 1000,
      distanceFrom: 3,
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

  useEffect(() => {
    if (stepTwo) {
      setHorizontalFocus(false);
      setVerticalFocus(false);
    }
  }, [stepTwo, setHorizontalFocus, setVerticalFocus]);

  return (
    <Stack
      width="74%"
      height="640px"
      border="1px solid"
      mb="80px"
      alignItems="center"
      sx={(theme) => ({
        borderColor:
          stepOne && (horizontalWall !== 0 || verticalWall !== 0)
            ? theme.palette.myGrey.grey400
            : 'transparent',
      })}
      p="70px 50px 50px 60px"
      position="relative"
    >
      <Stack
        display={
          horizontalWall === 0 && verticalWall === 0 ? 'undefind' : 'none'
        }
        position="relative"
        width="100%"
        height="100%"
        sx={(theme) => ({
          border: `solid 20px ${theme.palette.myGrey.grey200}`,
        })}
        justifyContent="center"
        alignItems="center"
      >
        <Typography
          variant="h2"
          color="myGrey.grey800"
          maxWidth="400px"
          textAlign="center"
        >
          Введите параметры помещения
        </Typography>
        <DoorTransparentIcon
          style={{
            position: 'absolute',
            bottom: '-20px',
            right: '70px',
          }}
        />
      </Stack>
      <Stack
        position="relative"
        width={width}
        height="100%"
        display={
          horizontalWall !== 0 || verticalWall !== 0 ? 'undefind' : 'none'
        }
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
        {!stepOne &&
          doors.map((door, index) => (
            <Door
              key={index}
              door={door}
              horizontalWall={horizontalWall}
              verticalWall={verticalWall}
            />
          ))}
      </Stack>
      {/*Раздел с кнопками для изменения параметров, пока нет формы. Удалить после*/}
      <Stack position="absolute" bottom="-150px" left="0px" rowGap="20px">
        <Stack
          direction="row"
          columnGap="20px"
          display={stepOne ? 'undefind' : 'none'}
        >
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
        <Stack
          direction="row"
          columnGap="20px"
          display={stepOne ? 'undefind' : 'none'}
        >
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
        <Stack
          direction="row"
          columnGap="20px"
          display={stepTwo ? 'undefind' : 'none'}
        >
          <Button
            variant="default"
            sx={{ color: 'black.main', p: '10px 10px' }}
            size="medium"
            onClick={() => {
              setDoors((prev) => {
                const newDoor = prev[0];
                if (newDoor.wall < 4) {
                  newDoor.wall += 1;
                } else {
                  newDoor.wall = 1;
                }
                if (newDoor.distanceFrom < 4) {
                  newDoor.distanceFrom += 1;
                } else {
                  newDoor.distanceFrom = 1;
                }
                return [newDoor];
              });
            }}
          >
            Поменять стену
          </Button>
          <Button
            variant="default"
            sx={{ color: 'black.main', p: '10px 10px' }}
            size="medium"
            onClick={() => {
              setDoors((prev) => {
                const newDoor = prev[0];
                console.log(newDoor.distanceFrom);
                if (newDoor.distanceFrom < 3) {
                  newDoor.distanceFrom += 2;
                } else {
                  newDoor.distanceFrom -= 2;
                }
                console.log(newDoor.distanceFrom);
                return [newDoor];
              });
            }}
          >
            Поменять стену, от которой идет расчет
          </Button>
          <Button
            variant="default"
            sx={{ color: 'black.main', p: '10px 10px' }}
            size="medium"
            onClick={() => {
              setDoors((prev) => {
                const newDoor = prev[0];
                newDoor.openLeft = !newDoor.openLeft;
                return [newDoor];
              });
            }}
          >
            Открыть {doors[0].openLeft ? 'вправо' : 'влево'}
          </Button>
          <Button
            variant="default"
            sx={{ color: 'black.main', p: '10px 10px' }}
            size="medium"
            onClick={() => {
              setDoors((prev) => {
                const newDoor = prev[0];
                newDoor.openInside = !newDoor.openInside;
                return [newDoor];
              });
            }}
          >
            Открыть {doors[0].openInside ? 'наружу' : 'внутрь'}
          </Button>
          <Button
            variant="default"
            sx={{ color: 'black.main', p: '10px 10px' }}
            size="medium"
            onClick={() => {
              setDoors((prev) => {
                const newDoor = prev[0];
                newDoor.isFocused = !newDoor.isFocused;
                return [newDoor];
              });
            }}
          >
            {doors[0].isFocused ? 'Убрать фокус' : 'Дверь в фокусе'}
          </Button>
        </Stack>
      </Stack>
    </Stack>
  );
};

export default MeasurementsImage;
