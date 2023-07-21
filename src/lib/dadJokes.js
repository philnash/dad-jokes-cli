const superagent = require("superagent");
const version = require("./version");

const url = "https://icanhazdadjoke.com/";
const userAgent = `@philnash/dad-jokes:${version}`;

async function random() {
  try {
    const result = await superagent
      .get(url)
      .set("User-Agent", userAgent)
      .accept("json");
    const dadJoke = result.body;
    return dadJoke.joke;
  } catch (error) {
    console.error(error);
  }
}

async function search(term) {
  try {
    const searchUrl = new URL(`${url}search`);
    searchUrl.searchParams.append("term", term);
    const result = await superagent
      .get(searchUrl)
      .set("User-Agent", userAgent)
      .accept("json");
    const dadJokes = result.body;
    return dadJokes.results.map((result) => result.joke);
  } catch (error) {
    console.error(error);
  }
}

module.exports = { random, search };
