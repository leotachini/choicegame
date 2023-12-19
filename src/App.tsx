import './App.css';
import BasicModal from './components/Modal';
import ModalStory from './components/ModalStory';
import ModalSuspeitos from './components/ModalSuspeitos';


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

        <BasicModal mdiIcon='FormatListBulleted' title='Missões' text='Nesse jogo você tem o objetivo de responder as seguintes perguntas, caso todas sejam respondidas corretamente 
        você receberá a conclusão da história' mission={perguntas}/>

        <ModalSuspeitos mdiIcon='CardAccountDetails' title='Personagens' />

        <BasicModal mdiIcon='Magnify' title='Evidências' text='O jogo possui 5 evidências, sendo que cada uma delas possui uma habilidade especial.'/>

        <BasicModal mdiIcon='Help' title='Respostas' text='Insira aqui as respostas das missões.'/>
      </div>
    </>
  );
}

export default App;
