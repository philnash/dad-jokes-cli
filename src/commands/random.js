const { random } = require("../lib/dadJokes");
const { stdout } = require("node:process");

const command = ["random", "$0"];

const describe = "fetch a random dad joke";

async function handler() {
  const joke = await random();
  stdout.write(joke + "\n");
}

module.exports = {
  command,
  describe,
  handler,
};
