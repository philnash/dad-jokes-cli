import yargs from "yargs/yargs";
import RandomCommand from "./commands/random";
import SearchCommand from "./commands/search";

export async function run(args: string[]) {
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
