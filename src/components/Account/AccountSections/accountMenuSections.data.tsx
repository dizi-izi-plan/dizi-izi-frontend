import { AccountSectionTemplate } from './AccountSectionTemplate';
import { MyTariff } from '../../Tariff/MyTariff';
import { AccountMenuItemsType } from '../accountTypes';
import { LargeBoxButtonLink } from '@/components/LargeBoxButtonLink/LargeBoxButtonLink';

export const ACCOUNT_MENU_ITEMS: AccountMenuItemsType[] = [
  {
    name: 'Планировки',
    component: (
      <LargeBoxButtonLink
        href="/personal-account/create-project"
        title="Создать проект"
        isDisabled={false}
      />
    ),
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
