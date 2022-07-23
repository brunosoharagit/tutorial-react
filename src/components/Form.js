import styles from '../modules/Form.module.css';
import { useState } from 'react';

function Form() {
  const cadastrarUsuario = (e) => {
    e.preventDefault();
    alert(`O Usuário ${name} foi cadastrado com a senha ${password} com sucesso!`);
  };
  
  //setName --> atribui o valor
  //name --> resgata aquele valor digitado
  const [name, setName] = useState();
  const [password, setPassword] = useState();

  return (
    <div className={styles.userForm}>
      <h1>Cadastro</h1>
      <form onSubmit={cadastrarUsuario}>
        <div className={styles.userInputs}>
          <label htmlFor="name">Nome: </label>
          <input
            type="text"
            id="name"
            name="name"
            placeholder="Seu nome."
            onChange={(e) => setName(e.target.value)}
          />
        </div>
        <div className={styles.userInputs}>
          <label htmlFor="password">Senha: </label>
          <input
            type="password"
            id="password"
            name="password"
            placeholder="Sua senha."
            onChange={(e) => setPassword(e.target.value)}
          />
        </div>
        <div className={styles.userButton}>
          <input type="submit" value="Cadastrar" />
        </div>
      </form>
    </div>
  );
}

export default Form;
