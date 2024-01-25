import { useMemo, ReactNode } from 'react';

import Box from '@mui/material/Box';
import Stack from '@mui/material/Stack';

import ArrowLeftIcon from '@mui/icons-material/ArrowLeft';
import ArrowRightIcon from '@mui/icons-material/ArrowRight';
import ArrowDropUpIcon from '@mui/icons-material/ArrowDropUp';
import ArrowDropDownIcon from '@mui/icons-material/ArrowDropDown';

import { TImageElementContainer } from '../MeasurementsTypes';
import { getOrder, getElementSize } from '../helpers';

type ImageElementContainerProps = {
  element: TImageElementContainer;
  horizontalWall: number;
  verticalWall: number;
  wallThickness: number;
  children: ReactNode;
};

export const ImageElementContainer = ({
  element,
  horizontalWall,
  verticalWall,
  wallThickness,
  children,
}: ImageElementContainerProps) => {
  const arrowSize = useMemo(() => {
    return getElementSize(
      element.wall,
      element.distance,
      verticalWall,
      horizontalWall,
    );
  }, [horizontalWall, verticalWall, element.distance, element.wall]);

  const isOrderReversed = useMemo(() => {
    return getOrder(element.wall, element.distanceFrom);
  }, [element.wall, element.distanceFrom]);

  return (
    <Stack
      display={element.size === 0 ? 'none' : undefined}
      position="absolute"
      top={
        element.wall === 2
          ? `-${wallThickness}px`
          : element.distanceFrom === 2
          ? '0px'
          : undefined
      }
      bottom={
        element.wall === 4
          ? `-${wallThickness}px`
          : element.distanceFrom === 4
          ? '0px'
          : undefined
      }
      right={
        element.wall === 3
          ? `-${wallThickness}px`
          : element.distanceFrom === 3
          ? '0px'
          : undefined
      }
      left={
        element.wall === 1
          ? `-${wallThickness}px`
          : element.distanceFrom === 1
          ? '0px'
          : undefined
      }
      direction={
        element.wall === 2 || element.wall === 4
          ? isOrderReversed
            ? 'row-reverse'
            : 'row'
          : isOrderReversed
          ? 'column-reverse'
          : 'column'
      }
      width={element.wall === 2 || element.wall === 4 ? '100%' : 'auto'}
      height={element.wall === 2 || element.wall === 4 ? 'auto' : '100%'}
      alignItems={
        element.wall === 4 || element.wall === 3 ? 'flex-end' : 'flex-start'
      }
    >
      <Stack
        height={
          element.wall === 2 || element.wall === 4
            ? `${wallThickness}px`
            : `${arrowSize}%`
        }
        width={
          element.wall === 2 || element.wall === 4
            ? `${arrowSize}%`
            : `${wallThickness}px`
        }
        position="relative"
        justifyContent="center"
        alignItems="center"
        p={element.wall === 2 || element.wall === 4 ? '0 5px' : '5px 0'}
      >
        <Box
          height={element.wall === 2 || element.wall === 4 ? '2px' : '100%'}
          width={element.wall === 2 || element.wall === 4 ? '100%' : '2px'}
          sx={{
            backgroundColor: element.isFocused
              ? 'primary.main'
              : 'myGrey.grey700',
          }}
        ></Box>
        {element.wall === 2 || element.wall === 4 ? (
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
        )}
      </Stack>
      {children}
    </Stack>
  );
};
