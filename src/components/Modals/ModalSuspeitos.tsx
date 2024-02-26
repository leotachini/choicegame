import * as React from 'react';
import Box from '@mui/material/Box';
import Typography from '@mui/material/Typography';
import Modal from '@mui/material/Modal';
import { getMdiIcon } from '../../icons/getMdiIcon';
import AccordionSuspects from '../MuiComponents/AccordionSuspects';
import { listaSuspeitos } from '../../data';

const style = {
  position: 'absolute',
  top: '50%',
  left: '50%',
  transform: 'translate(-50%, -50%)',
  width: {sm: 400, me: 600, lg: 800},
  height: 600,
  bgcolor: 'background.paper',
  border: '2px solid #000',
  boxShadow: 24,
  p: 3,
  overflowY: 'auto',
  overflowX: 'hidden',
};

interface ModalProps {
    title: string | string[];
    mdiIcon: string;
}

function ModalSuspeitos(props: ModalProps) {
  const [open, setOpen] = React.useState(false);
  const handleOpen = () => setOpen(true);
  const handleClose = () => setOpen(false);

    const { title, mdiIcon} = props;
    const Icon = getMdiIcon(mdiIcon);

  return (
    <Box>
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
      <Box sx={{display: "flex", flexDirection: 'column', gap: 2 }}>
        <AccordionSuspects nome={listaSuspeitos[0].nome} text='conedlvfw' relacao={listaSuspeitos[0].relacao} />
        <AccordionSuspects nome={listaSuspeitos[1].nome} text='conedlvfw' relacao={listaSuspeitos[1].relacao} />
        <AccordionSuspects nome={listaSuspeitos[2].nome} text='conedlvfw' relacao={listaSuspeitos[2].relacao} />
        <AccordionSuspects nome={listaSuspeitos[3].nome} text='conedlvfw' relacao={listaSuspeitos[3].relacao} />
        <AccordionSuspects nome={listaSuspeitos[4].nome} text='conedlvfw' relacao={listaSuspeitos[4].relacao} />
        <AccordionSuspects nome={listaSuspeitos[5].nome} text='conedlvfw' relacao={listaSuspeitos[5].relacao} />
        <AccordionSuspects nome={listaSuspeitos[6].nome} text='conedlvfw' relacao={listaSuspeitos[6].relacao} />
        </Box>
      </Box>
    </Modal>
  </Box>
  );
}

export default ModalSuspeitos;
