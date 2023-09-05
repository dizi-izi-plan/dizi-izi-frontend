import { FC } from 'react';
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

//TODO:
// 1. remove box margins
// 2. change text color to secondary.contrastText
// 3. change title backgroundColor

export const Step: FC<StepProps> = ({
  title,
  content
}) => {
  const boxStyles = {
    position: 'relative',
    border: 1,
    borderColor: 'primary.main',
    maxWidth: BOX_MAXWIDTH,
    minWidth: BOX_MINWIDTH,
    height: BOX_HEIGHT,
    alignItems: 'center',
    justifyContent: 'center',
    m: '100px',
  }

  const titleStyles = {
    position: 'absolute',
    top: '-25px',
    left: '32px',
    pl: 1,
    pr: 2,
    backgroundColor: 'white',
  }

  return (
    <Box
    display='flex'
    sx={boxStyles}>
      <Typography variant='h2' color='secondary' sx={titleStyles}>{ title }</Typography>
      <Typography variant='body1' color='secondary' maxWidth={TEXT_WIDTH}>{ content } </Typography>
    </Box>
  );
};