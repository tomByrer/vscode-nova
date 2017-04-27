import * as path from 'path';
import { generateTheme, IColorSet } from 'vscode-theme-generator';
const ansiGroups = require('nova-colors').ansiGroups

const themeName = 'Nova';
const colors = {
	black: ansiGroups.normal.black,
	white: ansiGroups.normal.white,
	blue: ansiGroups.normal.blue,
	red: ansiGroups.normal.red,
	green: ansiGroups.normal.green,
	yellow: ansiGroups.normal.yellow
}

const colorSet: IColorSet = {
	base: {
		background: colors.black,
		foreground: colors.white,
		color1: colors.blue,
		color2: colors.red,
		color3: colors.green,
		color4: colors.yellow
	}
};

generateTheme(themeName, colorSet, path.join(__dirname, 'theme.json'));
