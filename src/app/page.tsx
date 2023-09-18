import Box from '@mui/material/Box';
import Container from '@mui/material/Container';
import Stack from '@mui/material/Stack';
import Typography from '@mui/material/Typography';
import Button from '@mui/material/Button';
import { Cookie } from '@/components/Cookie/Cookie';

export default function Home() {
  return (
    <main>
      <Box
        sx={{
          backgroundColor: 'primary.contrastText',
        }}
      >
        <Container maxWidth="lg">
          <Cookie />
          <Stack flexDirection="column" alignItems="center" gap="264px">
            <Stack
              flexDirection="column"
              alignItems="center"
              gap="54px"
              sx={{ marginTop: '142px' }}
            >
              <Box>
                <Typography
                  variant="h1"
                  color="secondary.contrastText"
                  sx={{ letterSpacing: '17.28px' }}
                >
                  DIZI IZI
                </Typography>

                <Typography
                  variant="subtitle1"
                  color="secondary.contrastText"
                  sx={{ letterSpacing: '3px' }}
                >
                  онлайн-проектирование интерьера
                </Typography>
              </Box>
              <Button variant="default">Начать</Button>
            </Stack>
          </Stack>
        </Container>
      </Box>
    </main>
  );
}
