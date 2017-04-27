import * as path from 'path';
import { generateTheme, IColorSet } from 'vscode-theme-generator';
const ansiGroups = require('nova-colors').ansiGroups

const themeName = 'Nova';
const colorSet: IColorSet = {
	base: {
		background: ansiGroups.normal.black,
		foreground: ansiGroups.normal.white,
		color1: ansiGroups.normal.blue,
		color2: ansiGroups.normal.red,
		color3: ansiGroups.normal.green,
		color4: ansiGroups.normal.yellow
	},
	ui: {
		// 	/** The color of the editor cursor/caret */
		// 	cursor: ,
		// 	/** Visible whitespace (editor.renderWhitespace) */
		// 	invisibles: ,
		// 	/** Indent guide */
		// 	guide: ,
		/** Line highlight, this will remove the line borders in favor of a solid highlight */
		lineHighlight: ansiGroups.normal.magenta,
		// 	findMatchHighlight: ,
		// 	currentFindMatchHighlight: ,
		// 	findRangeHighlight: ,
		// 	rangeHighlight: ,
		// 	selectionHighlight: ,
		selection: ansiGroups.normal.cyan,
		// 	wordHighlight: ,
		// 	wordHighlightStrong: ,
		// 	activeLinkForeground: 
	},
	terminal: {
		black: ansiGroups.normal.black,
		red: ansiGroups.normal.red,
		green: ansiGroups.normal.green,
		yellow: ansiGroups.normal.yellow,
		blue: ansiGroups.normal.blue,
		magenta: ansiGroups.normal.magenta,
		cyan: ansiGroups.normal.cyan,
		white: ansiGroups.normal.white
	}
};

generateTheme(themeName, colorSet, path.join(__dirname, 'theme.json'));
