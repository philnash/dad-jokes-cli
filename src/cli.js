const yargs = require("yargs/yargs");
const RandomCommand = require("./commands/random");
const SearchCommand = require("./commands/search");

async function run(args) {
  return yargs(args.slice(2))
    .command(RandomCommand)
    .command(SearchCommand)
    .version()
    .help()
    .alias({
      version: "v",
      help: "h",
    }).argv;
}

module.exports = { run };
