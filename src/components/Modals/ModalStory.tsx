import * as React from 'react';
import Box from '@mui/material/Box';
import Typography from '@mui/material/Typography';
import Modal from '@mui/material/Modal';
import { getMdiIcon } from '../../icons/getMdiIcon';

const style = {
  position: 'absolute',
  top: '50%',
  left: '50%',
  transform: 'translate(-50%, -50%)',
  width: {xs: 200,sm: 400, me: 600, lg: 800},
  height: 600,
  bgcolor: 'background.paper',
  border: '3px solid #000',
  boxShadow: 12,
  p: 6,
  overflowY: 'auto',
};

interface ModalProps {
    title: string;
    text: string;
    mdiIcon: string;
}

function ModalStory(props: ModalProps) {
  const [open, setOpen] = React.useState(false);
  const handleOpen = () => setOpen(true);
  const handleClose = () => setOpen(false);

    const { title, text, mdiIcon} = props;
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
        <Typography id="modal-modal-title" variant="h6" component="h2">
          {title}
        </Typography>
        <Typography
          id="modal-modal-description"
          variant="h6"
          component="h3"
          sx={{ mt: 2, wordWrap: 'break-word', whiteSpace: 'pre-line' }}
        >
          {text}
        </Typography>
      </Box>
    </Modal>
  </Box>
  );
}

export default ModalStory;
