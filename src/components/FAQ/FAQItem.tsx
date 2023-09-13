import * as React from 'react';
import Accordion from '@mui/material/Accordion';
import AccordionSummary from '@mui/material/AccordionSummary';
import AccordionDetails from '@mui/material/AccordionDetails';
import Typography from '@mui/material/Typography';
import ExpandCircleDownOutlinedIcon from '@mui/icons-material/ExpandCircleDownOutlined';
import  Box from '@mui/material/Box';

type FAQItemProps = {
  question: string,
  answer: string,
  index: number,
}

export const FAQItem = ({question, answer, index}: FAQItemProps) => {

  return (
    <Box mb={2}>
      <Accordion defaultExpanded square sx={{backgroundColor: 'transparent', boxShadow: 'none'}}>
        <AccordionSummary
          expandIcon={<ExpandCircleDownOutlinedIcon sx={{
            color: 'secondary.contrastText',
            fontSize: '2.5rem',
          }}/>}
          aria-controls={`${index}-content`}
          id={`${index}-header`}
        >
          <Typography variant='subtitle1' color="secondary.contrastText">{question}</Typography>
        </AccordionSummary>
        <hr />
        <AccordionDetails>
          <Typography variant='body1' color="secondary.contrastText">
            {answer}
          </Typography>
        </AccordionDetails>
      </Accordion>
    </Box>
  );
}
