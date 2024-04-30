import React, { createContext } from 'react'

export const ViewContext = () => {

    const personalData = createContext();

    const data = { nombre: 'Cristian', edad: 25 }
    return (
        <div> {data}</div>


    );
};

export default ViewContext
