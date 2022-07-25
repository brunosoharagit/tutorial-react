//importação
import "./App.css";
import { useState } from "react";
import HelloWorld from "./components/HelloWorld";
import SaveMyName from "./components/SaveMyName";
import Pessoa from "./components/Pessoa";
import Frase from "./components/Frase";
import List from "./components/List";
import Eventos from "./components/Eventos";
import Form from "./components/Form";
import Condicional from "./components/Condicional";
import OutraLista from "./components/OutraLista";
import SeuNome from "./components/SeuNome";
import Saudacao from "./components/Saudacao";

function App() {
  const anyName = "Rodrigo";

  const example = {
    name: "Bruno",
    age: 25,
    work: "Desenvolvedor Front-End",
    photo: "https://via.placeholder.com/225",
  };

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

      <h1>Testando o React Events.</h1>
      <Eventos/>
      <Form />
      <Condicional/>

      const clans = ['Solaria', 'Dinastiarune', 'The Outlander', 'RunePedia'];

      <OutraLista items={clans}/>
      <OutraLista items={[]}/>
   */

  const [nome, setNome] = useState();

  return (
    <div className="App">
      <h1>State Lift</h1>
      <SeuNome setNome={setNome}/>
      <Saudacao nome={nome} />
    </div>
  );
}

//exportação
export default App;
