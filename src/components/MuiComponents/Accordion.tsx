import * as React from 'react';
import Accordion from '@mui/material/Accordion';
import AccordionSummary from '@mui/material/AccordionSummary';
import AccordionDetails from '@mui/material/AccordionDetails';
import Typography from '@mui/material/Typography';

interface AccordionProps {
    title: string;
    text: string;
    grau: string;
  }
  
  const AccordionSuspects = (props: AccordionProps) => {

    const { title, text,grau } = props;

  return (
    <div>
      <Accordion 
      sx={{ 
        backgroundColor: "#d9dddc",
        minWidth: 80,
        width: 300,
        textAlign: "left",
        alignItems: "center",
        position: "relative",
        marginBottom: 1,
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
    </div>
  );
  }

export default AccordionSuspects;