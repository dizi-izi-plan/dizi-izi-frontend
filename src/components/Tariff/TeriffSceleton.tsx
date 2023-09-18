import { FC } from 'react';
import Skeleton from '@mui/material/Skeleton';

export const TariffSceleton: FC = () => {
  const bigSceletonsNumber: number = 3;
  const smallSceletonsNumber: number = 14;

  return (
    <>
      {[...new Array(bigSceletonsNumber)].map((el, index) => (
        <Skeleton
          key={index}
          sx={{ bgcolor: 'myGrey.grey800', mb: '30px' }}
          variant="rounded"
          width={304}
          height={60}
        />
      ))}
      {[...new Array(smallSceletonsNumber)].map((el, index, array) => (
        <Skeleton
          key={index}
          sx={{
            bgcolor: 'myGrey.grey800',
            mb: index < array.length - 1 ? '10px' : null,
          }}
          variant="rounded"
          width={304}
          height={20}
        />
      ))}
    </>
  );
};
