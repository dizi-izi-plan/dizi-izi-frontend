'use client';

import { FC, useState } from 'react';
import Box from '@mui/material/Box';
import Button from '@mui/material/Button';
import Typography from '@mui/material/Typography';
import TextField from '@mui/material/TextField';
import RadioGroup from '@mui/material/RadioGroup';
import FormControlLabel from '@mui/material/FormControlLabel';
import Radio from '@mui/material/Radio';
import Checkbox from '@mui/material/Checkbox';
import Link from '@mui/material/Link';
import Stack from '@mui/material/Stack';
import { AutocompleteCities } from '@/components/SelectTextField/AutocompleteCities';
import { LocalDatePicker } from '@/components/LocalDatePicker/LocalDatePicker';
import { InputPassword } from '@/components/Input/InputPassword/InputPassword';
import {
  CLASS_NAMES_INPUT,
  CLASS_NAMES_LABEL,
} from '@/components/Input/classNameConstants';
import { ModalCommonTemplate } from '@/components/Modal/ModalCommonTemplate';
import { ModalTwoButtons } from '@/components/Modal/ModalTwoButtons';
import { ModalOneButton } from '@/components/Modal/ModalOneButton';
import ModalIcon from '../../../public/assets/icons/modal_icon.svg';
import {
  MODAL_YES_NO_QUESTIONS,
  MODAL_CONFIRM_QUESTIONS,
  MODAL_NOTICE,
} from '@/components/Modal/modal.data';
import { MuiButtons } from '@/mui/MuiButtons';

