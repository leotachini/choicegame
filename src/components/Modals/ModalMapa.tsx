import * as React from 'react';
import Box from '@mui/material/Box';
import Typography from '@mui/material/Typography';
import Modal from '@mui/material/Modal';
import Button from '@mui/material/Button';
import { getMdiIcon } from '../../icons/getMdiIcon';
import Legenda from '../../img/legenda.jpg';
import Andar1 from '../../img/1andar.png';
import Andar2 from '../../img/2andar.png';
import { Circle } from "mdi-material-ui"

const style = {
  position: 'absolute',
  top: '50%',
  left: '50%',
  transform: 'translate(-50%, -50%)',
  width: {xs:300 ,sm: 400, me: 600, lg: 800},
  height: 600,
  bgcolor: 'background.paper',
  border: '3px solid #000',
  boxShadow: 12,
  p: 6,
  overflowY: 'auto',
};

interface ModalProps {
    title: string;
    mdiIcon: string;
}

function ModalMapa(props: ModalProps) {
  const [open, setOpen] = React.useState(false);
  const handleOpen = () => setOpen(true);
  const handleClose = () => setOpen(false);
  const [mapaTroca, setMapaTroca] = React.useState(false);

    const { title, mdiIcon} = props;
    const Icon = getMdiIcon(mdiIcon);

  return (
    <Box >
      <Icon sx={{width: 100, height: 100, padding: 2}} onClick={handleOpen}>{title}</Icon>
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
          <Typography id="modal-modal-title" variant="h6" textAlign="center">
            {title}
          </Typography>
          <Typography id="modal-modal-title" variant="h6" textAlign="center">
          {!mapaTroca ? "Primeiro andar" : "Segundo andar"}
          </Typography>
         
          {/* <img src={Legenda} alt="Legenda" style={{ width: '100%', height: 'auto', maxWidth: '400px', maxHeight: '400px' }} /> */}
          {!mapaTroca && <img src={Andar1} alt="1Andar" style={{ width: '100%', height: 'auto', maxWidth: '800px', maxHeight: '700px' }} />}
          {mapaTroca && <img src={Andar2} alt="2Andar" style={{ width: '100%', height: 'auto', maxWidth: '800px', maxHeight: '700px' }} />}
        <Box sx={{display:"flex"}}>
        <Button variant="contained" sx={{fontSize:"10px"}} onClick={() => setMapaTroca(!mapaTroca)}>{!mapaTroca ? "Ir ao segundo andar" : "Ir ao primeiro andar"}</Button>
        <Typography id="modal-modal-title" variant="h6" textAlign="center">
          O que está em cor laranja <Circle sx={{color: "#fc944b"}}/> representa uma porta o que está em cor azul <Circle sx={{color:"#5ee4ec"}}/> uma janela e em preto <Circle/> uma parede ou uma limitação
          </Typography>
        </Box>
        </Box>
      </Modal>
    </Box>
  );
}

export default ModalMapa;
