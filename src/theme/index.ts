import '@fontsource/dm-sans';
// Specify weight
import '@fontsource/dm-sans/400-italic.css';
// Defaults to weight 400
import '@fontsource/dm-sans/400.css';
// Defaults to weight 500
import '@fontsource/dm-sans/500-italic.css';
// Specify weight and style
import '@fontsource/dm-sans/500.css';
// Defaults to weight 700
import '@fontsource/dm-sans/700-italic.css';
// Defaults to weight 500
import '@fontsource/dm-sans/700.css';
// Defaults to weight 700
import '@fontsource/staatliches';
// Defaults to weight 400
import '@fontsource/staatliches/400.css';
// Specify weight
import type { ThemeOptions } from '@mui/material';
import { alpha, createTheme, darken } from '@mui/material';

import { App_Theme } from '../types';

declare module '@mui/material/styles' {
	interface Theme {
		mode: string;
		custom: {
			voteAColor: string;
			voteBColor: string;
		};
	}

	// allow configuration using `createTheme`
	interface ThemeOptions {
		mode: string;
		custom?: {
			voteAColor: string;
			voteBColor: string;
		};
	}
}

interface ColorsProperties {
	dividerColor: string;
	primaryColor: string;
	secondaryColor: string;
	paperBg: string;
	defaultBg: string;
	actionHover: string;
	textPrimary: string;
	textSecondary: string;
	warningColor: string;
}

type ThemeConfigProperties = Record<string, ColorsProperties>;
const white = '#FFF';
const black = '#000';
const themeConfig: ThemeConfigProperties = {
	dark: {
		dividerColor: alpha(white, 0.1),
		primaryColor: '#000',
		secondaryColor: '#8B919D',
		paperBg: '#18191E',
		defaultBg: '#111',
		actionHover: alpha(white, 0.1),
		textPrimary: alpha(white, 0.9),
		textSecondary: '#8B919D',
		warningColor: '#E0A200'
	},
	light: {
		dividerColor: alpha(black, 0.08),
		primaryColor: '#000',
		secondaryColor: darken('#F4F4F4', 0.05),
		paperBg: '#FFF',
		defaultBg: alpha(black, 0.03),
		actionHover: alpha(black, 0.03),
		textPrimary: alpha(black, 0.9),
		textSecondary: '#8B919D',
		warningColor: '#E0A200'
	}
};

const BOX_SHADOW = '0px 2px 8px rgba(0, 0, 0, 0.2)';

const createThemeOptions = (mode: App_Theme): ThemeOptions => {
	const {
		dividerColor,
		primaryColor,
		secondaryColor,
		paperBg,
		defaultBg,
		actionHover,
		textPrimary,
		textSecondary,
		warningColor
	} = themeConfig[mode];

	return {
		mode,
		// custom: {
		// 	voteAColor,
		// 	voteBColor
		// },
		breakpoints: {
			values: {
				xs: 0,
				sm: 640,
				md: 768,
				lg: 1024.05,
				xl: 1200
			}
		},
		palette: {
			mode,
			primary: {
				main: primaryColor,
				dark: darken(primaryColor, 0.3),
				contrastText: '#fff'
			},
			secondary: {
				main: secondaryColor,
				contrastText: '#000'
			},
			background: {
				default: defaultBg,
				paper: paperBg
			},
			text: {
				primary: textPrimary,
				secondary: textSecondary,
				disabled: 'rgba(43,46,69,0.5)'
			},
			error: {
				main: '#FE385C'
			},
			success: {
				main: '#0CBA71',
				dark: darken('#0CBA71', 0.3)
			},
			warning: {
				main: warningColor,
				contrastText: '#000'
			},
			info: {
				main: '#4499CE'
			},
			action: {
				disabled: 'rgba(152,153,179,0.75)',
				// disabledBackground: 'rgba(43,46,69,0.5)',
				disabledOpacity: 0.7,
				hover: actionHover,
				selectedOpacity: 0.5
			},
			divider: dividerColor
		},
		shape: {
			borderRadius: 4
		}
	};
};

export default createTheme(createThemeOptions(App_Theme.light));

// eslint-disable-next-line @typescript-eslint/explicit-function-return-type
export const getTheme = (theme: App_Theme) =>
	createTheme(createThemeOptions(theme));
