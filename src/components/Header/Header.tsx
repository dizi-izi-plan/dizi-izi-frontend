'use client';

import { useAppSelector } from '@/redux/hooks';
import { useRouter } from 'next/navigation';
import Avatar from '@mui/material/Avatar';
import Box from '@mui/material/Box';
import Link from '@mui/material/Link';
import Stack from '@mui/material/Stack';
import Typography from '@mui/material/Typography';
import AppLogo from '../../../public/assets/icons/app_logo.svg';
import UserLogo from '../../../public/assets/icons/user_logo.svg';
import { useGetUserDataQuery } from '@/redux/slices/api-slice';
import { selectIsAuth, selectUserData } from '@/redux/slices/user-slice';
import { routes } from '@/helpers/common-constants/routes-constants';

const headerLinksData = [
  { label: 'о нас', href: '/#about' },
  { label: 'инструкция', href: '/#instruction' },
  { label: 'тарифы', href: '/#tariffs' },
  { label: 'f.a.q.', href: '/#faq' },
  { label: 'контакты', href: '/#contacts' },
];

export const Header = () => {
  const isAuth = useAppSelector(selectIsAuth);
  const userData = useAppSelector(selectUserData);
  const router = useRouter();
  useGetUserDataQuery('');

  return (
    <header>
      <Box
        sx={{
          width: '100%',
          backgroundColor: 'primary.contrastText',
        }}
      >
        <Box
          sx={{
            maxWidth: '1120px',
            width: '80%',
            padding: '15px 0px',
            margin: '0 auto',
          }}
        >
          <Stack
            direction="row"
            justifyContent="space-between"
            alignItems="center"
          >
            <Link href="#" onClick={() => router.push(routes.home)}>
              <AppLogo />
            </Link>
            <Stack
              direction="row"
              justifyContent="space-between"
              alignItems="center"
              spacing={5}
            >
              {headerLinksData.map((linkData) => (
                <Link
                  href="#"
                  onClick={() => router.push(linkData.href)}
                  key={linkData.label}
                  variant="m"
                >
                  {linkData.label}
                </Link>
              ))}
            </Stack>
            <Link
              sx={{ borderRadius: '50%', textDecoration: 'none' }}
              onClick={
                isAuth ? () => router.push(routes.personalAccount) : undefined
              }
              href="#"
            >
              <Avatar>
                {userData.email ? (
                  <Typography variant="subtitle1">
                    {userData.email[0].toUpperCase()}
                  </Typography>
                ) : (
                  <UserLogo />
                )}
              </Avatar>
            </Link>
          </Stack>
        </Box>
      </Box>
    </header>
  );
};
