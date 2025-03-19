import { FunctionComponent } from "preact/src/index.d.ts";

type fonetico = {
    text?: string;
    audio: string;
    sourceUrl?: string;
    license?: {
      name: string;
      url: string;
    };
  };
type Props = {
    foneticos:fonetico[]
}

const Phonetics:FunctionComponent<Props> = (props) => {
    const {foneticos} = props;
    foneticos.map((e) => {
    })
    return(
        <div class="spaceright">
            <h2>Phonetics</h2>
            {foneticos.map((e, index)=>{
                return(
                    <ul key={index} class="wrapstuff">
                        {e.text && <p>Text: {e.text}</p>}
                        {e.audio && <p>Audio: {e.audio}</p>}
                        <br/>
                    </ul>
                )
            })}
        </div>
    );
}

export default Phonetics;