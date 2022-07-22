import Item from './Item';

function List(){
    return(
      //fragmentação
      <>
      <h1>Minha Lista</h1>
        <h1>
            <ul>
                <Item marca="Ferrari"/>
                <Item marca="Audi"/>
                <Item marca="Ferrari"/>
                <Item marca="Audi"/>
            </ul>
        </h1>
      </>

    );
}

export default List;