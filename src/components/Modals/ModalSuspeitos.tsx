import * as React from 'react';
import Box from '@mui/material/Box';
import Typography from '@mui/material/Typography';
import Modal from '@mui/material/Modal';
import { getMdiIcon } from '../../icons/getMdiIcon';
import AccordionSuspects from '../MuiComponents/Accordion';

const style = {
  position: 'absolute',
  top: '50%',
  left: '50%',
  transform: 'translate(-50%, -50%)',
  width: 600,
  height: 600,
  bgcolor: 'background.paper',
  border: '2px solid #000',
  boxShadow: 24,
  p: 4,
  overflowY: 'auto'
};

interface ModalProps {
    title: string;
    mdiIcon: string;
}

function ModalSuspeitos(props: ModalProps) {
  const [open, setOpen] = React.useState(false);
  const handleOpen = () => setOpen(true);
  const handleClose = () => setOpen(false);

    const { title, mdiIcon} = props;
    const Icon = getMdiIcon(mdiIcon);

  return (
    <div>
    <Icon sx={{ width: 100, height: 100, padding: 2 }} onClick={handleOpen}>
      {title}
    </Icon>
    <Typography onClick={handleOpen} variant="h6" component="h2">
      {title}
    </Typography>
    <Modal
      open={open}
      onClose={handleClose}
      aria-labelledby="modal-modal-title"
      aria-describedby="modal-modal-description"
    >
      <Box sx={style}>
      <Box sx={{display: "flex", flexDirection: 'column', gap: 2}}>
        <AccordionSuspects title='Ana Silva' text="dd" grau='Dona da Casa' />
        <AccordionSuspects title='Rodrigo Santos' text="vnofvnfoidubvn" grau='Anfitrião' />
        <AccordionSuspects title='Juliana Oliveira' text="vnofvnfoidubvn" grau='Advogada' />
        <AccordionSuspects title='Lucas Pereira' text="vnofvnfoidubvn" grau='Engenheiro' />
        <AccordionSuspects title='Izabela Souza' text="vnofvnfoidubvn" grau='Médica' />
        <AccordionSuspects title='Rafael Martins' text="vnofvnfoidubvn" grau='Funcionário Público' />
        <AccordionSuspects title='Camila Lima' text="vnofvnfoidubvn" grau='Empresária' />
        <AccordionSuspects title='Guilherme Almeida' text="vnofvnfoidubvn" grau='Administrador' />
        <AccordionSuspects title='Thiago Rocha' text="vnofvnfoidubvn" grau='Técnico de TI' />
        <AccordionSuspects title='Amanda Santos' text="vnofvnfoidubvn" grau='Dentista e Esposa de Rodrigo' />
        </Box>
      </Box>
    </Modal>
  </div>
  );
}

export default ModalSuspeitos;
