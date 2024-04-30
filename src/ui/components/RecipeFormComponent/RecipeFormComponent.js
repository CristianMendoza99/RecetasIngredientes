import React from 'react'

export const RecipeFormComponent = (props) => {
    return (
        <div>Crear nueva receta
            <div>
                <form >
                    <input
                        type="text"
                        name="username"
                        // value={state.username}
                        // onChange={handleChange}
                        placeholder="Usuario"
                    />
                    <input
                        type="email"
                        name="email"
                        // value={state.email}
                        // onChange={handleChange}
                        placeholder="Correo electrónico"
                    />
                    <input
                        type="password"
                        name="password"
                        // value={state.password}
                        // onChange={handleChange}
                        placeholder="Contraseña"
                    />
                    <button type="submit">Enviar</button>
                    <button type="button"
                    // onClick={handleReset}
                    >Resetear</button>
                </form>
            </div>
        </div>

    )
}
export default RecipeFormComponent