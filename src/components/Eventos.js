import PropTypes from 'prop-types';

function Eventos({ numero = 0 }) {
    const meuEvento = () => {
        console.log(`Fui ativado!! Número ${numero}`);
        numero++;
    }

    return (
        <div>
            <p>Cluqie para disparar o evento:</p>
            <button onClick={meuEvento}>Ativar!</button>
        </div>
    );
}

Eventos.propTypes = {
    numero: PropTypes.number,
}

export default Eventos;