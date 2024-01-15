import Box from '@mui/material/Box';

type LineProps = {
  wall: number;
};

export const Line = ({ wall }: LineProps) => {
  return (
    <Box
      height={wall === 2 || wall === 4 ? '1px' : '100%'}
      width={wall === 2 || wall === 4 ? '100%' : '1px'}
      sx={(theme) => ({
        backgroundColor: theme.palette.black.main,
      })}
    ></Box>
  );
};
