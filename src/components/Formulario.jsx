import React, { useState } from 'react';

const Formulario = () => {

    const [fruta, setFruta] = useState('');
    const [descripcion, setDescripcion] = useState('');

    const guardarDatos = (e) => {
        e.preventDefault();
        // comprueba si el campo está vacío
        if ( !fruta.trim() ) {
            console.log('campo fruta vacío');
            return;
        }
        if ( !descripcion.trim() ) {
            console.log('campo descripcion vacío');
            return;
        }
        console.log(`Procesando datos... ${fruta} ${descripcion}`);
    }

    return (
        <div className="card">
            <div className="card-body">
                <h2>Formulario</h2>
                <form onSubmit={ guardarDatos }>
                    <div className="form-group">
                        <label htmlFor="">Fruta</label>
                        <input
                            className="form-control"
                            type="text"
                            placeholder="Ingrese Fruta"
                            onChange={ ( e ) => setFruta( e.target.value ) }/>
                    </div>
                    <div className="form-group">
                        <label htmlFor="">Descripción</label>
                        <input
                            className="form-control"
                            type="text"
                            placeholder="Ingrese Descripción"
                            onChange={ ( e ) => setDescripcion( e.target.value ) }/>
                    </div>
                    <button 
                        className="btn btn-primary btn-block"
                        type="submit"
                    >Agregar</button>
                </form>
            </div>
        </div>
    );
};

export default Formulario;
