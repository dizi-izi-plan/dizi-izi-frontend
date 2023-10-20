import Box from '@mui/material/Box';
import Container from '@mui/material/Container';
import Stack from '@mui/material/Stack';
import Typography from '@mui/material/Typography';
import Link from '@mui/material/Link';
import Image from 'next/image';
import { Cookie } from '@/components/Cookie/Cookie';
import { Steps } from '@/components/Step/Steps';
import { FAQ } from '@/components/FAQ/FAQ';
import { TariffSection } from '@/components/TariffSection/TariffSection';
import { EmailCopyLink } from '@/components/EmailCopyLink/EmailCopyLink';
import { StartButton } from '../components/StartButton/StartButton';

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
              spacing={7}
              mt={18}
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

              <StartButton />
            </Stack>

            <Stack
              id="about"
              width="100%"
              flexDirection="column"
              alignItems="center"
              spacing={13}
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
                spacing={5.5}
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
              spacing={13}
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
              width="100%"
              flexDirection="column"
              alignItems="center"
              spacing={13}
            >
              <Typography
                variant="h2"
                color="secondary.contrastText"
                alignSelf="flex-start"
              >
                ТАРИФЫ
              </Typography>
              <TariffSection />
            </Stack>

            <Stack id="faq" flexDirection="column" spacing={13}>
              <Typography
                variant="h2"
                color="secondary.contrastText"
                alignSelf="flex-start"
              >
                F.A.Q.
              </Typography>

              <FAQ />
            </Stack>

            <Box>
              <Stack id="contacts" flexDirection="column" spacing={8}>
                <Typography variant="h2" color="secondary.contrastText">
                  НАШИ КОНТАКТЫ
                </Typography>

                <Stack flexDirection="column" alignItems="center" spacing={2.5}>
                  <Link href="https://telegram.org/" target="_blank">
                    <Image
                      src="/assets/icons/telegramIcon.svg"
                      alt="Telegram icon link"
                      width={44}
                      height={44}
                    />
                  </Link>
                  <EmailCopyLink />
                </Stack>
              </Stack>
            </Box>
          </Stack>
        </Container>
        <Box
          mt={15}
          sx={{
            textAlign: 'center',
            borderTop: `1px solid #fff`,
            padding: '32px 0 32px',
          }}
        >
          <footer>
            <Typography
              variant="body1"
              color="secondary.contrastText"
              sx={{ fontWeight: '200' }}
            >
              © 2023 All rights reserved
            </Typography>
          </footer>
        </Box>
      </Box>
    </main>
  );
}
