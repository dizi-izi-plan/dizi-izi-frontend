import Box from '@mui/material/Box';
import Container from '@mui/material/Container';
import Stack from '@mui/material/Stack';
import Typography from '@mui/material/Typography';
import Button from '@mui/material/Button';
import { Cookie } from '@/components/Cookie/Cookie';
import { Steps } from '@/components/Step/Steps';
import { FAQ } from '@/components/FAQ/FAQ';

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

            <Stack
              id="about"
              flexDirection="column"
              alignItems="center"
              gap="104px"
              sx={{ width: '100%' }}
            >
              <Typography
                variant="h2"
                color="secondary.contrastText"
                alignSelf="flex-start"
              >
                О НАС
              </Typography>

              <Stack
                flexDirection="column"
                gap="44px"
                sx={{ maxWidth: '615px', textAlign: 'center' }}
              >
                <Typography variant="body1" color="secondary.contrastText">
                  <Box component="span" color="primary.main">
                    DIZI IZI{' '}
                  </Box>
                  - онлайн-платформа для проектирования интерьера.
                </Typography>

                <Typography variant="body1" color="secondary.contrastText">
                  Вы можете ввести параметры помещения, и наш инструмент создаст
                  план расстановки мебели, план электроточек и другие
                  необходимые схемы. Если решите не выбирать мебель, наш{' '}
                  <Box component="span" color="primary.main">
                    сервис подберет ее сам
                  </Box>
                  , исходя из параметров комнаты.
                </Typography>

                <Typography variant="body1" color="secondary.contrastText">
                  Сейчас сайт доступен только для планировки спальни.
                  Зарегистрированные пользователи могут{' '}
                  <Box component="span" color="primary.main">
                    сохранить
                  </Box>{' '}
                  в личном кабинете до трех планов.
                </Typography>

                <Typography variant="body1" color="secondary.contrastText">
                  Сайт работает в{' '}
                  <Box component="span" color="primary.main">
                    тестовом режиме
                  </Box>{' '}
                  и предоставляется бесплатно с ограничениями по количеству
                  сохраненных комбинаций.
                </Typography>
              </Stack>
            </Stack>

            <Stack
              id="instruction"
              flexDirection="column"
              alignItems="center"
              gap="104px"
            >
              <Typography
                variant="h2"
                color="secondary.contrastText"
                alignSelf="flex-start"
              >
                ИНСТРУКЦИЯ
              </Typography>

              <Steps />
            </Stack>

            <Stack
              id="tariffs"
              flexDirection="column"
              alignItems="center"
              gap="104px"
            >
              <Typography
                variant="h2"
                color="secondary.contrastText"
                alignSelf="flex-start"
              >
                ТАРИФЫ
              </Typography>
              {/*TARIFFS WILL BE HERE*/}
            </Stack>

            <Stack id="faq" flexDirection="column" gap="104px">
              <Typography
                variant="h2"
                color="secondary.contrastText"
                alignSelf="flex-start"
              >
                F.A.Q.
              </Typography>

              <FAQ />
            </Stack>
          </Stack>
        </Container>
      </Box>
    </main>
  );
}
