import Box from '@mui/material/Box';
import Button from '@mui/material/Button';
import Typography from '@mui/material/Typography';

export default function MuiExamples() {
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
        body2 Manrope Manrope 18px grey600 rgba(0, 0, 0, 0.60)
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
      <Box>
        <Button variant="contained" color="primary">
          primary
        </Button>
        <Button variant="contained" color="secondary">
          secondary
        </Button>
      </Box>
    </>
  );
}
