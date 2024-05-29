# Elmstatic

Elmstatic is a static site generator written in Elm.

For detailed documentation and usage instructions, please refer to the [official Elmstatic documentation](https://korban.net/elm/elmstatic/).

## Installation

To install Elmstatic, you need to have Elm and Node.js installed on your system.

1. Install Elm by following the instructions on [Elm's official website](https://guide.elm-lang.org/install/).
2. Install Node.js by following the instructions on [Node.js's official website](https://nodejs.org/en/download/).
3. Once Elm and Node.js are installed, you can install Elmstatic globally using npm:

```bash
npm install -g elmstatic
```

## Running the static site
```
elmstatic build
elmstatic watch
browser-sync start --server --files "." --no-ui  --reload-delay 500 --reload-debounce 500
```

