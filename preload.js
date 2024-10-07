const { contextBridge, ipcRenderer } = require('electron');

// Expose only necessary parts of Electron API to the renderer process
contextBridge.exposeInMainWorld('electron', {
    ipcRenderer: {
        send: (channel, data) => ipcRenderer.send(channel, data),
        receive: (channel, func) => ipcRenderer.on(channel, (event, ...args) => func(...args))
    }
});
