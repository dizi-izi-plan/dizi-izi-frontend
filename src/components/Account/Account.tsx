'use client';
import { useState } from 'react';
import Tab from '@mui/material/Tab';
import Tabs from '@mui/material/Tabs';
import Box from '@mui/material/Box';
import MenuUnderlineIcon from '../../../public/assets/icons/account-menu-line.svg';
import { ACCOUNT_MENU_ITEMS } from './AccountSections/accountMenuSections.data';
import { AccountSectionContainer } from '@/components/Account/AccountSections/AccountSectionContainer';
import { a11yPropsFuncType, AccountMenuItemsType } from './accoutTypes';

export const Account = () => {
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
    <>
      <Tabs
        value={value}
        onChange={handleChange}
        aria-label="account-menu"
        orientation="vertical"
      >
        {ACCOUNT_MENU_ITEMS.map((item: AccountMenuItemsType, index: number) => (
          <Tab
            key={index}
            label={<span className="tab__label">{item.name}</span>} //обертка в span, чтобы задать исключительно тексту z-index
            {...a11yProps(index)}
            icon={<MenuUnderlineIcon />}
            iconPosition="bottom"
          />
        ))}
      </Tabs>
      <Box width="74%">
        {ACCOUNT_MENU_ITEMS.map((item: AccountMenuItemsType, index: number) => (
          <AccountSectionContainer key={index} value={value} index={index}>
            {item.component}
          </AccountSectionContainer>
        ))}
      </Box>
    </>
  );
};
