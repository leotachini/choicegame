import './App.css';
import ModalMission from './components/Modals/ModalMission';
import ModalRespostas from './components/Modals/ModalRespostas';
import ModalStory from './components/Modals/ModalStory';
import ModalSuspeitos from './components/Modals/ModalSuspeitos';


function App() {

  const perguntas = ["Quem foi assassinado?", "Qual a arma do crime?", "Quem é o assassino?", "Onde foi o crime?", "Qual foi o motivo do crime?"]
  const historia = "vrefvvoindworgvipvklvfdslvsmdlvksflvkmsflkvdslkvrefvvoindworgvipvklvfdslvsmdlvksflvkmsflkvdslkvrefvvoindworgvipvklvfdslvsmdlvksflvkmsflkvdslk";

  return (
    <>
      <header>
        <h2 id='textoEscolha'>História</h2>
      </header>
      <h2 id='textoEscolha'>Faça sua escolha</h2>
      <div className='icones'>
        
        <ModalStory mdiIcon='BookOpenPageVariant' title='História' text={historia} />

        <ModalMission mdiIcon='FormatListBulleted' title='Missões' text='Nesse jogo você tem o objetivo de responder as seguintes perguntas, caso todas sejam respondidas corretamente 
        você receberá a conclusão da história' mission={perguntas}/>

        <ModalSuspeitos mdiIcon='CardAccountDetails' title='Personagens' />

        <ModalMission mdiIcon='Magnify' title='Evidências' text='O jogo possui 5 evidências, sendo que cada uma delas possui uma habilidade especial.'/>

        <ModalRespostas mdiIcon='Help' title='Respostas'/>
      </div>
    </>
  );
}

export default App;
