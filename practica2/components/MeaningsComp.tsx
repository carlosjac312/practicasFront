import { FunctionComponent } from "preact";

type definiciones = {
  definition: string;
  example?: string;
  synonyms: string[];
  antonyms: string[];
};

type significado = {
  partOfSpeech: string;
  definitions: definiciones[];
};

type Props = {
  significados: significado[];
};

const Meanings: FunctionComponent<Props> = (props) => {
  const { significados } = props;
  return (
    <div class="spaceright">
      <h2>Meanings</h2>
      {significados.map((e, index) => {
        return (
          <div key={index}>
            <h3 style={{ paddingLeft: "8px" }}> Part of Speech: {e.partOfSpeech}</h3>
            <h4 style={{ paddingLeft: "8px" }}>Definitions:</h4>
            <div>
              {e.definitions.map((e, index) => {
                return (
                  <ul key={index} class="wrapstuff">
                    <p>Definition: {e.definition}</p>
                    <p>Example: {e.example}</p>
                    <p>
                      Sinonyms: {e.synonyms.length > 0 ? e.synonyms.join(", ") : "No hay datos de sinónimos en la API"}
                    </p>
                    <p>
                      Antonyms: {e.antonyms.length > 0 ? e.synonyms.join(", ") : "No hay datos de antónimos en la API"}
                    </p>
                    <br />
                  </ul>
                );
              })}
            </div>
          </div>
        );
      })}
    </div>
  );
};

export default Meanings;
