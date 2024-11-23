'use client';

import { useEffect, useMemo, useState, useRef } from 'react';
import Stack, { StackProps } from '@mui/material/Stack';
import Typography from '@mui/material/Typography';
import { WallNumbers } from './MeasurementsImageElements/WallNumbers';
import { Door } from './MeasurementsImageElements/Door';
import { Window } from './MeasurementsImageElements/Window';
import { Balcony } from './MeasurementsImageElements/Balcony';
import DoorTransparentIcon from '../../../public/assets/icons/measurements/icon_door-transparent.svg';
import { TWindow } from './MeasurementsTypes';
import { SizesFormType } from '../Forms/SizesForm/types';
import { Control } from 'react-hook-form';
import { useDoorFields } from './hooks/useDoorFields';
import { useWallsFields } from './hooks/useWallsFields';
import { useWindowFields } from './hooks/useWindowFields';

type MeasurementsImageProps = StackProps & {
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
  ...props
}: MeasurementsImageProps) => {
  const room = useRef<HTMLDivElement>(null);
  const wallThickness = 20;

  const { verticalWall, horizontalWall, horizontalFocus, verticalFocus } =
    useWallsFields(control);

  const door = useDoorFields(control, stepOne);

  const { windows, balconies } = useWindowFields(control, stepOne || stepTwo);

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
          windows.map((window: TWindow, index: number) => (
            <Window
              key={index}
              window={window}
              horizontalWall={horizontalWall}
              verticalWall={verticalWall}
              wallThickness={wallThickness}
            />
          ))}
        {stepThree &&
          balconies.map((balcony: TWindow, index: number) => (
            <Balcony
              key={index}
              balcony={balcony}
              horizontalWall={horizontalWall}
              verticalWall={verticalWall}
              wallThickness={wallThickness}
            />
          ))}
      </Stack>
    </Stack>
  );
};

export default MeasurementsImage;
