import React from 'react';

const Contador = () => {

    const [ contador, setContador ] = React.useState(0);

    return (
        <React.Fragment>
            <h2>Contador</h2>
            <h3>nuestro número aumentado: { contador }</h3>
            <button onClick={ () => setContador( contador + 2 ) } 
            >Aumentar</button>
        </React.Fragment>
    );
};

export default Contador;
