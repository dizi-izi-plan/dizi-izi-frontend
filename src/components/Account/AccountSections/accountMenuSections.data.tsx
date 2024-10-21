'use client';

import { AccountSectionTemplate } from './AccountSectionTemplate';
import { MyTariff } from '../../Tariff/MyTariff';
import { AccountMenuItemsType } from '../accountTypes';
import { LayoutsContainer } from '@/containers/LayoutsContainer/LayoutsContainer';

export const ACCOUNT_MENU_ITEMS: AccountMenuItemsType[] = [
  {
    name: 'Планировки',
    component: <LayoutsContainer />,
  },
  {
    name: 'Мой тариф',
    component: <MyTariff />, // при верстке нужного компонента - заменить
  },
  {
    name: 'Профиль',
    component: <AccountSectionTemplate />, // при верстке нужного компонента - заменить
  },
];
