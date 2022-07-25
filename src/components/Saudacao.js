function Saudacao({ nome }) {
  const gerarSaudacao = (algumNome) => {
    return `Olá, ${algumNome}. Tudo bem?`;
  };

  return (
    <>
      {nome && <p>{gerarSaudacao(nome)}</p>}
    </>
  );
}

export default Saudacao;
