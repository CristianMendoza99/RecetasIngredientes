import React, { useEffect, useState } from 'react'

import { getDataFromExternalApi } from "../../frameworks/Axios"

export const useRecetasIngredientes = () => {
    const [listaRecetas, setListaRecetas] = useState([])
    const [data, setData] = useState([])


    useEffect(() => {
        const fetchData = async () => {
            try {
                const recetas = await getDataFromExternalApi();
                console.log(recetas.recipes.length)
                setListaRecetas(recetas)

            } catch (error) {

            }

        }
        fetchData()
    }, [])

    console.log(listaRecetas)
    return {
        listaRecetas
    }


};
export default useRecetasIngredientes
