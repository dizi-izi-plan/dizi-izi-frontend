import { FC } from 'react';
import Box from '@mui/material/Box';
import Typography from '@mui/material/Typography';
import List from '@mui/material/List';
import ListItem from '@mui/material/ListItem';
import ListItemText from '@mui/material/ListItemText';
import ListItemIcon from '@mui/material/ListItemIcon';
import CheckIcon from '@mui/icons-material/Check';
import Skeleton from '@mui/material/Skeleton';
import { TariffInfo } from '../TariffSection/TariffDataTypes';

export type TariffType = {
  tariff: TariffInfo;
};

export const Tariff: FC<TariffType> = ({ tariff }) => {
  const isLoading: string = 'succeeded'; // позже - это будет переменная из redux slice
  const bigSceletonsNumber: number = 3;
  const smallSceletonsNumber: number = 14;

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
        <>
          <Typography
            variant="h2"
            color="secondary.contrastText"
            sx={{ mb: '20px' }}
          >
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
      ) : (
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
      )}
    </Box>
  );
};
