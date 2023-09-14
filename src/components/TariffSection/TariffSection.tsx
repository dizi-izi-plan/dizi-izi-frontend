import { FC } from 'react';
import Box from '@mui/material/Box';
import { Tariff } from '../Tariff/Tariff';
import { Typography } from '@mui/material';
import { TariffInfoList } from './TariffData';

export const TariffSection: FC = () => {
  return (
    <Box
      style={{
        width: '100%',
        display: 'flex',
        justifyContent: 'space-around',
        alignItems: 'center',
        padding: '13% 11%',
        boxSizing: 'border-box',
        minHeight: '100vh',
      }}
    >
      <Box
        style={{
          display: 'flex',
          flexDirection: 'column',
          rowGap: 104,
          justifyContent: 'space-between',
          alignItems: 'flex-start',
        }}
      >
        <Typography color="secondary.contrastText" variant="h2">
          ТАРИФЫ
        </Typography>
        <Box
          sx={{
            display: 'flex',
            margin: 0,
            width: '100%',
            columnGap: '30px',
            justifyContent: 'space-between',
          }}
        >
          {TariffInfoList.map((tariff) => (
            <Tariff key={tariff.name} tariff={tariff} />
          ))}
        </Box>
      </Box>
    </Box>
  );
};
