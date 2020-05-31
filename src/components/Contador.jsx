import React from 'react';

const Contador = () => {

    const [ contador, setContador ] = React.useState(0);

    return (
        <React.Fragment>
            <h2>Contador</h2>
            <h3>nuestro número aumentado: { contador }</h3>
            <h4>
                {
                    contador > 4 ? 'Es mayor a 4' : 
                        contador === 4 ? 'Es 4' : 'Es menor a 4'
                }
            </h4>
            <button onClick={ () => setContador( contador + 2 ) } 
            >Aumentar</button>
        </React.Fragment>
    );
};

export default Contador;
