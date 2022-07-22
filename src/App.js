//importação
import './App.css';
import HelloWorld from './components/HelloWorld';
import SaveMyName from './components/SaveMyName';
import Pessoa from './components/Pessoa';


function App() {
  const anyName = "Rodrigo";

  const example = {
    name: 'Bruno',
    age: 25,
    work: 'Desenvolvedor Front-End',
    photo: 'https://via.placeholder.com/225'
  }

  return (
    <div className="App">
    <HelloWorld />
      <SaveMyName name="Bruno"/>
      <SaveMyName name="Maria"/>
      <SaveMyName name={anyName}/>
      <Pessoa nome={example.name} idade={example.age} profissao={example.work} foto={example.photo}/>
    </div>
  );
}

//exportação
export default App;
