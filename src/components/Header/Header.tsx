'use client';

import Avatar from '@mui/material/Avatar';
import Box from '@mui/material/Box';
import Link from '@mui/material/Link';
import Stack from '@mui/material/Stack';
import AppLogo from '../../../public/assets/icons/app_logo.svg';
import UserLogo from '../../../public/assets/icons/user_logo.svg';

const headerLinksData = [
  { label: 'о нас', href: '/#about' },
  { label: 'инструкции', href: '/#instruction' },
  { label: 'тарифы', href: '/#tariffs' },
  { label: 'f.a.q.', href: '/#faq' },
  { label: 'контакты', href: '/#contacts' },
];

export const Header = () => {
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
            <Link href="/">
              <AppLogo />
            </Link>
            <Stack
              direction="row"
              justifyContent="space-between"
              alignItems="center"
              spacing={5}
            >
              {headerLinksData.map((linkData) => (
                <Link href={linkData.href} key={linkData.label} variant="m">
                  {linkData.label}
                </Link>
              ))}
            </Stack>
            <Link href="#" sx={{ borderRadius: '50%' }} variant="m">
              <Avatar>
                <UserLogo />
              </Avatar>
            </Link>
          </Stack>
        </Box>
      </Box>
    </header>
  );
};
