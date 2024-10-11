import Skeleton from '@mui/material/Skeleton';
import {
  bigSkeletonsNumber,
  smallSkeletonsNumber,
} from '@/components/Tariff/tariffSkeleton.data';

export const TariffSkeleton = () => {
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
