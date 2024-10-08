const { app, BrowserWindow } = require('electron');
const { createMainWindow } = require('./windowManager');

function handleAppEvents() {
    app.on('activate', () => {
        if (BrowserWindow.getAllWindows().length === 0) {
            createMainWindow();
        }
    });

    app.on('window-all-closed', () => {
        if (process.platform !== 'darwin') {
            app.quit();
        }
    });
}

module.exports = { handleAppEvents };
