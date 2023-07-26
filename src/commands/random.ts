import { random } from "../lib/dadJokes";
import { stdout } from "node:process";

const command = ["random", "$0"];

const describe = "fetch a random dad joke";

async function handler() {
  const joke = await random();
  if (joke) {
    stdout.write(joke + "\n");
  } else {
    stdout.write("Couldn't find a joke!\n");
  }
}

export default { command, describe, handler };
