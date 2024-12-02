'use client';

import Avatar from '@mui/material/Avatar';
import Box from '@mui/material/Box';
import Stack from '@mui/material/Stack';
import Typography from '@mui/material/Typography';
import AppLogo from '../../../public/assets/icons/app_logo.svg';
import UserLogo from '../../../public/assets/icons/user_logo.svg';
import { useGetUserDataQuery } from '@/redux/slices/user-slice';
import { routes } from '@/helpers/common-constants/routes-constants';
import { useAuth } from '@/hooks/useAuth';
import { CustomLink } from '@/components/Link/CustomLink';

const headerLinksData = [
  { label: 'о нас', href: '/#about' },
  { label: 'инструкция', href: '/#instruction' },
  { label: 'тарифы', href: '/#tariffs' },
  { label: 'f.a.q.', href: '/#faq' },
  { label: 'контакты', href: '/#contacts' },
];

export const Header = () => {
  const isAuth = useAuth();
  const { data } = useGetUserDataQuery('');
  console.log(data);

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
            <CustomLink href={routes.home}>
              <AppLogo />
            </CustomLink>
            <Stack
              direction="row"
              justifyContent="space-between"
              alignItems="center"
              spacing={5}
            >
              {headerLinksData.map((linkData) => (
                <CustomLink
                  href={linkData.href}
                  key={linkData.label}
                  variant="m"
                >
                  {linkData.label}
                </CustomLink>
              ))}
            </Stack>
            <CustomLink
              sx={{ borderRadius: '50%', textDecoration: 'none' }}
              href={isAuth ? routes.personalAccount : routes.authRoutes.login}
            >
              <Avatar>
                {data?.email ? (
                  <Typography variant="subtitle1">
                    {data.email[0].toUpperCase()}
                  </Typography>
                ) : (
                  <UserLogo />
                )}
              </Avatar>
            </CustomLink>
          </Stack>
        </Box>
      </Box>
    </header>
  );
};
