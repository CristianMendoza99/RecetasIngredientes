import React from 'react'

export const RecipeListComponent = ({ listaRecetas }) => {
    console.log(listaRecetas)
    console.log(listaRecetas)
    const lista = (listaRecetas.recipes);
    console.log(lista)

    return (
        <div>
            {/* {listaRecetas ? */}
            <div>Lista de recetas

                {listaRecetas.map((item, index) =>

                    <li key={index}>{item.name}</li>)}


            </div>


        </div>

    )
}
export default RecipeListComponent