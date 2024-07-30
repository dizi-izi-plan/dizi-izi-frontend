'use client';

import { useAppSelector } from '@/redux/hooks';
import Link from 'next/link';
import Avatar from '@mui/material/Avatar';
import Box from '@mui/material/Box';
import { Link as MUILink } from '@mui/material';
import Stack from '@mui/material/Stack';
import Typography from '@mui/material/Typography';
import AppLogo from '../../../public/assets/icons/app_logo.svg';
import UserLogo from '../../../public/assets/icons/user_logo.svg';
import { useGetUserDataQuery } from '@/redux/slices/api-slice';
import { selectUserData } from '@/redux/slices/user-slice';
import { routes } from '@/helpers/common-constants/routes-constants';
import { useAuth } from '@/hooks/useAuth';
import { ModalCommonTemplate } from '@/components/Modal/ModalCommonTemplate';

const headerLinksData = [
  { label: 'о нас', href: '/#about' },
  { label: 'инструкция', href: '/#instruction' },
  { label: 'тарифы', href: '/#tariffs' },
  { label: 'f.a.q.', href: '/#faq' },
  { label: 'контакты', href: '/#contacts' },
];

export const Header = () => {
  const isAuth = useAuth();
  const userData = useAppSelector(selectUserData);
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
            <MUILink href={routes.home} component={Link}>
              <AppLogo />
            </MUILink>
            <Stack
              direction="row"
              justifyContent="space-between"
              alignItems="center"
              spacing={5}
            >
              {headerLinksData.map((linkData) => (
                <MUILink
                  href={linkData.href}
                  component={Link}
                  key={linkData.label}
                  variant="m"
                >
                  {linkData.label}
                </MUILink>
              ))}
            </Stack>
            <MUILink
              sx={{ borderRadius: '50%', textDecoration: 'none' }}
              component={Link}
              href={isAuth ? routes.personalAccount : '#'}
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
            </MUILink>
          </Stack>
        </Box>
      </Box>
      <ModalCommonTemplate />
    </header>
  );
};
