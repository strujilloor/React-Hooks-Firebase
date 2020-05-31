import React from 'react';

const Variables = () => {
    const saludo = "Hola desde constante";
    const imagen = "https://www.promiau.com/static/img/img_blog/cuidados-basicos-para-gatitos-huerfanos.jpg";
    
    return (
        <>
            <h2>Variables { saludo }</h2>
            <img src={ imagen } alt="" width="200" />
        </>
    );
};

export default Variables;