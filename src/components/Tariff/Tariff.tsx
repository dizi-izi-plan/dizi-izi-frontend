import { FC } from 'react';
import Box from '@mui/material/Box';
import Typography from '@mui/material/Typography';
import List from '@mui/material/List';
import ListItem from '@mui/material/ListItem';
import ListItemText from '@mui/material/ListItemText';
import ListItemIcon from '@mui/material/ListItemIcon';
import CheckIcon from '@mui/icons-material/Check';
import { TariffInfo } from '../TariffSection/TariffDataTypes';

type TariffType = {
  tariff: TariffInfo;
};

export const Tariff: FC<TariffType> = ({ tariff }) => {
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
        padding: '56px 20px',
      }}
    >
      <Typography
        variant="h2"
        color="secondary.contrastText"
        sx={{ marginBottom: '20px' }}
      >
        {tariff.name}
      </Typography>
      {tariff.description && (
        <Typography
          variant="body2"
          color="secondary.contrastText"
          sx={{ lineHeight: '1.44', marginBottom: '60px' }}
        >
          {tariff.description}
        </Typography>
      )}
      {!tariff.description && (
        <>
          <Typography
            variant="h2"
            color="secondary.contrastText"
            sx={{ marginBottom: '30px', marginTop: '110px' }}
          >
            Сайт работает в тестовом режиме
          </Typography>
          <Typography variant="body1" color="secondary.contrastText">
            Информация о тарифах появится позже
          </Typography>
        </>
      )}
      {tariff.actions && (
        <>
          <Typography
            variant="h3"
            color="secondary.contrastText"
            sx={{ marginBottom: '40px' }}
          >
            Вам доступны
          </Typography>
          <List
            style={{
              display: 'flex',
              flexDirection: 'column',
              rowGap: '10px',
              padding: 0,
            }}
          >
            {tariff.actions.map((action) => (
              <ListItem key={action} sx={{ padding: 0 }}>
                <ListItemIcon
                  sx={{
                    alignSelf: 'flex-start',
                    paddingTop: '5px',
                    minWidth: '36px',
                  }}
                >
                  <CheckIcon sx={{ color: 'secondary.contrastText' }} />
                </ListItemIcon>
                <ListItemText sx={{ padding: 0 }}>
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
      )}
    </Box>
  );
};
