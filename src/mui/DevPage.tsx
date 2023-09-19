import { FC } from 'react';
import Box from '@mui/material/Box';
import Button from '@mui/material/Button';
import Typography from '@mui/material/Typography';
import TextField from '@mui/material/TextField';
import RadioGroup from '@mui/material/RadioGroup';
import FormControlLabel from '@mui/material/FormControlLabel';
import Radio from '@mui/material/Radio';
import Checkbox from '@mui/material/Checkbox';
import Link from '@mui/material/Link';
import { InputPassword } from '../components/Input/InputPassword/InputPassword';
import { LocalDatePicker } from '../components/LocalDatePicker/LocalDatePicker';
import {
  CLASS_NAMES_INPUT,
  CLASS_NAMES_LABEL,
} from '@/components/Input/classNameConstants';
import { Cookie } from '@/components/Cookie/Cookie';
import { Step } from '@/components/Step/Step';
import { steps } from '@/components/Step/steps.data';
import { FAQ } from '@/components/FAQ/FAQ';
import { TariffSection } from '@/components/TariffSection/TariffSection';

export const DevPage: FC = () => {
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
      </Box>
      <Cookie />
      <Box sx={{ backgroundColor: 'secondary.main', p: 5 }}>
        <Step title={steps[0].title} content={steps[0].content} />
      </Box>
      <Box
        sx={{
          backgroundColor: 'primary.contrastText',
          p: 5,
        }}
      >
        <FAQ></FAQ>
      </Box>
      <Box sx={{ width: '100%', backgroundColor: 'primary.contrastText' }}>
        <TariffSection />
      </Box>
    </>
  );
};
