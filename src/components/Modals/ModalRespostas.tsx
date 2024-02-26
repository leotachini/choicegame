import { useState } from 'react';
import Box from '@mui/material/Box';
import Typography from '@mui/material/Typography';
import Modal from '@mui/material/Modal';
import { getMdiIcon } from '../../icons/getMdiIcon';
import Autocomplete from '@mui/material/Autocomplete'; // Corrigido
import Button from '@mui/material/Button';
import { TextField } from '@mui/material';
import { armaCrime, motivoCrime, locaisCrime, listaSuspeitos} from '../../data';

const style = {
  position: 'absolute',
  top: '50%',
  left: '50%',
  transform: 'translate(-50%, -50%)',
  width: {xs:300,sm: 400, me: 600, lg: 800},
  height: 600,
  bgcolor: 'background.paper',
  border: '3px solid #000',
  boxShadow: 12,
  p:6,
  overflowY: 'auto',
  display: 'grid',
};

interface ModalProps {
  title: string;
  mdiIcon: string;
}

const ModalRespostas = (props: ModalProps) => {
  const [open, setOpen] = useState(false);
  const handleOpen = () => setOpen(true);
  const handleClose = () => setOpen(false);

  const { title, mdiIcon } = props;
  const Icon = getMdiIcon(mdiIcon);

  const [cena, setCena] = useState("")
  const [killer, setKiller] = useState("")
  const [arma, setArma] = useState("")
  const [local, setLocal] = useState("")
  const [motivo, setMotivo] = useState("")

  const handleSubmit = (e: any) => {
    e.preventDefault();
    if (cena === locaisCrime[5] && killer === listaSuspeitos[4].nome && arma === armaCrime[3] && local === locaisCrime[13] && motivo === motivoCrime[6]) {
      alert("Você desvendou o crime! Parabéns detetive, o mundo precisa de mais pessoas como você 😉")
    }
  else if(motivo === "Mistério sem Solução" &&  local === cena){
     alert("Tem solução sim, você só precisa confiar em si mesmo🤞🤞, mas aí vai uma dica, o local onde ocorreu o crime e onde o corpo foi encontrado são diferentes")
  }
    else{
      alert('Você não desvendou o crime, tente novamente!')
    }
  };

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
          <form onSubmit={handleSubmit}>
            <Autocomplete
            sx={{mt: 2}}
              options={locaisCrime}
              onChange={(event, value) => setCena(value ?? '')}
              renderInput={(params) => (
                <TextField {...params} label="Em que lugar estava o corpo?" variant="outlined" />
              )}
            />
            <Autocomplete
            sx={{mt: 2}}
              options={armaCrime}
              onChange={(event, value) => setArma(value ?? '')}
              renderInput={(params) => (
                <TextField {...params} label="Qual foi a arma do crime?" variant="outlined" />
              )}
            />
            <Autocomplete
            sx={{mt: 2}}
              options={locaisCrime}
              onChange={(event, value) => setLocal(value ?? '')}
              renderInput={(params) => (
                <TextField {...params} label="Em que cômodo ocorreu o crime?" variant="outlined" />
              )}
            />
            <Autocomplete
            sx={{mt: 2}}
              options={motivoCrime}
              onChange={(event, value) => setMotivo(value ?? '')}
              renderInput={(params) => (
                <TextField {...params} label="Qual o motivo do crime?" variant="outlined" />
              )}
            />
            <Autocomplete
            sx={{mt: 2}}
              options={listaSuspeitos.map(suspeito => suspeito.nome)}
              onChange={(event, value) => setKiller(value ?? '')}
              renderInput={(params) => (
                <TextField {...params} label="Quem é o assassino?" variant="outlined" />
              )}
            />
            <Button type="submit" variant="contained" color="primary" sx={{ marginTop: 2 }} size='large'>
              Enviar
            </Button>
          </form>
        </Box>
      </Modal>
    </Box>
  );
}

export default ModalRespostas;
