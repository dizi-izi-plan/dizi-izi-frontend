import Typography from '@mui/material/Typography';
import List from '@mui/material/List';
import ListItem from '@mui/material/ListItem';
import ListItemText from '@mui/material/ListItemText';
import ListItemIcon from '@mui/material/ListItemIcon';
import CheckIcon from '@mui/icons-material/Check';
import { ActionsType } from '../TariffSection/TariffDataTypes';

type TariffActionsListProps = {
  actions: ActionsType | undefined;
  color: string;
  rowGap: string;
};

export const TariffActionsList = ({
  actions,
  color,
  rowGap,
}: TariffActionsListProps) => {
  return (
    <List
      sx={{
        display: 'flex',
        flexDirection: 'column',
        rowGap: rowGap,
        p: '0',
      }}
    >
      {actions?.map((action) => (
        <ListItem key={action} sx={{ p: '0' }}>
          <ListItemIcon
            sx={{
              alignSelf: 'flex-start',
              pt: '5px',
              minWidth: '36px',
            }}
          >
            <CheckIcon sx={{ color: color }} />
          </ListItemIcon>
          <ListItemText sx={{ p: '0' }}>
            <Typography
              sx={{ lineHeight: 'normal' }}
              variant="body2"
              color={color}
            >
              {action}
            </Typography>
          </ListItemText>
        </ListItem>
      ))}
    </List>
  );
};
