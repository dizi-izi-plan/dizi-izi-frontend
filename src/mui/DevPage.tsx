import {
  Box,
  Button,
  Typography,
  TextField,
  RadioGroup,
  FormControlLabel,
  Radio,
  Checkbox,
  Link,
} from '@mui/material';
import { InputPassword } from '../components/InputPassword/InputPassword';
import { classNamesInput, classNamesLabel } from '@/helpers/classNameConstants';

export const DevPage = () => {
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
          backgroundColor: 'black.main',
          padding: '40px 20px',
          marginLeft: 10,
          display: 'flex',
          flexDirection: 'column',
          rowGap: '40px',
        }}
      >
        <TextField
          className={classNamesInput.dark}
          label={`TextField className="${classNamesInput.dark}"`}
        />
        <InputPassword
          variant={classNamesInput.dark}
          label={`InputPassword className="${classNamesInput.dark}"`}
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
          className={classNamesInput.light}
          label={`TextField className="${classNamesInput.light}"`}
          placeholder="Placeholder"
        />
        <InputPassword
          variant={classNamesInput.light}
          label={`InputPassword className="${classNamesInput.light}" but label={null}`}
          placeholder="Текущий пароль"
        />
        <TextField
          className={classNamesInput.gray}
          placeholder={`TextField className="${classNamesInput.gray}"`}
        />
        <RadioGroup
          row
          aria-labelledby="demo-radio-buttons-group-label"
          defaultValue="До стены 1"
          name="radio-buttons-group"
        >
          <FormControlLabel
            className={classNamesLabel.end}
            value="До стены 1"
            control={<Radio />}
            label="До стены 1"
          />
          <FormControlLabel
            className={classNamesLabel.end}
            value="До стены 3"
            control={<Radio />}
            label="До стены 3"
          />
        </RadioGroup>
        <FormControlLabel
          className={classNamesLabel.start}
          label="Я дизайнер интерьеров"
          control={<Checkbox />}
        />
      </Box>
      <Box
        sx={{
          width: 462,
          backgroundColor: 'black.main',
          padding: '10px 10px',
          marginLeft: 10,
          display: 'flex',
          flexDirection: 'column',
          rowGap: '10px',
        }}
      >
        <Link href="#" variant="linkSizeM">
          linkSizeM
        </Link>
        <Link href="#" variant="linkSizeS">
          linkSizeS - Забыли пароль
        </Link>
        <Link href="#" variant="linkSizeXS">
          linkSizeXS - на обработку персональных данных
        </Link>
        <Link href="#" variant="linkBottom">
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
          rowGap: '10px',
        }}
      >
        <Link href="#" variant="linkHoverBold">
          linkHoverBold - Мой профиль
        </Link>
      </Box>
    </>
  );
};
