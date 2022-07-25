function SeuNome({ setNome }) {
  return (
    <div>
    <p>Digite seu nome aqui:</p>
      <input
        type="text"
        name="name"
        placeholder="Qual seu nome?"
        onChange={(e) => setNome(e.target.value)}
      />
    </div>
  );
}

export default SeuNome;
