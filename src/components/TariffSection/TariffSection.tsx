import Box from '@mui/material/Box';
import { TariffContainer } from '../Tariff/TariffContainer';
import { tariffInfoList } from './tariff.data';

export const TariffSection = () => {
  return (
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
        <TariffContainer key={tariff.name} tariff={tariff} />
      ))}
    </Box>
  );
};
