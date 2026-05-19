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
import type { Schema } from "electron-store";
import type { JSONSchema } from "json-schema-typed";

type DarkPDFSettings = JSONSchema & {
	version: string;
	general: Record<string, boolean>;
};

const darkpdf_schema: Schema<DarkPDFSettings> = {
	version: {
		type: "string",
	},
	general: {
		properties: {
			MaximizeOnOpen: {
				type: "boolean",
			},
			DisplayThumbs: {
				type: "boolean",
			},
		},
		type: "object",
	},
};

function darkpdf_default_settings(version: string): DarkPDFSettings {
	return {
		version: version,
		general: {
			MaximizeOnOpen: true,
			DisplayThumbs: true,
		},
	};
}

export {
	type DarkPDFSettings,
	darkpdf_schema,
	darkpdf_default_settings,
};
