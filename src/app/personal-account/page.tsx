'use client';
import { useState } from 'react';
import Stack from '@mui/material/Stack';
import Tab from '@mui/material/Tab';
import Tabs from '@mui/material/Tabs';
import Box from '@mui/material/Box';
import Typography from '@mui/material/Typography';

const PersonalAccount = () => {
  const [value, setValue] = useState(0);

  const handleChange = (event: React.SyntheticEvent, newValue: number) => {
    setValue(newValue);
  };

  function a11yProps(index: number) {
    return {
      id: `simple-tab-${index}`,
      'aria-controls': `simple-tabpanel-${index}`,
    };
  }

  return (
    <Stack
      minHeight="calc(100vh - 90px)"
      flexDirection="row"
      p="44px 160px 0"
      columnGap="92px"
    >
      <Tabs
        value={value}
        onChange={handleChange}
        aria-label="account-menu"
        orientation="vertical"
      >
        <Tab label="Планировки" {...a11yProps(0)} />
        <Tab label="Мой тариф" {...a11yProps(1)} />
        <Tab label="Профиль" {...a11yProps(2)} />
        <Tab label="Выйти" {...a11yProps(3)} />
      </Tabs>
      <Box>
        <AccountPage value={value} index={0}>
          <Typography>Планировки</Typography>
        </AccountPage>
        <AccountPage value={value} index={1}>
          <Typography>Мой тариф</Typography>
        </AccountPage>
        <AccountPage value={value} index={2}>
          <Typography>Профиль</Typography>
        </AccountPage>
        <AccountPage value={value} index={3}>
          <Typography>Выйти</Typography>
        </AccountPage>
      </Box>
    </Stack>
  );
};

export default PersonalAccount;

interface AccountPageProps {
  children?: React.ReactNode;
  index: number;
  value: number;
}

const AccountPage = ({ children, value, index }: AccountPageProps) => {
  return <Box hidden={value !== index}>{children}</Box>;
};
