// The module 'vscode' contains the VS Code extensibility API
// Import the module and reference it with the alias vscode in your code below
import * as vscode from 'vscode';

// this method is called when your extension is activated
// your extension is activated the very first time the command is executed
export function activate(context: vscode.ExtensionContext) {
	var fs = require('fs');
	
	const workspaceFolders = vscode.workspace.workspaceFolders;
	if (!workspaceFolders || !workspaceFolders.length) {
		return;
	}
	const workspaceRoot = workspaceFolders[0];
	
	var obj = JSON.parse(fs.readFileSync(`${workspaceRoot.uri.fsPath}/.vscode/terminalConfig.json`, 'utf8'));
	console.log(obj);
}

// this method is called when your extension is deactivated
export function deactivate() {}
