const { contextBridge, ipcRenderer } = require('electron');
const { execFileSync } = require('child_process');

function startGame(name) {
	const filenames = {
		"pingus": "/usr/games/pingus",
		"tuxmath": "/usr/games/tuxmath",
		"tuxpaint": "/usr/bin/tuxpaint",
		"tuxtype": "/usr/games/tuxtype",
		"etr": "/usr/games/etr"
	};

	if (Object.keys(filenames).includes(name)) {
		execFileSync(filenames[name]);
	}
}

contextBridge.exposeInMainWorld("tuxmachine", {
	startGame
});