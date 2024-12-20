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
        <Link
          href="https://oauth.vk.com/authorize?client_id=52833862&redirect_uri=https://diziizi.ru/vk-oauth2/&scope=email&response_type=code&v=5.131"
          // href="https://id.vk.com/authorize?response_type=code&client_id=52833862"
          target="_blank"
        >
          <Image
            src="/assets/icons/vkIcon.svg"
            alt="VK icon link"
            width={44}
            height={44}
          />
        </Link>
        <Link
          href="https://oauth.yandex.ru/authorize?response_type=code&client_id=1906945ec70c4d00ab922601f73d7516&"
          target="_blank"
        >
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
