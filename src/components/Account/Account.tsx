'use client';
import { useState, SyntheticEvent } from 'react';
import { useAppDispatch } from '@/redux/hooks';
import Tab from '@mui/material/Tab';
import Tabs from '@mui/material/Tabs';
import Box from '@mui/material/Box';
import MenuUnderlineIcon from '../../../public/assets/icons/account-menu-line.svg';
import { ACCOUNT_MENU_ITEMS } from './AccountSections/accountMenuSections.data';
import { TabContentContainer } from '../../containers/TabContentContainer/TabContentContainer';
import { AccountMenuItemsType } from './accountTypes';
import { a11yProps } from '../../containers/TabContentContainer/tabConstants';
import ModalIcon from '../../../public/assets/icons/modal_icon.svg';
import { ModalTwoButtons } from '@/components/Modal/ModalTwoButtons';
import { useLogoutMutation } from '@/redux/slices/auth-slice';
import { setCurrentModal } from '@/redux/slices/modal-slice';
import { useProtectedRoute } from '@/hooks/useProtectedRoute';
import { modalNames } from '@/helpers/common-constants/modal-constants';

export const Account = () => {
  useProtectedRoute();
  const dispatch = useAppDispatch();
  const [value, setValue] = useState<number>(0);

  const handleChange = (event: SyntheticEvent, newValue: number) => {
    setValue(newValue);
  };

  const returnUserToProfile = () => {
    setValue(2);
  };

  const [fetchLogout] = useLogoutMutation();

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
          onClick={() => dispatch(setCurrentModal(modalNames.modalLogout))}
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
        modalName={modalNames.modalLogout}
        text={['Вы уверены, что хотите выйти из профиля?']}
        icon={<ModalIcon width="75" height="126" />}
        handleYes={async () => await fetchLogout('').unwrap()}
        handleNo={returnUserToProfile}
        nameButtonYes="Да"
        nameButtonNo="Нет"
      />
    </>
  );
};
