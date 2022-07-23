import Item from "./Item";

function List() {
  return (
    //fragmentação
    <>
      <h1>Minha Lista</h1>
      <h1>
        <ul>
          <Item marca="Ferrari" anoLancamento={1985} />
          <Item marca="Audi" anoLancamento={1964} />
          <Item marca="Ferrari" anoLancamento={1999} />
          <Item marca="Audi" anoLancamento={1914} />
          <Item marca="Lamborghini" />
          <Item marca="Tesla" anoLancamento="2004" />
        </ul>
      </h1>
    </>
  );
}

export default List;
