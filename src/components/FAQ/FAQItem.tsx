'use client';

import * as React from 'react';
import Accordion from '@mui/material/Accordion';
import AccordionSummary from '@mui/material/AccordionSummary';
import AccordionDetails from '@mui/material/AccordionDetails';
import Typography from '@mui/material/Typography';
import ExpandMoreIcon from '@mui/icons-material/ExpandMore';
import  Box from '@mui/material/Box';
import { styled } from '@mui/material/styles';

type FAQItemProps = {
  question: string,
  answer: string,
  index: number,
}

const CustomExpandIcon = styled(ExpandMoreIcon)({
  border: '1px solid #FFF',
  borderRadius: '50%',
  color: '#FFF',
  fontSize: '2.5rem',
});

export default function FAQItem({question, answer, index}: FAQItemProps) {

  return (
    <Box mb={2}>
      <Accordion defaultExpanded square sx={{backgroundColor: 'transparent', boxShadow: 'none'}}>
        <AccordionSummary
          expandIcon={<CustomExpandIcon />}
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
