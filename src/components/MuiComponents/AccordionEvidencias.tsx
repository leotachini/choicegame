import * as React from 'react';
import Accordion from '@mui/material/Accordion';
import AccordionSummary from '@mui/material/AccordionSummary';
import AccordionDetails from '@mui/material/AccordionDetails';
import Typography from '@mui/material/Typography';
import { ReactNode } from 'react';


interface AccordionProps {
    title: string;
    dados: string;
    children?: ReactNode;
  }
  
  const AccordionEvidencias = (props: AccordionProps) => {

    const { title, dados, children } = props;

  return (
   
      <Accordion 
      sx={{ 
        backgroundColor: "#d9dddc",
        minWidth: 200,
        width: {sm: 400, me: 550, lg: 800},
        textAlign: "left",
        alignItems: "center",
        position: "relative",
        wordWrap: 'break-word',
        whiteSpace: 'pre-line',
        }}
        >
        <AccordionSummary aria-controls="panel1d-content" id="panel1d-header">
          <Typography sx={{fontWeight: "bold"}}>{title}</Typography>
        </AccordionSummary>
        <AccordionDetails>
        <Typography>{dados}</Typography>
          {children}
        </AccordionDetails>
      </Accordion>
  );
  }

export default AccordionEvidencias;