import type { MenuItemConstructorOptions } from "electron";
import { BrowserWindow, shell } from "electron";
import { openSettings } from "./settings";

/**
 * Sends an IPC message to the currently focused BrowserWindow's renderer.
 * Used by menu accelerators to trigger tab actions regardless of webview focus.
 */
function sendToFocused(channel: string, ...args: unknown[]) {
	BrowserWindow.getFocusedWindow()?.webContents.send(channel, ...args);
}

function createMenu() {
	const menuTemplate: MenuItemConstructorOptions[] = [];

	// Tab position shortcuts (Ctrl+1 through Ctrl+9)
	const tabPositionItems: MenuItemConstructorOptions[] = [];
	for (let i = 1; i <= 9; i++) {
		tabPositionItems.push({
			label: `Tab ${i}`,
			accelerator: `CmdOrCtrl+${i}`,
			visible: false,
			click: () => sendToFocused("switch-tab", i),
		});
	}

	menuTemplate.push(
		{
			role: "fileMenu",
			label: "File",
			submenu: [
				{
					label: "Open...",
					id: "file-open",
					accelerator: "CmdOrCtrl+O",
				},
				{
					label: "Print",
					id: "file-print",
					accelerator: "CmdOrCtrl+P",
					enabled: false,
				},
				{
					label: "Settings",
					id: "settings",
					accelerator: "Alt+S",
					click: async () => {
						openSettings();
					},
				},
			],
		},
		{
			label: "Tabs",
			submenu: [
				{
					label: "Open New Tab",
					id: "tabs-new",
					accelerator: "CmdOrCtrl+T",
				},
				{
					label: "Close Tab",
					accelerator: "CmdOrCtrl+W",
					click: () => sendToFocused("close-tab"),
				},
				{
					label: "Close Tab",
					accelerator: "CmdOrCtrl+F4",
					visible: false,
					click: () => sendToFocused("close-tab"),
				},
				{
					label: "Reopen Tab",
					accelerator: "CmdOrCtrl+Shift+T",
					click: () => sendToFocused("reopen-tab"),
				},
				{ type: "separator" },
				{
					label: "Next Tab",
					accelerator: "CmdOrCtrl+Tab",
					click: () => sendToFocused("switch-tab", "next"),
				},
				{
					label: "Previous Tab",
					accelerator: "CmdOrCtrl+Shift+Tab",
					click: () => sendToFocused("switch-tab", "prev"),
				},
				{
					label: "Next Tab",
					accelerator: "CmdOrCtrl+PageDown",
					visible: false,
					click: () => sendToFocused("switch-tab", "next"),
				},
				{
					label: "Previous Tab",
					accelerator: "CmdOrCtrl+PageUp",
					visible: false,
					click: () => sendToFocused("switch-tab", "prev"),
				},
				{ type: "separator" },
				{
					label: "Move Tab Left",
					accelerator: "CmdOrCtrl+Shift+PageUp",
					visible: false,
					click: () => sendToFocused("move-tab", "prev"),
				},
				{
					label: "Move Tab Right",
					accelerator: "CmdOrCtrl+Shift+PageDown",
					visible: false,
					click: () => sendToFocused("move-tab", "next"),
				},
				{
					label: "Move Tab to Start",
					accelerator: "CmdOrCtrl+Shift+Home",
					visible: false,
					click: () => sendToFocused("move-tab", "start"),
				},
				{
					label: "Move Tab to End",
					accelerator: "CmdOrCtrl+Shift+End",
					visible: false,
					click: () => sendToFocused("move-tab", "end"),
				},
				...tabPositionItems,
			],
		},
		{
			role: "editMenu",
			label: "Edit",
			submenu: [
				{ role: "undo" },
				{ role: "redo" },
				{ type: "separator" },
				{ role: "cut" },
				{ role: "copy" },
				{ role: "paste" },
			],
		},
		{
			role: "viewMenu",
			label: "View",
			submenu: [
				{ role: "resetZoom" },
				{ role: "zoomIn" },
				{ role: "zoomOut" },
				{ type: "separator" },
				{ role: "togglefullscreen" },
			],
		},
		{
			role: "windowMenu",
			label: "Window",
			submenu: [{ role: "minimize" }],
		},
		{
			role: "help",
			submenu: [
				{
					label: "Learn More",
					click: async () => {
						await shell.openExternal(
							"https://github.com/akutsupis/DarkPDF#readme",
						);
					},
				},
				{
					label: "License",
					click: async () => {
						await shell.openExternal(
							"https://github.com/akutsupis/DarkPDF/blob/master/LICENSE",
						);
					},
				},
				{
					label: "Bugs",
					click: async () => {
						await shell.openExternal(
							"https://github.com/akutsupis/DarkPDF/issues",
						);
					},
				},
				{
					label: "Contact",
					click: async () => {
						await shell.openExternal(
							"https://github.com/akutsupis",
						);
					},
				},
			],
		},
	);
	return menuTemplate;
}

export { createMenu };
