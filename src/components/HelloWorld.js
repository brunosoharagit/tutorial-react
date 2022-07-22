//reutilização de componentes --> importa um componente dentro de um outro
import Frase from './Frase';

function HelloWorld() {
  return (
    <div>
      <h1>My first component</h1>
      <Frase />
    </div>
  );
}

export default HelloWorld;
