import { useMemo, ReactNode } from 'react';

import Box from '@mui/material/Box';
import Stack from '@mui/material/Stack';

import ArrowLeftIcon from '@mui/icons-material/ArrowLeft';
import ArrowRightIcon from '@mui/icons-material/ArrowRight';
import ArrowDropUpIcon from '@mui/icons-material/ArrowDropUp';
import ArrowDropDownIcon from '@mui/icons-material/ArrowDropDown';

import { TElementContainer } from '../MeasurementsTypes';
import { WALLS } from '@/components/Forms/SizesForm/formData';
import { getElementContainerStyles } from './getElementsStyles';

type ElementContainerProps = {
  element: TElementContainer;
  horizontalWall: number;
  verticalWall: number;
  wallThickness: number;
  children: ReactNode;
};

export const ElementContainer = ({
  element,
  horizontalWall,
  verticalWall,
  wallThickness,
  children,
}: ElementContainerProps) => {
  const elementStyles = useMemo(() => {
    return getElementContainerStyles(
      wallThickness,
      element.wall,
      element.distance,
      verticalWall,
      horizontalWall,
    );
  }, [
    wallThickness,
    horizontalWall,
    verticalWall,
    element.distance,
    element.wall,
  ]);

  return (
    <Stack
      display={element.size === 0 ? 'none' : undefined}
      position="absolute"
      width={elementStyles[element.wall].container.width}
      height={elementStyles[element.wall].container.height}
      alignItems={elementStyles[element.wall].container.alignItems}
      sx={{
        ...(element.distanceFromLeft
          ? elementStyles[element.wall].container.position.distFromLeft
          : elementStyles[element.wall].container.position.distFromRight),
      }}
    >
      <Stack
        height={elementStyles[element.wall].arrow.height}
        width={elementStyles[element.wall].arrow.width}
        position="relative"
        justifyContent="center"
        alignItems="center"
        p={elementStyles[element.wall].arrow.padding}
      >
        <Box
          height={elementStyles[element.wall].line.height}
          width={elementStyles[element.wall].line.width}
          sx={{
            backgroundColor: element.isFocused
              ? 'primary.main'
              : 'myGrey.grey700',
          }}
        ></Box>
        {element.distance > 0 ? (
          element.wall === WALLS.second || element.wall === WALLS.forth ? (
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
          )
        ) : null}
      </Stack>
      {children}
    </Stack>
  );
};
