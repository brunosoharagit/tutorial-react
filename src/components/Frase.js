import styles from '../modules/Frase.module.css';

function Frase() {
    return (
        <div className={styles.fraseContainer}>
            <p className={styles.fraseContent}>Este é um componente com uma frase aleatória.</p>
        </div>
    );
}

export default Frase;