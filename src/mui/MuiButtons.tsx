import { IconButton, Stack } from '@mui/material';
import Button from '@mui/material/Button';

export default function MuiButtons() {
  return (
    <>
      <hr />
      <Stack
        direction="column"
        spacing={2}
        sx={{ backgroundColor: '#7a7a7a', padding: '20px' }}
      >
        <Stack direction="row" alignItems="center" spacing={2}>
          <h2>Default button:</h2>
          <Button variant="default" color="primary">
            Начать
          </Button>
          <Button variant="default" color="primary" disabled>
            Начать
          </Button>
          <Button variant="default" color="primary" sx={{ width: '302px' }}>
            Войти в личный кабинет
          </Button>
          <Button
            variant="default"
            color="primary"
            sx={{ width: '302px' }}
            disabled
          >
            Войти в личный кабинет
          </Button>
        </Stack>
        <Stack direction="row" alignItems="center" spacing={2}>
          <h2>Box button:</h2>
          <Button variant="box" color="primary">
            <svg
              width="19"
              height="18"
              viewBox="0 0 19 18"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                d="M16.5 0H2.5C1.39 0 0.5 0.9 0.5 2V16C0.5 17.1 1.39 18 2.5 18H16.5C17.6 18 18.5 17.1 18.5 16V2C18.5 0.9 17.6 0 16.5 0ZM16.5 16H2.5V2H16.5V16ZM8.5 14H10.5V10H14.5V8H10.5V4H8.5V8H4.5V10H8.5V14Z"
                fill="black"
              />
            </svg>
            <span>Спальня</span>
          </Button>
          <Button variant="box" color="primary" disabled>
            <svg
              width="19"
              height="18"
              viewBox="0 0 19 18"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                d="M16.5 0H2.5C1.39 0 0.5 0.9 0.5 2V16C0.5 17.1 1.39 18 2.5 18H16.5C17.6 18 18.5 17.1 18.5 16V2C18.5 0.9 17.6 0 16.5 0ZM16.5 16H2.5V2H16.5V16ZM8.5 14H10.5V10H14.5V8H10.5V4H8.5V8H4.5V10H8.5V14Z"
                fill="black"
              />
            </svg>
            <span>Спальня</span>
          </Button>
        </Stack>
        <Stack direction="row" alignItems="center" spacing={2}>
          <h2>Icon buttons:</h2>
          <IconButton>
            <svg
              width="22"
              height="22"
              viewBox="0 0 22 22"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                d="M21.6668 9.66634H5.44016L12.8935 2.21301L11.0002 0.333008L0.333496 10.9997L11.0002 21.6663L12.8802 19.7863L5.44016 12.333H21.6668V9.66634Z"
                fill="black"
              />
            </svg>
          </IconButton>
          <IconButton>
            <svg
              width="20"
              height="24"
              viewBox="0 0 20 24"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                d="M15.3337 8V21.3333H4.66699V8H15.3337ZM13.3337 0H6.66699L5.33366 1.33333H0.666992V4H19.3337V1.33333H14.667L13.3337 0ZM18.0003 5.33333H2.00033V21.3333C2.00033 22.8 3.20033 24 4.66699 24H15.3337C16.8003 24 18.0003 22.8 18.0003 21.3333V5.33333Z"
                fill="black"
              />
            </svg>
          </IconButton>
        </Stack>
      </Stack>
    </>
  );
}
