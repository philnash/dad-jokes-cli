import superagent from "superagent";
import version from "./version";

const url = "https://icanhazdadjoke.com/";
const userAgent = `@philnash/dad-jokes:${version}`;

type DadJoke = {
  id: string;
  joke: string;
  status: number;
};
type DadJokeSearchResult = {
  results: DadJoke[];
  status: number;
};

export async function random() {
  try {
    const result = await superagent
      .get(url)
      .set("User-Agent", userAgent)
      .accept("json");
    const dadJoke = result.body as DadJoke;
    return dadJoke.joke;
  } catch (error) {
    console.error(error);
  }
}

export async function search(term: string) {
  try {
    const searchUrl = `${url}search`;
    const result = await superagent
      .get(searchUrl)
      .query({ term })
      .set("User-Agent", userAgent)
      .accept("json");
    const dadJokes = result.body as DadJokeSearchResult;
    return dadJokes.results.map((result) => result.joke);
  } catch (error) {
    console.error(error);
  }
}
