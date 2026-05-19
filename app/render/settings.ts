/*
NightPDF Dark mode for Pdfs
Copyright (C) 2021  Advaith Madhukar

This program is free software; you can redistribute it and/or
modify it under the terms of the GNU General Public License
as published by the Free Software Foundation; version 2
of the License.

This program is distributed in the hope that it will be useful,
but WITHOUT ANY WARRANTY; without even the implied warranty of
MERCHANTABILITY or FITNESS FOR A PARTICULAR PURPOSE.  See the
GNU General Public License for more details.

You should have received a copy of the GNU General Public License
along with this program; if not, write to the Free Software
Foundation, Inc., 51 Franklin Street, Fifth Floor, Boston, MA  02110-1301, USA.
*/
//trans rights

async function darkPDFSettings() {
	console.log("settings page loaded");

	// LHS menu
	const menu = document.getElementById("settings-menu");
	// RHS content
	const contentWrapper = document.getElementById("settings-content");
	// All settings/config
	const settings = await window.api.GetSettings();

	for (const setting in settings) {
		if (Object.hasOwn(settings, setting)) {
			const menuItem = document.createElement("div");
			const panelId = `settings-${setting}`;
			menuItem.classList.add("menu-item");
			menuItem.innerText = setting;
			menuItem.addEventListener("click", () => {
				for (const panel of document.getElementsByClassName(
					"menu-item",
				)) {
					panel.classList.remove("active");
				}
				menuItem.classList.add("active");
				for (const panel of document.getElementsByClassName(
					"settings-panel",
				)) {
					panel.classList.add("hidden");
				}
				document.getElementById(panelId)?.classList.remove("hidden");
			});
			menu?.appendChild(menuItem);
			const panel = document.createElement("div");
			panel.classList.add("settings-panel", "hidden");
			panel.id = panelId;
			contentWrapper?.appendChild(panel);
		}
	}

	const version = await window.api.GetVersion();
	const version_panel = document.getElementById("settings-version");

	if (version_panel) {
		version_panel.classList.remove("hidden");
		const div = document.createElement("div");
		div.classList.add("version");
		div.innerHTML = version;
		version_panel.appendChild(div);
	}

	const general_panel = document.getElementById("settings-general");
	if (general_panel) {
		let key: string;
		const keys = Object.keys(settings.general);
		for (key in keys) {
			const div = document.createElement("div");
			div.classList.add("settings-item");
			const label = document.createElement("label");
			label.htmlFor = keys[key];
			label.classList.add("setting-name");
			if (keys[key] === "MaximizeOnOpen") {
				label.innerText = "Maximize On Open";
			} else {
				label.innerText = "Display PDF page thumbnails";
			}

			const checkbox = document.createElement(
				"input",
			) as HTMLInputElement;
			checkbox.type = "checkbox";
			checkbox.classList.add("setting-value");
			checkbox.id = keys[key];
			checkbox.checked = settings.general[keys[key]];
			checkbox.addEventListener("change", () => {
				settings.general[keys[key]] = checkbox.checked;
				window.api.SetSetting("general", keys[key], checkbox.checked);
			});
			div.appendChild(label);
			div.appendChild(checkbox);
			general_panel.appendChild(div);
		}
	}
}

darkPDFSettings();

export default darkPDFSettings;
