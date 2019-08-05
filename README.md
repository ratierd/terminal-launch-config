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