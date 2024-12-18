'use client';

import { useEffect, useMemo, useState, useRef } from 'react';
import Stack, { StackProps } from '@mui/material/Stack';
import Typography from '@mui/material/Typography';
import Button from '@mui/material/Button';

import { WallNumbers } from './MeasurementsImageElements/WallNumbers';
import { Door } from './MeasurementsImageElements/Door';
import { Window } from './MeasurementsImageElements/Window';
import { Balcony } from './MeasurementsImageElements/Balcony';
import DoorTransparentIcon from '../../../public/assets/icons/measurements/icon_door-transparent.svg';
import { TWindow, TBalcony } from './MeasurementsTypes';
import { SizesFormType } from '@/components/Forms/SizesForm/validation';
import { Control } from 'react-hook-form';
import { WALLS } from '@/components/Forms/SizesForm/formData';
import { useDoorFields } from './hooks/useDoorFields';
import { useWallsFields } from './hooks/useWallsFields';

type MeasurementsImageProps = StackProps & {
  stepOne: boolean;
  stepThree: boolean;
  control: Control<SizesFormType>;
};

export const MeasurementsImage = ({
  stepOne,
  stepThree,
  control,
  ...props
}: MeasurementsImageProps) => {
  const room = useRef<HTMLDivElement>(null);
  const wallThickness = 20;

  const { verticalWall, horizontalWall, horizontalFocus, verticalFocus } =
    useWallsFields(control);

  const door = useDoorFields(control, stepOne);

  const [windows, setWindows] = useState<TWindow[]>([
    {
      wall: WALLS.second,
      size: 1200,
      distance: 500,
      distanceFromLeft: false,
      distanceFromRight: true,
      isFocused: false,
    },
  ]);

  const [balconies, setBalconies] = useState<TBalcony[]>([
    {
      wall: WALLS.first,
      size: 1500,
      distance: 500,
      distanceFromLeft: true,
      distanceFromRight: false,
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

  return (
    <Stack
      width="74%"
      minHeight="640px"
      border="1px solid"
      mb="80px"
      alignItems="center"
      sx={(theme) => ({
        borderColor:
          stepOne && (horizontalWall > 0 || verticalWall > 0)
            ? theme.palette.myGrey.grey400
            : 'transparent',
      })}
      p="70px 50px 50px 60px"
      position="relative"
      {...props}
    >
      <Stack
        display={horizontalWall === 0 && verticalWall === 0 ? 'flex' : 'none'}
        position="relative"
        top="-20px"
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
        width={horizontalWall > 0 || verticalWall > 0 ? width : '0px'}
        height={horizontalWall > 0 || verticalWall > 0 ? height : '0px'}
        sx={(theme) => ({
          transition: 'opacity, border 0.3s linear',
          opacity: horizontalWall > 0 || verticalWall > 0 ? 1 : 0,
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
        <Door
          door={door}
          horizontalWall={horizontalWall}
          verticalWall={verticalWall}
          wallThickness={wallThickness}
        />
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
                if (newWindow.distanceFromLeft) {
                  newWindow.distanceFromLeft = false;
                  newWindow.distanceFromRight = true;
                } else {
                  newWindow.distanceFromLeft = true;
                  newWindow.distanceFromRight = false;
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
                if (newBalcony.distanceFromLeft) {
                  newBalcony.distanceFromLeft = false;
                  newBalcony.distanceFromRight = true;
                } else {
                  newBalcony.distanceFromLeft = true;
                  newBalcony.distanceFromRight = false;
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
