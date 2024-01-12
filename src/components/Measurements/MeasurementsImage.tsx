'use client';

import { useMemo, useState } from 'react';
import Typography from '@mui/material/Typography';
import Box from '@mui/material/Box';
import Stack from '@mui/material/Stack';

import ArrowBackIosNewRoundedIcon from '@mui/icons-material/ArrowBackIosNewRounded';
import ArrowForwardIosRoundedIcon from '@mui/icons-material/ArrowForwardIosRounded';

export const MeasurementsImage = () => {
  const [horizontalWall, setHorizontalWall] = useState<number>(9000);
  const [horizontalFocus, setHorizontalFocus] = useState<boolean>(true);

  const [verticalWall, setVerticalWall] = useState<number>(5000);
  const [verticalFocus, setVerticalFocus] = useState<boolean>(false);

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
      <Stack
        position="absolute"
        top="-20px"
        left={!verticalFocus ? '-90px' : '-45px'}
        direction="row"
        alignItems="center"
        display={verticalWall > 0 ? 'undefind' : 'none'}
        height="calc(100% + 40px)"
      >
        <Stack
          height="100%"
          display={!verticalFocus ? 'undefind' : 'none'}
          direction="row"
          alignItems="center"
        >
          <Typography
            variant="overline"
            color="secondary.main"
            fontWeight={500}
            sx={{
              transform: 'rotate(-90deg)',
            }}
          >
            {verticalWall}
          </Typography>
          <Stack
            height="100%"
            alignItems="center"
            position="relative"
            p="3px 0"
          >
            <ArrowForwardIosRoundedIcon
              fontSize="small"
              sx={{
                position: 'absolute',
                top: '-5px',
                transform: 'rotate(-90deg)',
              }}
            />
            <Box
              height="100%"
              sx={{
                backgroundColor: 'secondary.main',
                width: '2px',
              }}
            ></Box>
            <ArrowBackIosNewRoundedIcon
              fontSize="small"
              sx={{
                position: 'absolute',
                bottom: '-5px',
                transform: 'rotate(-90deg)',
              }}
            />
          </Stack>
        </Stack>
        <Typography variant="h3" color="myGrey.grey700" pl="10px">
          1
        </Typography>
      </Stack>
      <Stack
        position="absolute"
        top={!horizontalFocus ? '-80px' : '-55px'}
        left="-20px"
        alignItems="center"
        display={horizontalWall > 0 ? 'undefind' : 'none'}
        width="calc(100% + 40px)"
      >
        <Stack
          width="100%"
          display={!horizontalFocus ? 'undefind' : 'none'}
          alignItems="center"
        >
          <Typography
            variant="overline"
            color="secondary.main"
            fontWeight={500}
            pb="3px"
          >
            {horizontalWall}
          </Typography>
          <Stack
            width="100%"
            direction="row"
            alignItems="center"
            position="relative"
            p="0 3px 0"
          >
            <ArrowBackIosNewRoundedIcon
              fontSize="small"
              sx={{
                position: 'absolute',
                left: '-5px',
              }}
            />
            <Box
              height="2px"
              position="relative"
              top="-0.2px"
              sx={{
                backgroundColor: 'secondary.main',
                width: '100%',
              }}
            ></Box>
            <ArrowForwardIosRoundedIcon
              fontSize="small"
              sx={{
                position: 'absolute',
                right: '-5px',
              }}
            />
          </Stack>
        </Stack>
        <Typography variant="h3" color="myGrey.grey700">
          2
        </Typography>
      </Stack>
      <Typography
        variant="h3"
        color="myGrey.grey700"
        display={verticalWall > 0 ? 'undefind' : 'none'}
        position="absolute"
        top="calc(50% - 14px)"
        right="-40px"
      >
        3
      </Typography>
      <Typography
        variant="h3"
        color="myGrey.grey700"
        display={horizontalWall > 0 ? 'undefind' : 'none'}
        position="absolute"
        bottom="-50px"
        left="calc(50% - 14px)"
      >
        4
      </Typography>
    </Stack>
  );
};

export default MeasurementsImage;
