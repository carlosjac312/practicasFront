import { FunctionalComponent } from "preact/src/index.d.ts";
import { favoritos } from "../utils/favoritos.ts";
const ListaFavoritos: FunctionalComponent = () => {

    const borrarpelicula = (index:number) => {
        const nuevalista = [...favoritos.value];
        nuevalista.splice(index, 1);
        favoritos.value = nuevalista;
    }

    return (
        <div>
            {favoritos.value.length != 0 ? favoritos.value.map((e, index) => {
                return (
                    <ul>
                        <div>
                            <h3>{e}</h3> <button type="submit" onClick={(e)=>(borrarpelicula(index))}>Borrar</button>
                        </div>
                    </ul>
                )
            }) : (<div>No hay peliculas favoritas</div>)}
        </div>
    );
}

export default ListaFavoritos;