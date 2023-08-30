# info-cli

Translates human language to command line using ChatGPT.

## Usage

```sh-session
$ npm install -g info-cli

$ export OPENAI_API_KEY="***your-openai-api-key***"

$ info clone react from github and switch to a new branch named feature/gpt

> git clone https://github.com/facebook/react.git && cd react && git checkout -b feature/gpt

$ info delete all untitled docker images

> docker rmi $(docker images -f "dangling=true" -q)
```

## Credit

Based on https://github.com/MagicCube/cli-gpt
