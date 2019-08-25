# Terminal Launch Config (VScode Extension)

The purpose of this project is to dive into vscode extension development and eventually create an extension that allows a user to configure default terminal layout/commands depending on the selected vscode workspace.

## .vscode/terminalConfig.json

You can configure the terminals for a given workspace by adding a terminalConfig.json file in your project's .vscode directory like this :

```
{
    "terminals": [
        {
            "command": "pwd",
            "autorun": true
        },
        {
            "command": "cd ~ && pwd",
            "autorun": true
        }
    ]
}
```

# Current workaround using tmux

As explained in [this article](https://medium.com/@joaomoreno/persistent-terminal-sessions-in-vs-code-8fc469ed6b41) it is possible to use a mutliplexer like tmux to have attach the same session to a given workspace in vscode.

The session will be persisted even if you close VSCode which is a great advantage and also why I'm using this solution from now on.
