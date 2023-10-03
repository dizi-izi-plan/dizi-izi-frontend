import Stack from '@mui/material/Stack';
import Box from '@mui/material/Box';
import Typography from '@mui/material/Typography';
import Link from '@mui/material/Link';
import Image from 'next/image';

export const ServicesLinks = () => {
  return (
    <Stack gap={4}>
      <Typography variant="body2" color="secondary.contrastText">
        Войти с помощью сервиса
      </Typography>
      <Box display="flex" justifyContent="center" gap={8}>
        <Link href="https://vk.com/" target="_blank">
          <Image
            src="/assets/icons/vkIcon.svg"
            alt="VK icon link"
            width={44}
            height={44}
          />
        </Link>
        <Link href="https://yandex.ru/" target="_blank">
          <Image
            src="/assets/icons/yandexIcon.svg"
            alt="Yandex icon link"
            width={44}
            height={44}
          />
        </Link>
      </Box>
    </Stack>
  );
};
