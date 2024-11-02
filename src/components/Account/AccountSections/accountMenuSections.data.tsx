'use client';

import { LayoutsContainer } from '@/containers/LayoutsContainer/LayoutsContainer';
import { MyTariff } from '../../Tariff/MyTariff';
import { AccountMenuItemsType } from '../accountTypes';
import { MyProfile } from './MyProfile';

export const ACCOUNT_MENU_ITEMS: AccountMenuItemsType[] = [
  {
    name: 'Планировки',
    component: <LayoutsContainer />,
  },
  {
    name: 'Мой тариф',
    component: <MyTariff />,
  },
  {
    name: 'Профиль',
    component: <MyProfile />,
  },
];
