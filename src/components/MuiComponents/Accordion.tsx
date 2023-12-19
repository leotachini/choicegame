import * as React from 'react';
import Accordion from '@mui/material/Accordion';
import AccordionSummary from '@mui/material/AccordionSummary';
import AccordionDetails from '@mui/material/AccordionDetails';
import Typography from '@mui/material/Typography';
//import { Box } from '@mui/material';

interface AccordionProps {
    title: string;
    text: string;
    grau: string;
  }
  
  const AccordionSuspects = (props: AccordionProps) => {

    const { title, text, grau } = props;

  return (
   
      <Accordion 
      sx={{ 
        backgroundColor: "#d9dddc",
        minWidth: 80,
        width: 600,
        textAlign: "left",
        alignItems: "center",
        position: "relative",
        wordWrap: 'break-word',
        whiteSpace: 'pre-line',
        borderRadius: "0px",
        }}
        >
        <AccordionSummary aria-controls="panel1d-content" id="panel1d-header">
          <Typography sx={{fontWeight: "bold"}}>{title}</Typography>
        </AccordionSummary>
        <AccordionDetails>
        <Typography>{grau}</Typography>
          <Typography>
            {text}
          </Typography>
        </AccordionDetails>
      </Accordion>
  );
  }

export default AccordionSuspects;