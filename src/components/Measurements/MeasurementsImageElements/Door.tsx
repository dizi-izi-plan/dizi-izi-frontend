import { useMemo } from 'react';

import Box from '@mui/material/Box';

import DoorIcon from '../../../../public/assets/icons/measurements/icon_door.svg';
import { TDoor } from '../MeasurementsTypes';
import { ImageElementContainer } from './ImageElementContainer';

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
  const elementImageSize = 150;

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
    <ImageElementContainer
      element={door}
      horizontalWall={horizontalWall}
      verticalWall={verticalWall}
      wallThickness={wallThickness}
      elementImageSize={elementImageSize}
    >
      <Box
        height={
          door.wall === 2 || door.wall === 4
            ? `${wallThickness}px`
            : `${elementImageSize}px`
        }
        width={
          door.wall === 2 || door.wall === 4
            ? `${elementImageSize}px`
            : `${wallThickness}px`
        }
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
    </ImageElementContainer>
  );
};
