const vscode = require('vscode');

function activate(context) {
    let disposable = vscode.commands.registerCommand('vscode-cheatsheet-mac.showCheatSheet', function () {
        const panel = vscode.window.createWebviewPanel(
            'showCheatSheet',
            'VS Code Cheat Sheet for Mac',
            vscode.ViewColumn.One,
            {
                enableScripts: true
            }
        );
        
        panel.webview.html = getWebviewContent();
    });

    context.subscriptions.push(disposable);
}

function getWebviewContent() {
    return `<!DOCTYPE html>
    <html lang="en">
    <head>
        <meta charset="UTF-8">
        <meta name="viewport" content="width=device-width, initial-scale=1.0">
        <title>VS Code Cheat Sheet for Mac</title>
        <style>
            body {
                font-family: -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, Oxygen, Ubuntu, Cantarell, 'Open Sans', 'Helvetica Neue', sans-serif;
                padding: 20px;
                line-height: 1.6;
            }
            .shortcut-section {
                margin-bottom: 30px;
            }
            .shortcut-section h2 {
                color: var(--vscode-editor-foreground);
                border-bottom: 1px solid var(--vscode-widget-border);
                padding-bottom: 5px;
            }
            .shortcut-item {
                display: flex;
                justify-content: space-between;
                margin: 10px 0;
                padding: 5px;
            }
            .shortcut-item:hover {
                background-color: var(--vscode-list-hoverBackground);
            }
            .key {
                background-color: var(--vscode-button-background);
                color: var(--vscode-button-foreground);
                padding: 2px 6px;
                border-radius: 3px;
                font-family: monospace;
            }
        </style>
    </head>
    <body>
        <h1>VS Code Cheat Sheet for Mac</h1>
        <div class="shortcut-section">
            <h2>Essential Commands</h2>
            <div class="shortcut-item">
                <span>Command Palette</span>
                <span class="key">⇧ ⌘ P</span>
            </div>
            <!-- Add more shortcuts here -->
        </div>
    </body>
    </html>`;
}

function deactivate() {}

module.exports = {
    activate,
    deactivate
};
