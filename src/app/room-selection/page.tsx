import Typography from '@mui/material/Typography';
import Stack from '@mui/material/Stack';
import { ArrowBackButton } from '@/components/Buttons/ArrowBackButton/ArrowBackButton';
import { LargeBoxButtonLink } from '@/components/LargeBoxButtonLink/LargeBoxButtonLink';
import { PageContainer } from '@/containers/PageContainer/PageContainer';
import { routes } from '@/helpers/common-constants/routes-constants';

const rooms = [
  {
    title: 'Спальня',
    href: routes.personalAccount,
    disabled: false,
  },
  {
    title: 'Детская',
    href: routes.personalAccount,
    disabled: true,
  },
  { title: 'Кухня', href: routes.personalAccount, disabled: true },
  {
    title: 'Гостиная',
    href: routes.personalAccount,
    disabled: true,
  },
  {
    title: 'Санузел',
    href: routes.personalAccount,
    disabled: true,
  },
  {
    title: 'Кабинет',
    href: routes.personalAccount,
    disabled: true,
  },
  {
    title: 'Прихожая',
    href: routes.personalAccount,
    disabled: true,
  },
];

const RoomSelection = () => {
  return (
    <PageContainer color="black">
      <Stack rowGap="34px">
        <ArrowBackButton />
        <Stack direction="row" justifyContent="space-between">
          <Typography variant="h3" sx={{ margin: '0 auto' }}>
            Выбор помещения
          </Typography>
        </Stack>

        <Stack direction="row" columnGap="32px" rowGap="32px" flexWrap="wrap">
          {rooms.map(({ title, href, disabled }) => {
            return (
              <LargeBoxButtonLink
                key={title}
                href={href}
                title={title}
                isDisabled={disabled}
              />
            );
          })}
        </Stack>
      </Stack>
    </PageContainer>
  );
};

export default RoomSelection;
