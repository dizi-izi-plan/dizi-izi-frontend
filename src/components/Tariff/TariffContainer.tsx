import { FC } from 'react';
import Box from '@mui/material/Box';
import { TariffType } from '../TariffSection/TariffDataTypes';
import { TariffInfoList } from './TariffInfoList';
import { TariffSkeleton } from './TariffSkeleton';

export const TariffContainer: FC<TariffType> = (props) => {
  const isLoading: string = 'succeeded'; // позже - это будет переменная из redux slice

  return (
    <Box
      sx={{
        flexShrink: 1,
        flexGrow: 1,
        maxWidth: '354px',
        display: 'flex',
        flexDirection: 'column',
        borderWidth: '1px',
        borderColor: 'primary.main',
        borderStyle: 'solid',
        p: '56px 20px',
      }}
    >
      {isLoading === 'succeeded' ? (
        <TariffInfoList {...props} />
      ) : (
        <TariffSkeleton />
      )}
    </Box>
  );
};
