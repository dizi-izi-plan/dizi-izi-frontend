import Stack from '@mui/material/Stack';
import Typography from '@mui/material/Typography';
import { TariffActionsList } from '../Tariff/TariffActionsList';
import { TariffInfo } from '../TariffSection/TariffDataTypes';
import { tariffInfoList } from '../TariffSection/tariff.data';

export const MyTariff = () => {
  const myTariff: TariffInfo = tariffInfoList[0];

  return (
    <Stack rowGap={4}>
      <Typography variant="h2" color="primary.contrastText">
        {/* {myTariff.name} */}
        Сайт работает в тестовом режиме
      </Typography>
      <Stack rowGap={3}>
        <Typography variant="h3" color="primary.contrastText">
          Вам доступно:
        </Typography>
        <TariffActionsList
          actions={myTariff.actions}
          color="primary.contrastText"
          rowGap="23px"
        />
      </Stack>
    </Stack>
  );
};
