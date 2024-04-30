import React from 'react'

export const RecipeListComponent = ({ listaRecetas }) => {
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