import Box from '@mui/material/Box';
import { Tariff } from '../Tariff/Tariff';
import { Typography } from '@mui/material';
import { tariffInfoList } from './TariffData';

export const TariffSection = () => {
  return (
    <Box
      sx={{
        width: '100%',
        display: 'flex',
        justifyContent: 'space-around',
        alignItems: 'center',
        padding: '13% 11%',
        boxSizing: 'border-box',
      }}
    >
      <Box
        sx={{
          display: 'flex',
          flexDirection: 'column',
          rowGap: '104px',
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
          {tariffInfoList.map((tariff) => (
            <Tariff key={tariff.name} tariff={tariff} />
          ))}
        </Box>
      </Box>
    </Box>
  );
};
