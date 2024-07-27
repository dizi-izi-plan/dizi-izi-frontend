'use client';
import { useState, SyntheticEvent, useLayoutEffect } from 'react';
import { useRouter } from 'next/navigation';
import { useAppSelector } from '@/redux/hooks';
import Tab from '@mui/material/Tab';
import Tabs from '@mui/material/Tabs';
import Box from '@mui/material/Box';
import MenuUnderlineIcon from '../../../public/assets/icons/account-menu-line.svg';
import { ACCOUNT_MENU_ITEMS } from './AccountSections/accountMenuSections.data';
import { TabContentContainer } from '../../containers/TabContentContainer/TabContentContainer';
import { AccountMenuItemsType } from './accountTypes';
import { a11yProps } from '../../containers/TabContentContainer/tabConstants';
import { ModalTwoButtons } from '../Modal/ModalTwoButtons';
import ModalIcon from '../../../public/assets/icons/modal_icon.svg';
import { useLogoutMutation } from '@/redux/slices/api-slice';
import { selectIsAuth } from '@/redux/slices/user-slice';
import { routes } from '@/helpers/common-constants/routes-constants';

export const Account = () => {
  const router = useRouter();
  const isAuth = useAppSelector(selectIsAuth);

  const [value, setValue] = useState<number>(0);
  const [isModalOpen, setModalOpen] = useState<boolean>(false);

  const handleChange = (event: SyntheticEvent, newValue: number) => {
    setValue(newValue);
  };

  const returnUserToProfile = () => {
    setValue(2);
  };

  const [fetchLogout] = useLogoutMutation();

  useLayoutEffect(() => {
    if (!isAuth) router.push(routes.authRoutes.login);
  }, [isAuth, router]);

  return (
    <>
      <Tabs
        className="account"
        value={value}
        onChange={handleChange}
        aria-label="account-menu"
        orientation="vertical"
        sx={{ minWidth: '160px' }}
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
        <Tab
          label={<span className="tab__label">Выйти</span>}
          icon={<MenuUnderlineIcon />}
          iconPosition="bottom"
          onClick={() => setModalOpen(true)}
        />
      </Tabs>
      <Box width="76%">
        {ACCOUNT_MENU_ITEMS.map((item: AccountMenuItemsType, index: number) => (
          <TabContentContainer key={index} value={value} index={index}>
            {item.component}
          </TabContentContainer>
        ))}
      </Box>
      <ModalTwoButtons
        isModalOpen={isModalOpen}
        text={['Вы уверены, что хотите выйти из профиля?']}
        icon={<ModalIcon width="75" height="126" />}
        handleClose={() => setModalOpen(false)}
        handleYes={async () => await fetchLogout('').unwrap()}
        handleNo={returnUserToProfile}
        nameButtonYes="Да"
        nameButtonNo="Нет"
      />
    </>
  );
};
