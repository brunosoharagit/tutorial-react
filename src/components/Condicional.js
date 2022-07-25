import { useState } from 'react';
import styles from '../modules/Frase.module.css';

function Condicional() {

    const [email, setEmail] = useState();
    const [userEmail, setUserEmail] = useState();

    const sendEmail = (e) => {
        e.preventDefault();
        setUserEmail(email);
        console.log(userEmail);
    }

    const resetEmail = () => {
        setUserEmail();
    }

    return(
        <div>
            <h2>Cadastre seu e-mail:</h2>
            <form>
                <label htmlFor='email'>E-mail: </label>
                <input type='email' id='email' name='email' placeholder='digite seu melhor e-mail' onChange={(e) => setEmail(e.target.value)}/>
            </form>
            <button type='submit' onClick={sendEmail}> Enviar E-mail </button>
            {userEmail && (
                <div className={styles.fraseContent}>
                    <p>E-mail cadastrado: {userEmail}</p>
                    <button onClick={resetEmail}> Limpar </button>
                </div>
            )}
        </div>
    );
}

export default Condicional;

/*
//lógica 'if' sucinta do react
//enquanto for verdadeira, irá mostrar o componente
{userEmail && (
    <div className={styles.fraseContent}>
        <p>E-mail cadastrado: {userEmail}</p>
        <button onClick={resetEmail}> Limpar </button>
    </div>
)}



*/