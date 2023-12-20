import React, { useState } from 'react';
import Box from '@mui/material/Box';
import Typography from '@mui/material/Typography';
import Modal from '@mui/material/Modal';
import { getMdiIcon } from '../../icons/getMdiIcon';
import Autocomplete from '@mui/material/Autocomplete'; // Corrigido
import Button from '@mui/material/Button';
import { TextField } from '@mui/material';

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
  overflowY: 'auto',
};

interface ModalProps {
  title: string;
  mdiIcon: string;
}

const ModalRespostas = (props: ModalProps) => {
  const [open, setOpen] = React.useState(false);
  const handleOpen = () => setOpen(true);
  const handleClose = () => setOpen(false);

  const { title, mdiIcon } = props;
  const Icon = getMdiIcon(mdiIcon);

const armaCrime = ["Faca", "Revolver", "Veneno", "Defenestração", "Cinto", "Corda", "Pá", "Espada", "Bastão", "Machado", "Foice", "Caco de Vidro", "Martelo", "Travesseiro", "Estátua", "Afogamento"];
const motivoCrime = ["Ciúmes","Herança", "Amor Não Correspondido", "Dívida Financeira", "Conspiração", "Rivalidade Profissional", "Segredo Obscuro", "Vingança", "Desespero", "Acidente", "Mistério Inexplicável", "Ambição Desmedida", "Obcessão", "Erro de Identidade", "Traição"];
const locaisCrime = ["Sala de Estar", "Cozinha", "Salão de Festas", "Biblioteca", "Sala de Jantar", "Jardim", "Sala de Jogos", "Conservatório", "Hall de Entrada", "Escritório", "Observatório", "Sótão", "Piscina", "Varanda", "Quarto", "Praia", "Telhado"];
const listaSuspeitos = ["Ana Silva", "Rodrigo Santos", "Juliana Oliveira", "Lucas Pereira", "Isabela Souza", "Rafael Martins", "Camila Lima", "Guilherme Almeida", "Mariana Costa", "Thiago Rocha", "Amanda Santos"];

  const [vitima, setVitima] = useState("");
  const [killer, setKiller] = useState("")
  const [arma, setArma] = useState('')
  const [local, setLocal] = useState('')
  const [motivo, setMotivo] = useState('')

  const handleSubmit = (e: any) => {
    e.preventDefault();
    if (vitima === "Ana Silva" && killer === "Guilherme Almeida" && arma === "Faca" && local === "Quarto" && motivo === "Vingança") {
      alert("Você desvendou o crime! Parabéns detetive, o mundo precisa de mais pessoas como você 😉")
    }
    else{
      alert('Você não desvendou o crime, tente novamente!')
    }
  };

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
          <form onSubmit={handleSubmit}>
            <Autocomplete
            sx={{mt: 2}}
              options={listaSuspeitos}
              onChange={(event, value) => setVitima(value ?? '')}
              renderInput={(params) => (
                <TextField {...params} label="Quem é a vítima?" variant="outlined" />
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
                <TextField {...params} label="Em que lugar ocorreu o crime?" variant="outlined" />
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
              options={listaSuspeitos}
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
    </div>
  );
}

export default ModalRespostas;
