import React, { useState } from 'react'
import RecipeFormComponent from '../components/RecipeFormComponent/RecipeFormComponent';
import useRecetasIngredientes from './useRecetasIngredientes';
import RecipeListComponent from '../components/RecipeListComponent/RecipeListComponent';


export const RecetasIngredientes = (props) => {
    const [vistaEleccion, setVistaEleccion] = useState("nueva");
    const { listaRecetas } = useRecetasIngredientes();

    console.log(listaRecetas)


    return (
        <form >

            {/* <button type="submit" onClick={eleccionVista("nueva")}>NUEVA RECETA</button> */}
            <RecipeListComponent listaRecetas={listaRecetas} />
            {/* <button type="button"
                onClick={eleccionVista("lista")}
            >LISTA DE RECETAS</button>  */}
        </form>



    )
}


export default RecetasIngredientes