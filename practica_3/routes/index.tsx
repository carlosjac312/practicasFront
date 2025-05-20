import AgregarAFavoritos from "../islands/AgregarAFavoritos.tsx";
import ListaFavoritos from "../islands/Listafavoritos.tsx";



export default function Home() {
  const pelis = ["Mision Imposible", "Avatar: La leyenda de Ang", "Forest Gump", "Jojo Rabbit"]
  return (
    <div>
      <h1>Lista de peliculas</h1>
      {pelis.map((e)=>{
        return <AgregarAFavoritos pelicula={e}/>
      })}
      <h1>Lista de favoritos</h1>
      <ListaFavoritos/>
    </div>
  );
}
