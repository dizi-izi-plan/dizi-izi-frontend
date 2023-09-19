import { FC } from 'react';
import Skeleton from '@mui/material/Skeleton';

export const TariffSkeleton: FC = () => {
  const bigSkeletonsNumber: number = 3;
  const smallSkeletonsNumber: number = 14;

  return (
    <>
      {[...new Array(bigSkeletonsNumber)].map((el, index) => (
        <Skeleton
          key={index}
          sx={{ bgcolor: 'myGrey.grey800', mb: '30px' }}
          variant="rounded"
          width={304}
          height={60}
        />
      ))}
      {[...new Array(smallSkeletonsNumber)].map((el, index, array) => (
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
