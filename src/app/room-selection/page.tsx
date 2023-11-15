import Typography from '@mui/material/Typography';
import Stack from '@mui/material/Stack';
import { ArrowBackButton } from '@/components/ArrowBackButton/ArrowBackButton';
import { LargeBoxButtonLink } from '@/components/LargeBoxButtonLink/LargeBoxButtonLink';
import { PageContainer } from '@/containers/PageContainer/PageContainer';

const rooms = [
  {
    title: 'Спальня',
    href: '/personal-account',
    disabled: false,
  },
  {
    title: 'Детская',
    href: '/personal-account',
    disabled: true,
  },
  { title: 'Кухня', href: '/personal-account', disabled: true },
  {
    title: 'Гостиная',
    href: '/personal-account',
    disabled: true,
  },
  {
    title: 'Санузел',
    href: '/personal-account',
    disabled: true,
  },
  {
    title: 'Кабинет',
    href: '/personal-account',
    disabled: true,
  },
  {
    title: 'Прихожая',
    href: '/personal-account',
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
