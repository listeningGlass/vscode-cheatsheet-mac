const vscode = require('vscode');

function activate(context) {
    let disposable = vscode.commands.registerCommand('vscode-mac-cheatsheet.showCheatSheet', function () {
        const panel = vscode.window.createWebviewPanel(
            'macCheatsheet',
            'VS Code Mac Cheat Sheet',
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
    return `
        <!DOCTYPE html>
        <html lang="en">
        <head>
            <meta charset="UTF-8">
            <meta name="viewport" content="width=device-width, initial-scale=1.0">
            <title>VS Code Mac Cheat Sheet</title>
            <style>
                body {
                    font-family: -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, Oxygen, Ubuntu, Cantarell, 'Open Sans', 'Helvetica Neue', sans-serif;
                    padding: 20px;
                    line-height: 1.6;
                    max-width: 1200px;
                    margin: 0 auto;
                }
                .shortcut-section {
                    margin-bottom: 30px;
                }
                .shortcut-section h2 {
                    color: var(--vscode-editor-foreground);
                    border-bottom: 1px solid var(--vscode-widget-border);
                    padding-bottom: 5px;
                    margin-top: 25px;
                }
                .shortcut-item {
                    display: flex;
                    justify-content: space-between;
                    align-items: center;
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
                    white-space: nowrap;
                    margin-left: 15px;
                }
                .description {
                    flex-grow: 1;
                }
                .grid-container {
                    display: grid;
                    grid-template-columns: repeat(auto-fit, minmax(400px, 1fr));
                    gap: 20px;
                }
                @media (max-width: 800px) {
                    .grid-container {
                        grid-template-columns: 1fr;
                    }
                }
            </style>
        </head>
        <body>
            <h1>VS Code Mac Cheat Sheet</h1>
            
            <div class="grid-container">
                <div class="shortcut-section">
                    <h2>Essential Commands</h2>
                    <div class="shortcut-item">
                        <span class="description">Command Palette</span>
                        <span class="key">⌘ ⇧ P</span>
                    </div>
                    <div class="shortcut-item">
                        <span class="description">Quick Open, Go to File</span>
                        <span class="key">⌘ P</span>
                    </div>
                    <div class="shortcut-item">
                        <span class="description">Toggle Sidebar</span>
                        <span class="key">⌘ B</span>
                    </div>
                    <div class="shortcut-item">
                        <span class="description">Toggle Terminal</span>
                        <span class="key">⌘ \`</span>
                    </div>
                    <div class="shortcut-item">
                        <span class="description">Open Settings</span>
                        <span class="key">⌘ ,</span>
                    </div>
                </div>

                <div class="shortcut-section">
                    <h2>Basic Editing</h2>
                    <div class="shortcut-item">
                        <span class="description">Cut line</span>
                        <span class="key">⌘ X</span>
                    </div>
                    <div class="shortcut-item">
                        <span class="description">Copy line</span>
                        <span class="key">⌘ C</span>
                    </div>
                    <div class="shortcut-item">
                        <span class="description">Move line up/down</span>
                        <span class="key">⌥ ↑/↓</span>
                    </div>
                    <div class="shortcut-item">
                        <span class="description">Copy line up/down</span>
                        <span class="key">⌥ ⇧ ↑/↓</span>
                    </div>
                    <div class="shortcut-item">
                        <span class="description">Delete line</span>
                        <span class="key">⇧ ⌘ K</span>
                    </div>
                </div>

                <div class="shortcut-section">
                    <h2>Multi-Cursor and Selection</h2>
                    <div class="shortcut-item">
                        <span class="description">Insert cursor above/below</span>
                        <span class="key">⌘ ⌥ ↑/↓</span>
                    </div>
                    <div class="shortcut-item">
                        <span class="description">Add cursors to line ends</span>
                        <span class="key">⇧ ⌥ I</span>
                    </div>
                    <div class="shortcut-item">
                        <span class="description">Select current line</span>
                        <span class="key">⌘ L</span>
                    </div>
                    <div class="shortcut-item">
                        <span class="description">Select all occurrences</span>
                        <span class="key">⇧ ⌘ L</span>
                    </div>
                    <div class="shortcut-item">
                        <span class="description">Select next occurrence</span>
                        <span class="key">⌘ D</span>
                    </div>
                </div>

                <div class="shortcut-section">
                    <h2>Search and Replace</h2>
                    <div class="shortcut-item">
                        <span class="description">Find</span>
                        <span class="key">⌘ F</span>
                    </div>
                    <div class="shortcut-item">
                        <span class="description">Replace</span>
                        <span class="key">⌥ ⌘ F</span>
                    </div>
                    <div class="shortcut-item">
                        <span class="description">Find in files</span>
                        <span class="key">⇧ ⌘ F</span>
                    </div>
                    <div class="shortcut-item">
                        <span class="description">Replace in files</span>
                        <span class="key">⇧ ⌘ H</span>
                    </div>
                </div>

                <div class="shortcut-section">
                    <h2>Navigation</h2>
                    <div class="shortcut-item">
                        <span class="description">Go to line</span>
                        <span class="key">⌃ G</span>
                    </div>
                    <div class="shortcut-item">
                        <span class="description">Go to file</span>
                        <span class="key">⌘ P</span>
                    </div>
                    <div class="shortcut-item">
                        <span class="description">Go to symbol</span>
                        <span class="key">⇧ ⌘ O</span>
                    </div>
                    <div class="shortcut-item">
                        <span class="description">Go back</span>
                        <span class="key">⌃ -</span>
                    </div>
                    <div class="shortcut-item">
                        <span class="description">Go forward</span>
                        <span class="key">⌃ ⇧ -</span>
                    </div>
                </div>

                <div class="shortcut-section">
                    <h2>Code Folding</h2>
                    <div class="shortcut-item">
                        <span class="description">Fold region</span>
                        <span class="key">⌥ ⌘ [</span>
                    </div>
                    <div class="shortcut-item">
                        <span class="description">Unfold region</span>
                        <span class="key">⌥ ⌘ ]</span>
                    </div>
                    <div class="shortcut-item">
                        <span class="description">Fold all regions</span>
                        <span class="key">⌘ K ⌘ 0</span>
                    </div>
                    <div class="shortcut-item">
                        <span class="description">Unfold all regions</span>
                        <span class="key">⌘ K ⌘ J</span>
                    </div>
                </div>

                <div class="shortcut-section">
                    <h2>Rich Languages Editing</h2>
                    <div class="shortcut-item">
                        <span class="description">Trigger suggestion</span>
                        <span class="key">⌃ Space</span>
                    </div>
                    <div class="shortcut-item">
                        <span class="description">Format document</span>
                        <span class="key">⇧ ⌥ F</span>
                    </div>
                    <div class="shortcut-item">
                        <span class="description">Go to definition</span>
                        <span class="key">F12</span>
                    </div>
                    <div class="shortcut-item">
                        <span class="description">Quick fix</span>
                        <span class="key">⌘ .</span>
                    </div>
                    <div class="shortcut-item">
                        <span class="description">Rename symbol</span>
                        <span class="key">F2</span>
                    </div>
                </div>

                <div class="shortcut-section">
                    <h2>Editor Management</h2>
                    <div class="shortcut-item">
                        <span class="description">New window</span>
                        <span class="key">⇧ ⌘ N</span>
                    </div>
                    <div class="shortcut-item">
                        <span class="description">Close window</span>
                        <span class="key">⌘ W</span>
                    </div>
                    <div class="shortcut-item">
                        <span class="description">Split editor</span>
                        <span class="key">⌘ \\</span>
                    </div>
                    <div class="shortcut-item">
                        <span class="description">Toggle full screen</span>
                        <span class="key">⌃ ⌘ F</span>
                    </div>
                </div>

                <div class="shortcut-section">
                    <h2>File Management</h2>
                    <div class="shortcut-item">
                        <span class="description">New file</span>
                        <span class="key">⌘ N</span>
                    </div>
                    <div class="shortcut-item">
                        <span class="description">Save file</span>
                        <span class="key">⌘ S</span>
                    </div>
                    <div class="shortcut-item">
                        <span class="description">Save all</span>
                        <span class="key">⌥ ⌘ S</span>
                    </div>
                    <div class="shortcut-item">
                        <span class="description">Close file</span>
                        <span class="key">⌘ W</span>
                    </div>
                </div>

                <div class="shortcut-section">
                    <h2>Display</h2>
                    <div class="shortcut-item">
                        <span class="description">Toggle Zen Mode</span>
                        <span class="key">⌘ K Z</span>
                    </div>
                    <div class="shortcut-item">
                        <span class="description">Zoom in</span>
                        <span class="key">⌘ +</span>
                    </div>
                    <div class="shortcut-item">
                        <span class="description">Zoom out</span>
                        <span class="key">⌘ -</span>
                    </div>
                    <div class="shortcut-item">
                        <span class="description">Reset zoom</span>
                        <span class="key">⌘ 0</span>
                    </div>
                </div>
            </div>

            <div class="shortcut-section">
                <h2>Key Symbol Legend</h2>
                <div class="shortcut-item">
                    <span class="description">⌘ - Command</span>
                </div>
                <div class="shortcut-item">
                    <span class="description">⇧ - Shift</span>
                </div>
                <div class="shortcut-item">
                    <span class="description">⌥ - Option/Alt</span>
                </div>
                <div class="shortcut-item">
                    <span class="description">⌃ - Control</span>
                </div>
            </div>
        </body>
        </html>
    `;
}

function deactivate() {}

module.exports = {
    activate,
    deactivate
};