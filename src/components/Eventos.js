import PropTypes from 'prop-types';
import Button from './events/Button';

function Eventos() {
    const meuEvento = () => {
        console.log(`Fui ativado!`);
    }

    function segundoEvento() {
        console.log("Ativando o segundo elemento");
    }

    return (
        <div>
            <p>Cluqie para disparar o evento:</p>
            <Button event={meuEvento} text="Primeiro Evento"/>
            <Button event={segundoEvento} text="Segundo Evento"/>
            <button onClick={meuEvento}>Ativar!</button>
        </div>
    );
}

Eventos.propTypes = {
    numero: PropTypes.number,
}

export default Eventos;