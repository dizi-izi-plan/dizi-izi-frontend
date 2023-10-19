import { AccountSectionTemplate } from './AccountSectionTemplate';
import { MyTariff } from '../../Tariff/MyTariff';
import { AccountMenuItemsType } from '../accountTypes';

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
];
