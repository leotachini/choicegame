import './App.css';
import ModalMission from './components/Modals/ModalMission';
import ModalRespostas from './components/Modals/ModalRespostas';
import ModalStory from './components/Modals/ModalStory';
import ModalSuspeitos from './components/Modals/ModalSuspeitos';
import ModalMapa from './components/Modals/ModalMapa';
import ModalEvidencias from './components/Modals/ModalEvidencias';
import { Typography } from '@mui/material';
import Box from '@mui/material/Box';
import { perguntas } from './data';


function App() {

  const historia = "Tudo começou com uma festa de reencontro de um grupo de amigos do ensino médio, que estão há alguns anos sem se ver, a festa ocorreu na casa de Rodrigo e Mara, o casal perfeito, e nela compareceram, Juliano, o irmão de Mara, Lucas, melhor amigo de Rodrigo e seu sócio acompanhado de sua esposa Mariana, que era a única que não fazia parte do grupo de amigos, Amanda que era a melhor amiga de Mara e estava grávida e os irmãos Lima que vieram de outro estado porém no meio da noite Rodrigo foi morto por algum dos convidados, e eles não estão dispostos a cooperar, pois todos assim que puderam acionaram seus advogados, então o máximo que a polícia teve acesso foi apenas um depoimento de cada um dos suspeitos sobre o que aconteceu naquele fatídica noite.";

  return (
    <>
      <header>
        <Typography id='textoEscolha' variant='h2'>História</Typography>
      </header>
      <Box className='icones' sx={{ 
  display: 'grid',
  gridTemplateColumns: {
    md: 'repeat(3, 13rem)',  // 3 colunas em telas médias
  },
}}>
  <ModalStory mdiIcon='BookOpenPageVariant' title='História' text={historia} />
  <ModalMission mdiIcon='FormatListBulleted' title='Objetivos' text='Nesse jogo você tem o objetivo de responder as seguintes perguntas com base nas evidências,mapa do local onde o crime ocorreu e depoimentos de suspeitos, caso todas sejam respondidas corretamente você receberá a conclusão da história' mission={perguntas}/>
  <ModalSuspeitos mdiIcon='CardAccountDetails' title='Suspeitos' />
  <ModalEvidencias mdiIcon='Magnify' title='Evidências'/>
  <ModalMapa mdiIcon='Map' title='Mapa do Local' />
  <ModalRespostas mdiIcon='Help' title='Respostas'/>
</Box>
    </>
  );
}

export default App;
