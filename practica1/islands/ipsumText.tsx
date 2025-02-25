import { FunctionComponent } from "preact/src/index.d.ts";
import { useSignal } from "@preact/signals";

type Props = {
  num: number;
  ipsum: string;
};

const ModulText: FunctionComponent<Props> = (props) => {
  const text = useSignal(props.ipsum);
  const mostrar = useSignal(false);
  return (
    <>
      <div class="espacioabajo">
        <div class="fila">
          <h3 class="espaciotodo">Prueba {props.num}</h3>
          <div class="espacioiz"><button onClick={() => (mostrar.value = !mostrar.value)}>
            {(!mostrar.value && "Mostrar mas") || "Mostrar menos"}
          </button></div>
        </div>
        {mostrar.value && (
          <div>
            <br></br>
            <hr></hr>
            <p width="100%">{text}</p>
            <input
              id="intext"
              onChange={(e) => {
                text.value = e.currentTarget.value;
              }}
            >
            </input>
            <br></br>
          </div>
        )}
      </div>
      <br></br>
    </>
  );
};

export default ModulText;
