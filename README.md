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

## Helper

You can write a helper script to copy the result to the clipboard. For example, here is a Linux script
that copies the output via Wayland's `wl-copy` command:

```bash
#!/bin/bash

# Execute the 'info' command with all passed arguments and save output to a variable
output=$($HOME/.local/share/pnpm/info "$@")

# Show the output to the user
echo "$output"

# Ask the user if they want to copy the output to the clipboard
read -p "Copy to the clipboard? (y/n) " choice

if [[ "$choice" == "y" ]]; then
    # If the user chooses 'y', pipe the content to 'wl-copy'
    echo "$output" | tr -d '\n' | wl-copy
fi
```

## Credit

Based on https://github.com/MagicCube/cli-gpt
