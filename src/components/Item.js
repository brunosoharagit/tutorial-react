import PropTypes from "prop-types";

function Item({ marca, anoLancamento }) {
    return(
        <div>
            <li>{marca} - {anoLancamento}</li>
        </div>
    );
}


Item.propTypes = {
    marca: PropTypes.string,
    anoLancamento: PropTypes.number,
}

Item.defaultProps = {
    marca: "Faltou a marca",
    anoLancamento: 0,
}

export default Item;

//(opcional) inserindo o .isRequired -> faz com que o preenchimento da variável obrigatória.