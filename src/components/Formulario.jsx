import React from 'react';

const Formulario = () => {
    return (
        <div className="card">
            <div className="card-body">
                <h2>Formulario</h2>
                <form>
                    <div className="form-group">
                        <label htmlFor="">Fruta</label>
                        <input
                            className="form-control"
                            type="text"
                            placeholder="Ingrese Fruta"/>
                    </div>
                    <div className="form-group">
                        <label htmlFor="">Descripción</label>
                        <input
                            className="form-control"
                            type="text"
                            placeholder="Ingrese Descripción"/>
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
