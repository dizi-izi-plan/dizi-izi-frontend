import Typography from '@mui/material/Typography';
import Stack from '@mui/material/Stack';
import { ArrowBackButton } from '@/components/ArrowBackButton/ArrowBackButton';
import { LargeBoxButtonLink } from '@/components/LargeBoxButtonLink/LargeBoxButtonLink';

const rooms = [
  { title: 'Спальня', href: '/personal-account', disabled: false },
  { title: 'Детская', href: '/personal-account', disabled: true },
  { title: 'Кухня', href: '/personal-account', disabled: true },
  { title: 'Гостиная', href: '/personal-account', disabled: true },
  { title: 'Санузел', href: '/personal-account', disabled: true },
  { title: 'Кабинет', href: '/personal-account', disabled: true },
  { title: 'Прихожая', href: '/personal-account', disabled: true },
];

const RoomSelection = () => {
  return (
    <Stack
      minHeight="calc(100vh - 90px)"
      p="44px 0 0"
      m="0 auto"
      width="80%"
      maxWidth="1120px"
      rowGap="34px"
    >
      <Stack direction="row" justifyContent="space-between">
        <ArrowBackButton />

        <Typography variant="h3" sx={{ margin: '0 auto' }}>
          Выбор помещения
        </Typography>
      </Stack>

      <Stack direction="row" columnGap="32px" rowGap="32px" flexWrap="wrap">
        {rooms.map(({ title, href, disabled }) => {
          return (
            <LargeBoxButtonLink
              href={href}
              title={title}
              isDisabled={disabled}
            />
          );
        })}
      </Stack>
    </Stack>
  );
};

export default RoomSelection;
