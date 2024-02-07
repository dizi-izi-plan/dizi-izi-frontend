import { useMemo, useRef, useState, useEffect } from 'react';

import Box from '@mui/material/Box';

import { TDoor } from '../MeasurementsTypes';
import { ImageElementContainer } from './ImageElementContainer';
import { getDoorStyles } from './elementsStyles';

type DoorProps = {
  door: TDoor;
  horizontalWall: number;
  verticalWall: number;
  wallThickness: number;
};

export const Door = ({
  door,
  horizontalWall,
  verticalWall,
  wallThickness,
}: DoorProps) => {
  const doorRef = useRef<HTMLDivElement>(null);

  const doorStyles = useMemo(() => {
    return getDoorStyles(
      wallThickness,
      door.wall,
      door.size,
      verticalWall,
      horizontalWall,
    );
  }, [wallThickness, door.wall, door.size, verticalWall, horizontalWall]);

  const [currentDoorSizes, setCurrentDoorSizes] = useState({
    width: 0,
    height: 0,
  });

  useEffect(() => {
    if (doorRef.current !== null) {
      const doorObserved = doorRef.current;
      const observer = new ResizeObserver(() => {
        if (doorRef.current?.offsetWidth && doorRef.current?.offsetHeight) {
          setCurrentDoorSizes({
            width: doorRef.current?.offsetWidth,
            height: doorRef.current?.offsetHeight,
          });
        }
      });
      observer.observe(doorObserved);
      return () => {
        observer.unobserve(doorObserved);
      };
    }
  }, []);

  return (
    <ImageElementContainer
      element={door}
      horizontalWall={horizontalWall}
      verticalWall={verticalWall}
      wallThickness={wallThickness}
    >
      <Box
        ref={doorRef}
        height={doorStyles[door.wall].height}
        width={doorStyles[door.wall].width}
        display={
          (door.openInside && door.isFocused) || !door.openInside
            ? undefined
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
        <Box
          sx={{
            width: `${Math.max(
              currentDoorSizes.height,
              currentDoorSizes.width,
            )}px`,
            height: `${Math.max(
              currentDoorSizes.height,
              currentDoorSizes.width,
            )}px`,
            backgroundColor: 'white',
            transform: `${doorStyles[door.wall].rotate}`,
            border: '1px solid black',
            borderBottomColor: 'white',
            borderRadius: `${
              door.openLeft ? '0px 100% 0px 0px' : '100% 0px 0px 0px'
            }`,
          }}
        ></Box>
      )}
    </ImageElementContainer>
  );
};
