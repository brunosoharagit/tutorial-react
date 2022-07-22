//importação
import './App.css';
import HelloWorld from './components/HelloWorld';
import SaveMyName from './components/SaveMyName';
import Pessoa from './components/Pessoa';
import Frase from './components/Frase';
import List from './components/List';

function App() {
  const anyName = "Rodrigo";

  const example = {
    name: 'Bruno',
    age: 25,
    work: 'Desenvolvedor Front-End',
    photo: 'https://via.placeholder.com/225'
  }

  /**
   *  <HelloWorld />
      <SaveMyName name={anyName} />
   */

  return (
    <div className="App">
      <h1>Testando o CSS da aplicação.</h1>
      <Pessoa
        nome={example.name}
        idade={example.age}
        profissao={example.work}
        foto={example.photo}
      />
      <Frase />
      <List />
    </div>
  );
}

//exportação
export default App;
