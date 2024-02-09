'use client';

import Typography from '@mui/material/Typography';
import Box from '@mui/material/Box';
import Stack from '@mui/material/Stack';

import ArrowBackIosNewRoundedIcon from '@mui/icons-material/ArrowBackIosNewRounded';
import ArrowForwardIosRoundedIcon from '@mui/icons-material/ArrowForwardIosRounded';

type WallNumbersProps = {
  horizontalWall: number;
  horizontalFocus: boolean;
  verticalWall: number;
  verticalFocus: boolean;
};

export const WallNumbers = ({
  horizontalWall,
  horizontalFocus,
  verticalWall,
  verticalFocus,
}: WallNumbersProps) => {
  return (
    <>
      <Stack
        position="absolute"
        top={horizontalWall > 0 ? '-20px' : '0px'}
        left={!verticalFocus ? '-90px' : '-45px'}
        direction="row"
        alignItems="center"
        display={verticalWall > 0 ? undefined : 'none'}
        height={horizontalWall > 0 ? 'calc(100% + 40px)' : '100%'}
      >
        <Stack
          height="100%"
          display={!verticalFocus ? undefined : 'none'}
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
        left={verticalWall > 0 ? '-20px' : '0px'}
        alignItems="center"
        display={horizontalWall > 0 ? undefined : 'none'}
        width={verticalWall > 0 ? 'calc(100% + 40px)' : '100%'}
      >
        <Stack
          width="100%"
          display={!horizontalFocus ? undefined : 'none'}
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
        display={verticalWall > 0 ? undefined : 'none'}
        position="absolute"
        top="calc(50% - 14px)"
        right="-40px"
      >
        3
      </Typography>
      <Typography
        variant="h3"
        color="myGrey.grey700"
        display={horizontalWall > 0 ? undefined : 'none'}
        position="absolute"
        bottom="-50px"
        left="calc(50% - 14px)"
      >
        4
      </Typography>
    </>
  );
};
