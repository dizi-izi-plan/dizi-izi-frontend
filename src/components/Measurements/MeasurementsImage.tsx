'use client';

import { useEffect, useMemo, useState, useRef } from 'react';
import Stack from '@mui/material/Stack';
import Typography from '@mui/material/Typography';
import Button from '@mui/material/Button';

import { WallNumbers } from './MeasurementsImageElements/WallNumbers';
import { Door } from './MeasurementsImageElements/Door';
import { Window } from './MeasurementsImageElements/Window';
import { Balcony } from './MeasurementsImageElements/Balcony';
import DoorTransparentIcon from '../../../public/assets/icons/measurements/icon_door-transparent.svg';
import { TDoor, TWindow, TBalcony } from './MeasurementsTypes';
import { SizesFormType } from '../Forms/SizesForm/validation';
import { Control } from 'react-hook-form';
import { WALLS } from '../Forms/SizesForm/formData';
import { useWatch } from 'react-hook-form';

type MeasurementsImageProps = {
  stepOne: boolean;
  stepTwo: boolean;
  stepThree: boolean;
  control: Control<SizesFormType>;
};

export const MeasurementsImage = ({
  stepOne,
  stepTwo,
  stepThree,
  control,
}: MeasurementsImageProps) => {
  const room = useRef<HTMLDivElement>(null);
  const wallThickness = 20;

  const verticalWall = useWatch({
    control,
    name: WALLS.first,
    defaultValue: 0,
  }) as number;
  const horizontalWall = useWatch({
    control,
    name: WALLS.second,
    defaultValue: 0,
  }) as number;

  const [horizontalFocus, setHorizontalFocus] = useState<boolean>(false);
  const [verticalFocus, setVerticalFocus] = useState<boolean>(false);

  const [doors, setDoors] = useState<TDoor[]>([
    {
      wall: 3,
      size: 1000,
      distance: 2000,
      distanceFrom: 2,
      openInside: true,
      openLeft: true,
      isFocused: true,
    },
  ]);

  const [windows, setWindows] = useState<TWindow[]>([
    {
      wall: 2,
      size: 1500,
      distance: 2000,
      distanceFrom: 1,
      isFocused: false,
    },
  ]);

  const [balconies, setBalconies] = useState<TBalcony[]>([
    {
      wall: 1,
      size: 2000,
      distance: 500,
      distanceFrom: 2,
      openLeft: false,
      isFocused: false,
    },
  ]);

  const [currentSizes, setCurrentSizes] = useState({
    width: 640,
    height: 520,
  });

  const width = useMemo(() => {
    if (horizontalWall > 0) {
      if (horizontalWall > verticalWall) {
        return '100%';
      } else if (horizontalWall === verticalWall) {
        return '520px';
      } else {
        const index = horizontalWall / verticalWall;
        return `${index * currentSizes.height}px`;
      }
    } else {
      return '50%';
    }
  }, [horizontalWall, verticalWall, currentSizes.height]);

  const height = useMemo(() => {
    if (verticalWall > 0) {
      if (verticalWall >= horizontalWall) {
        return '520px';
      } else {
        const index = verticalWall / horizontalWall;
        return `${index * currentSizes.width}px`;
      }
    } else {
      return '520px';
    }
  }, [horizontalWall, verticalWall, currentSizes.width]);

  useEffect(() => {
    if (room.current !== null) {
      const roomObserved = room.current;
      const observer = new ResizeObserver(() => {
        if (room.current?.offsetWidth && room.current?.offsetHeight) {
          setCurrentSizes({
            width: room.current?.offsetWidth,
            height: room.current?.offsetHeight,
          });
        }
      });
      observer.observe(roomObserved);
      return () => {
        observer.unobserve(roomObserved);
      };
    }
  }, []);

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
          horizontalWall === 0 && verticalWall === 0 ? undefined : 'none'
        }
        position="relative"
        width="100%"
        height="100%"
        sx={(theme) => ({
          border: `solid ${wallThickness}px ${theme.palette.myGrey.grey200}`,
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
            bottom: `-${wallThickness}px`,
            right: '70px',
          }}
        />
      </Stack>
      <Stack
        ref={room}
        position="relative"
        width={width}
        height={height}
        display={
          horizontalWall !== 0 || verticalWall !== 0 ? undefined : 'none'
        }
        sx={(theme) => ({
          borderBottom: `solid ${
            horizontalWall > 0 ? `${wallThickness}px` : '0px'
          } ${
            horizontalFocus && horizontalWall > 1
              ? theme.palette.primary.main
              : theme.palette.myGrey.grey700
          }
        `,
          borderTop: `solid ${
            horizontalWall > 0 ? `${wallThickness}px` : '0px'
          } ${
            horizontalFocus && horizontalWall > 1
              ? theme.palette.primary.main
              : theme.palette.myGrey.grey700
          }
        `,
          borderLeft: `solid ${
            verticalWall > 0 ? `${wallThickness}px` : '0px'
          } ${
            verticalFocus && verticalWall > 1
              ? theme.palette.primary.main
              : theme.palette.myGrey.grey700
          }
        `,
          borderRight: `solid ${
            verticalWall > 0 ? `${wallThickness}px` : '0px'
          } ${
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
              wallThickness={wallThickness}
            />
          ))}
        {stepThree &&
          windows.map((window, index) => (
            <Window
              key={index}
              window={window}
              horizontalWall={horizontalWall}
              verticalWall={verticalWall}
              wallThickness={wallThickness}
            />
          ))}
        {stepThree &&
          balconies.map((balcony, index) => (
            <Balcony
              key={index}
              balcony={balcony}
              horizontalWall={horizontalWall}
              verticalWall={verticalWall}
              wallThickness={wallThickness}
            />
          ))}
      </Stack>
      {/*Раздел с кнопками для изменения параметров - ПРИМЕР для Кати и дизайнеров, пока нет формы. Удалить после*/}
      <Stack position="absolute" bottom="-150px" left="0px" rowGap="20px">
        <Stack
          direction="row"
          columnGap="20px"
          display={stepOne ? undefined : 'none'}
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
          display={stepTwo ? undefined : 'none'}
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
                if (newDoor.distanceFrom < 3) {
                  newDoor.distanceFrom += 2;
                } else {
                  newDoor.distanceFrom -= 2;
                }
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
        <Stack
          direction="row"
          columnGap="20px"
          display={stepThree ? undefined : 'none'}
        >
          <Typography>ОКНО</Typography>
          <Button
            variant="default"
            sx={{ color: 'black.main', p: '10px 10px' }}
            size="medium"
            onClick={() => {
              setWindows((prev) => {
                const newWindow = prev[0];
                if (newWindow.wall < 4) {
                  newWindow.wall += 1;
                } else {
                  newWindow.wall = 1;
                }
                if (newWindow.distanceFrom < 4) {
                  newWindow.distanceFrom += 1;
                } else {
                  newWindow.distanceFrom = 1;
                }
                return [newWindow];
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
              setWindows((prev) => {
                const newWindow = prev[0];
                if (newWindow.distanceFrom < 3) {
                  newWindow.distanceFrom += 2;
                } else {
                  newWindow.distanceFrom -= 2;
                }
                return [newWindow];
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
              setWindows((prev) => {
                const newWindow = prev[0];
                newWindow.isFocused = !newWindow.isFocused;
                return [newWindow];
              });
            }}
          >
            {windows[0].isFocused ? 'Убрать фокус' : 'Окно в фокусе'}
          </Button>
        </Stack>
        <Stack
          direction="row"
          columnGap="20px"
          display={stepThree ? undefined : 'none'}
        >
          <Typography>БАЛКОН</Typography>
          <Button
            variant="default"
            sx={{ color: 'black.main', p: '10px 10px' }}
            size="medium"
            onClick={() => {
              setBalconies((prev) => {
                const newBalcony = prev[0];
                if (newBalcony.wall < 4) {
                  newBalcony.wall += 1;
                } else {
                  newBalcony.wall = 1;
                }
                if (newBalcony.distanceFrom < 4) {
                  newBalcony.distanceFrom += 1;
                } else {
                  newBalcony.distanceFrom = 1;
                }
                return [newBalcony];
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
              setBalconies((prev) => {
                const newBalcony = prev[0];
                if (newBalcony.distanceFrom < 3) {
                  newBalcony.distanceFrom += 2;
                } else {
                  newBalcony.distanceFrom -= 2;
                }
                return [newBalcony];
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
              setBalconies((prev) => {
                const newBalcony = prev[0];
                newBalcony.openLeft = !newBalcony.openLeft;
                return [newBalcony];
              });
            }}
          >
            Открыть {balconies[0].openLeft ? 'вправо' : 'влево'}
          </Button>
          <Button
            variant="default"
            sx={{ color: 'black.main', p: '10px 10px' }}
            size="medium"
            onClick={() => {
              setBalconies((prev) => {
                const newBalcony = prev[0];
                newBalcony.isFocused = !newBalcony.isFocused;
                return [newBalcony];
              });
            }}
          >
            {balconies[0].isFocused ? 'Убрать фокус' : 'Балкон в фокусе'}
          </Button>
        </Stack>
      </Stack>
    </Stack>
  );
};

export default MeasurementsImage;
