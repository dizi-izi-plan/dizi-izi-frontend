import { FC } from 'react';
import Grid from '@mui/material/Grid';
import Typography from '@mui/material/Typography';
import List from '@mui/material/List';
import ListItem from '@mui/material/ListItem';
import ListItemText from '@mui/material/ListItemText';
import ListItemIcon from '@mui/material/ListItemIcon';
import CheckIcon from '@mui/icons-material/Check';

type TariffInfo = {
  name: string;
  description: string;
  actions: string[];
};

export const Tariff: FC<TariffInfo> = ({ name, description, actions }) => {
  return (
    <Grid item xs={4}>
      <Typography variant="h2" color="secondary.contrastText">
        {name}
      </Typography>
      <Typography variant="body2" color="secondary.contrastText">
        {description}
      </Typography>
      <Typography variant="h3" color="secondary.contrastText">
        Вам доступны
      </Typography>
      <List>
        {actions.map((tariff) => (
          <ListItem key={tariff}>
            <ListItemIcon>
              <CheckIcon sx={color: 'secondary.contrastText', width: 24, height: 24 } />
            </ListItemIcon>
            <ListItemText></ListItemText>
          </ListItem>
        ))}
      </List>
    </Grid>
  );
};
