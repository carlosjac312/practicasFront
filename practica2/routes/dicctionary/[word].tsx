import { FreshContext, Handlers, PageProps } from "$fresh/server.ts";
import Axios from "npm:axios";
import Meanings from "../../components/MeaningsComp.tsx";
import Phonetics from "../../components/PhoneticsComp.tsx";

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

type fonetico = {
  text?: string;
  audio: string;
  sourceUrl?: string;
  license?: {
    name: string;
    url: string;
  };
};

type DictionaryEntry = {
  word: string;
  phonetics: fonetico[];
  meanings: significado[];
};

type DictionaryResponse = DictionaryEntry[];

type Props = {
  palabra:string
  phonetics: fonetico[];
  meanings: significado[];
};

export const handler: Handlers = {
  GET: async (req: Request, ctx: FreshContext<unknown, Props>) => {
    const {word} = ctx.params;
    try {
      const infoWord = await Axios.get<DictionaryResponse>(
        `https://api.dictionaryapi.dev/api/v2/entries/en/${word}`,
      );
      const fonetico = infoWord.data[0].phonetics;
      const significado = infoWord.data[0].meanings;
      return ctx.render({
        palabra:word,
        phonetics: fonetico,
        meanings: significado,
      });
    } catch (error) {
      throw new Error(
        "The connection with API went wrong or you put a non-existent word",
      );
    }
  },
};

const Page = (props: PageProps<Props>) => {
  return (
    <div>
      <h1 style={{ paddingLeft: "20px" }}>{props.data.palabra}</h1>
      <div class="container">
        <Phonetics foneticos={props.data.phonetics} />
        <Meanings significados={props.data.meanings} />
      </div>
    </div>
  );
};

export default Page;
