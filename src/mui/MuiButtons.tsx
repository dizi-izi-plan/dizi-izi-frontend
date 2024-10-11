import Stack from '@mui/material/Stack';
import Button from '@mui/material/Button';
import AddBoxOutlinedIcon from '@mui/icons-material/AddBoxOutlined';
import ArrowBackOutlinedIcon from '@mui/icons-material/ArrowBackOutlined';
import { PopperMessage } from '@/components/Popper/PopperMessage';

export const MuiButtons = () => {
  return (
    <>
      <hr />
      <Stack
        direction="column"
        spacing={2}
        sx={{ backgroundColor: '#7a7a7a', padding: '20px' }}
      >
        <Stack
          direction="row"
          alignItems="center"
          spacing={2}
          sx={{ flexWrap: 'wrap' }}
        >
          <h2>Default button:</h2>
          <span>color:primary</span>
          <Button variant="default" size="small">
            Small
          </Button>
          <span>color:secondary</span>
          <Button variant="default" size="medium" color="secondary">
            Medium
          </Button>
          <Button variant="default" size="large">
            Large
          </Button>
          <Button variant="default" size="large" disabled>
            Войти в личный кабинет
          </Button>
        </Stack>
        <Stack direction="row" alignItems="center" spacing={2}>
          <h2>Box button:</h2>
          <Button variant="box" size="small">
            1
          </Button>
          <Button variant="box" size="small" color="secondary">
            <ArrowBackOutlinedIcon />
          </Button>
          <Button variant="box" size="large" startIcon={<AddBoxOutlinedIcon />}>
            Large
          </Button>
          <Button
            variant="box"
            size="large"
            startIcon={<AddBoxOutlinedIcon />}
            disabled
          >
            <span>Спальня</span>
          </Button>
        </Stack>
        <Stack direction="row" alignItems="center" spacing={2}>
          <h2>Popper:</h2>
          <PopperMessage tip="back">
            <Button variant="empty">
              <ArrowBackOutlinedIcon />
            </Button>
          </PopperMessage>
        </Stack>
      </Stack>
    </>
  );
};
