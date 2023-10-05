'use client';
import { useState } from 'react';
import Stack from '@mui/material/Stack';
import Tab from '@mui/material/Tab';
import Tabs from '@mui/material/Tabs';
import Box from '@mui/material/Box';
import MenuUnderlineIcon from '../../../public/assets/icons/account-menu-line.svg';
import { ACCOUNT_MENU_ITEMS } from '../../components/AccountSections/accountMenuSections.data';
import { AccountSectionContainer } from '@/components/AccountSections/AccountSectionContainer';
import { a11yPropsFuncType } from '../../components/AccountMenu/accoutMenuTypes';

const PersonalAccount = () => {
  const [value, setValue] = useState(0);

  const handleChange = (event: React.SyntheticEvent, newValue: number) => {
    setValue(newValue);
  };

  const a11yProps: a11yPropsFuncType = (index: number) => {
    return {
      id: `simple-tab-${index}`,
      'aria-controls': `simple-tabpanel-${index}`,
    };
  };

  return (
    <Stack
      minHeight="calc(100vh - 90px)"
      flexDirection="row"
      p="44px 0 0"
      width="80%"
      columnGap="128px"
      m="0 auto 0"
      maxWidth="1120px"
    >
      <Tabs
        value={value}
        onChange={handleChange}
        aria-label="account-menu"
        orientation="vertical"
      >
        {ACCOUNT_MENU_ITEMS.map((item, index) => (
          <Tab
            key={index}
            label={item.name}
            {...a11yProps(index)}
            icon={<MenuUnderlineIcon />}
            iconPosition="bottom"
          />
        ))}
      </Tabs>
      <Box>
        {ACCOUNT_MENU_ITEMS.map((item, index) => (
          <AccountSectionContainer key={index} value={value} index={index}>
            {item.component}
          </AccountSectionContainer>
        ))}
      </Box>
    </Stack>
  );
};

export default PersonalAccount;
