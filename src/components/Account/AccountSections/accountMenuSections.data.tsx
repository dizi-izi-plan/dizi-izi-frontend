import { ReactNode } from 'react';
import { AccountSectionTemplate } from './AccountSectionTemplate';
import { MyTariff } from '../../Tariff/MyTariff';

export type AccountMenuItemsType = {
  name: string;
  component: ReactNode | null;
};

export const ACCOUNT_MENU_ITEMS: AccountMenuItemsType[] = [
  {
    name: 'Планировки',
    component: <AccountSectionTemplate name="Планировки" />, // при верстке нужного компонента - заменить
  },
  {
    name: 'Мой тариф',
    component: <MyTariff />, // при верстке нужного компонента - заменить
  },
  {
    name: 'Профиль',
    component: <AccountSectionTemplate name="Профиль" />, // при верстке нужного компонента - заменить
  },
  {
    name: 'Выйти',
    component: <AccountSectionTemplate name="Выйти" />, // при верстке нужного компонента - заменить
  },
];