const DevPage: FC = () => {
  const [openYesNo, setOpenYesNo] = useState(false);
  const [openConfirm, setOpenConfirm] = useState(false);
  const [open, setOpen] = useState(false);

  return (
    <>
      <Typography color="myGrey.grey100" variant="h1">
        h1 grey100 #DEDEDE
      </Typography>
      <Typography color="myGrey.grey200" variant="h2">
        h2 Cabin 32px grey200 #D4D4D4
      </Typography>
      <Typography color="myGrey.grey300" variant="h3">
        h3 Cabin 24px grey300 rgba(61, 60, 60, 0.30)
      </Typography>
      <Typography color="myGrey.grey400" variant="subtitle1">
        subtitle1 Manrope 24px grey400 rgba(61, 60, 60, 0.50)
      </Typography>
      <Typography color="myGrey.grey500" variant="body1">
        body1 Manrope 20px grey500 #898989
      </Typography>
      <Typography color="myGrey.grey600" variant="body2">
        body2 Manrope 18px grey600 rgba(0, 0, 0, 0.60)
      </Typography>
      <Box>
        <Typography color="myGrey.grey700" variant="overline">
          overline Manrope 16px grey700 #464646
        </Typography>
      </Box>
      <Box>
        <Typography color="myGrey.grey800" variant="caption">
          caption Manrope 14px grey800 #3D3C3C
        </Typography>
      </Box>
      <Box bgcolor="secondary.main" color="secondary.contrastText">
        <Typography>NEW</Typography>
      </Box>
      <Box>
        <Button variant="contained" color="primary">
          primary
        </Button>
        <Button variant="contained" color="secondary">
          secondary
        </Button>
      </Box>
      <Box
        sx={{
          width: 462,
          backgroundColor: 'primary.contrastText',
          padding: '40px 20px',
          marginLeft: 10,
          display: 'flex',
          flexDirection: 'column',
          rowGap: '40px',
        }}
      >
        <TextField
          className={CLASS_NAMES_INPUT.dark}
          label={`TextField className="${CLASS_NAMES_INPUT.dark}"`}
        />
        <InputPassword
          className={CLASS_NAMES_INPUT.dark}
          label={`InputPassword className="${CLASS_NAMES_INPUT.dark}"`}
        />
      </Box>
      <Box
        sx={{
          width: 462,
          backgroundColor: 'secondary.contrastText',
          padding: '40px 20px',
          marginLeft: 10,
          display: 'flex',
          flexDirection: 'column',
          rowGap: '40px',
        }}
      >
        <TextField
          className={CLASS_NAMES_INPUT.light}
          label={`TextField className="${CLASS_NAMES_INPUT.light}"`}
          placeholder="Placeholder"
        />
        <InputPassword
          className={CLASS_NAMES_INPUT.light}
          label={`InputPassword className="${CLASS_NAMES_INPUT.light}" but label={null}`}
          placeholder="Текущий пароль"
        />
        <TextField
          className={CLASS_NAMES_INPUT.grey}
          placeholder={`TextField className="${CLASS_NAMES_INPUT.grey}"`}
        />
        <RadioGroup
          row
          aria-labelledby="demo-radio-buttons-group-label"
          defaultValue="До стены 1"
          name="radio-buttons-group"
        >
          <FormControlLabel
            className={CLASS_NAMES_LABEL.end}
            value="До стены 1"
            control={<Radio />}
            label="До стены 1"
          />
          <FormControlLabel
            className={CLASS_NAMES_LABEL.end}
            value="До стены 3"
            control={<Radio />}
            label="До стены 3"
          />
        </RadioGroup>
        <FormControlLabel
          className={CLASS_NAMES_LABEL.start}
          label="Я дизайнер интерьеров"
          control={<Checkbox />}
        />
      </Box>
      <Box
        sx={{
          width: 462,
          backgroundColor: 'primary.contrastText',
          padding: '10px 10px',
          marginLeft: 10,
          display: 'flex',
          flexDirection: 'column',
          rowGap: '10px',
        }}
      >
        <Link href="#" variant="m">
          link m - о нас
        </Link>
        <Link href="#" variant="s">
          link s - Забыли пароль
        </Link>
        <Link href="#" variant="xs">
          link xs - на обработку персональных данных
        </Link>
        <Link href="#" variant="linkButton">
          linkBottom - Регистрация
        </Link>
      </Box>
      <Box
        sx={{
          width: 462,
          backgroundColor: 'secondary.contrastText',
          padding: '10px 10px',
          marginLeft: 10,
          display: 'flex',
          flexDirection: 'column',
          rowGap: '40px',
        }}
      >
        <Link href="#" variant="linkHoverBold">
          linkHoverBold - Мой профиль
        </Link>
        <LocalDatePicker
          label="Дата рождения"
          className={CLASS_NAMES_INPUT.light}
        />
        <AutocompleteCities
          label="Город проживания"
          placeholder="Выберите город"
          className={CLASS_NAMES_INPUT.light}
        />
      </Box>
      <Typography>Открытие модалок:</Typography>
      <Stack direction="row" columnGap="20px">
        <Button
          variant="default"
          sx={{ color: 'black.main', p: '16px 54px' }}
          size="medium"
          onClick={() => setOpenYesNo(true)}
        >
          yes/no question
        </Button>
        <Button
          variant="default"
          sx={{ color: 'black.main', p: '16px 54px' }}
          size="medium"
          onClick={() => setOpenConfirm(true)}
        >
          confirm question
        </Button>
        <Button
          variant="default"
          sx={{ color: 'black.main', p: '16px 54px' }}
          size="medium"
          onClick={() => setOpen(true)}
        >
          без кнопок
        </Button>
      </Stack>
      <ModalTwoButtons
        text={MODAL_YES_NO_QUESTIONS[0]}
        isModalOpen={openYesNo}
        handleClose={() => setOpenYesNo(false)}
        icon={<ModalIcon />}
        nameButtonYes={'Да'}
        nameButtonNo={'Нет'}
      />
      <ModalOneButton
        text={MODAL_CONFIRM_QUESTIONS[0]}
        isModalOpen={openConfirm}
        handleClose={() => setOpenConfirm(false)}
        icon={<ModalIcon />}
        nameButton={'Продолжить'}
      />
      <ModalCommonTemplate
        text={MODAL_NOTICE[0]}
        isModalOpen={open}
        handleClose={() => setOpen(false)}
        icon={<ModalIcon />}
      />
      <MuiButtons />
    </>
  );
};

export default DevPage;
