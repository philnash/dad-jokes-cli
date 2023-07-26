import { ArgumentsCamelCase, Options } from "yargs";
import { search } from "../lib/dadJokes";
import { stdout } from "node:process";

const command = "search";

const describe = "Search for dad jokes containing the search term.";

const builder: { [key: string]: Options } = {
  term: {
    describe: "The term to search for",
    demandOption: true,
  },
};

async function handler(args: any) {
  const jokes = await search(args.term);
  if (jokes) {
    stdout.write(jokes.join("\n\n") + "\n");
  }
}

export default { command, describe, builder, handler };
