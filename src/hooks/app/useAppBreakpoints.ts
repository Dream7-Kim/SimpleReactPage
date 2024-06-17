import { useMediaQuery, useTheme } from '@mui/material';

export function useAppBreakpoints() {
	const theme = useTheme();
	// 768
	const isDownMd = useMediaQuery(theme.breakpoints.down('md'));
	const isUpMd = useMediaQuery(theme.breakpoints.up('md'));
	// 1024
	const isDownLg = useMediaQuery(theme.breakpoints.down('lg'));
	const isUpLg = useMediaQuery(theme.breakpoints.up('lg'));
	// 1200
	// const isDownXl = useMediaQuery(theme.breakpoints.down('xl'));
	const isUpXl = useMediaQuery(theme.breakpoints.up('xl'));

	const isMatchMobile = isDownMd;
	const isMatchPad = isUpMd && isDownLg;
	const isMatchPc = isUpLg;

	return {
		isMatchMobile,
		isMatchPad,
		isMatchPc,
		isUpMd,
		isUpXl,
		isDownLg,
		isUpLg
	};
}
