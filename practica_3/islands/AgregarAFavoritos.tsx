import { FunctionalComponent } from "preact";
import { favoritos } from "../utils/favoritos.ts";

type Prop = {
    pelicula:string;
}

const AgregarAFavoritos:FunctionalComponent<Prop> = (props) => {

    const agregarpelicula = () => {
        favoritos.value = [...favoritos.value, props.pelicula];
    }

    return(
        <div>
            <button type="submit" onClick={agregarpelicula}>Agregar {props.pelicula}</button>
        </div>
    )
} 

export default AgregarAFavoritos;