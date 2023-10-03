import Box from '@mui/material/Box';
import Typography from '@mui/material/Typography';

type StepProps = {
  title: string;
  content: string;
};

const BOX_MINWIDTH = '300px';
const BOX_MAXWIDTH = '352px';
const BOX_HEIGHT = '216px';
const TEXT_WIDTH = '75%';

const BOX_STYLES = {
  position: 'relative',
  border: 1,
  borderColor: 'primary.main',
  maxWidth: BOX_MAXWIDTH,
  minWidth: BOX_MINWIDTH,
  height: BOX_HEIGHT,
  alignItems: 'center',
  justifyContent: 'center',
};

const TITLE_STYLES = {
  position: 'absolute',
  top: '-25px',
  left: '32px',
  pl: 1,
  pr: 2,
  backgroundColor: 'secondary.main',
};

export const Step = ({ title, content }: StepProps) => {
  return (
    <Box display="flex" sx={BOX_STYLES}>
      <Typography variant="h2" color="secondary.contrastText" sx={TITLE_STYLES}>
        {title}
      </Typography>
      <Typography
        variant="body1"
        color="secondary.contrastText"
        maxWidth={TEXT_WIDTH}
        sx={{ fontSize: '16px' }}
      >
        {content}
      </Typography>
    </Box>
  );
};
