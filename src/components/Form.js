function Form() {

    const cadastratUsuario = (e) => {
        e.preventDefault();
        console.log("Usuário cadastrado com sucesso!");
    }

    return(
        <div>
            <h1>Cadastro</h1>
            <form onSubmit={cadastratUsuario}>
                <div>
                    <input type="text" placeholder="Seu nome."/>
                </div>
                <div>
                    <input type="submit" value="Cadastrar"/>
                </div>
            </form>
        </div>
    );
}

export default Form;