import { FC } from 'react';
import Typography from '@mui/material/Typography';
import List from '@mui/material/List';
import ListItem from '@mui/material/ListItem';
import ListItemText from '@mui/material/ListItemText';
import ListItemIcon from '@mui/material/ListItemIcon';
import CheckIcon from '@mui/icons-material/Check';
import { TariffInfo } from '../TariffSection/TariffDataTypes';

export type TariffType = {
  tariff: TariffInfo;
};

export const TariffInfoList: FC<TariffType> = ({ tariff }) => (
  <>
    <Typography variant="h2" color="secondary.contrastText" sx={{ mb: '20px' }}>
      {tariff.name}
    </Typography>
    {tariff.description ? (
      <Typography
        variant="body2"
        color="secondary.contrastText"
        sx={{
          lineHeight: '1.44',
          mb: '30px',
          height: '108px',
          overflow: 'hidden',
          textOverflow: 'ellipsis',
          display: '-webkit-box',
          WebkitLineClamp: '4',
          WebkitBoxOrient: 'vertical',
        }}
      >
        {tariff.description}
      </Typography>
    ) : (
      <>
        <Typography
          variant="h2"
          color="secondary.contrastText"
          sx={{ mb: '30px', mt: '110px' }}
        >
          Сайт работает в тестовом режиме
        </Typography>
        <Typography variant="body1" color="secondary.contrastText">
          Информация о тарифах появится позже
        </Typography>
      </>
    )}
    {
      // eslint-disable-next-line @typescript-eslint/ban-ts-comment
      // @ts-ignore
      tariff?.actions?.length > 0 ? ( // in this case, if actions don't exist, the meaning is false, so this block is equal to null
        <>
          <Typography
            variant="h3"
            color="secondary.contrastText"
            sx={{ mb: '40px' }}
          >
            Вам доступны
          </Typography>
          <List
            sx={{
              display: 'flex',
              flexDirection: 'column',
              rowGap: '10px',
              p: '0',
            }}
          >
            {tariff.actions?.map((action) => (
              <ListItem key={action} sx={{ p: '0' }}>
                <ListItemIcon
                  sx={{
                    alignSelf: 'flex-start',
                    pt: '5px',
                    minWidth: '36px',
                  }}
                >
                  <CheckIcon sx={{ color: 'secondary.contrastText' }} />
                </ListItemIcon>
                <ListItemText sx={{ p: '0' }}>
                  <Typography
                    sx={{ lineHeight: 'normal' }}
                    variant="body2"
                    color="secondary.contrastText"
                  >
                    {action}
                  </Typography>
                </ListItemText>
              </ListItem>
            ))}
          </List>
        </>
      ) : null
    }
  </>
);
