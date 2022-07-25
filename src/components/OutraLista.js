function OutraLista({ items }) {
  return (
    <>
      <h3>Lista de clãs: </h3>
      {items.length > 0 ? (items.map((items, index) => <p key={index}>{items}</p>)) : (<p> Não há itens na lista.</p>)}
    </>
  );
}

export default OutraLista;
