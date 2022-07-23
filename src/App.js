//importação
import './App.css';
import HelloWorld from './components/HelloWorld';
import SaveMyName from './components/SaveMyName';
import Pessoa from './components/Pessoa';
import Frase from './components/Frase';
import List from './components/List';
import Eventos from './components/Eventos';
import Form from "./components/Form";

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
      <Pessoa
        nome={example.name}
        idade={example.age}
        profissao={example.work}
        foto={example.photo}
      />
      <Frase />
      <List />
   */

  return (
    <div className="App">
      <h1>Testando o React Events.</h1>
      <Eventos/>
      <Form />
    </div>
  );
}

//exportação
export default App;
