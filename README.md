# 4 Steps from JavaScript to TypeScript

This repo shows you the steps to go through to update a project from JavaScript to TypeScript.

This repo is a companion to [Phil Nash's](https://philna.sh/) talk from [WeAreDevelopers World Congress 2023](https://worldcongress.app.swapcard.com/widget/event/wearedevelopers-world-congress-2023/planning/UGxhbm5pbmdfMTQyMDI3OQ), which was originally based on the advice from [Dominik Kundel's](https://dkundel.com/) blog post _[How to move your project to TypeScript at your own pace](https://www.twilio.com/blog/move-to-typescript)_.

## Usage

You can use the package on the command line with `npx`:

```sh
npx --package=@philnash/dad-jokes-cli joke
```

Or by installing globally and calling the `joke` command.

```sh
npm install -g @philnash/dad-jokes-cli
```

Using the command on its own will return a random joke.

```sh
joke
```

You can search for jokes by calling the `search` command and passing a `--term` argument.

```sh
joke search --term "dad"
```

## License

MIT License Copyright (c) 2023 Phil Nash
