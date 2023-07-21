const { search } = require("../lib/dadJokes");
const { stdout } = require("node:process");

const command = "search";

const describe = "Search for dad jokes containing the search term.";

const builder = {
  term: {
    describe: "The term to search for",
    demandOption: true,
  },
};

async function handler(args) {
  const jokes = await search(args.term);
  if (jokes) {
    stdout.write(jokes.join("\n\n") + "\n");
  }
}

module.exports = {
  command,
  describe,
  builder,
  handler,
};
