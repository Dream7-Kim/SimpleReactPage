import { ReactElement, ReactNode } from 'react';

import Box, { BoxProps } from '@mui/material/Box';

import { useAppBreakpoints } from 'hooks/app/useAppBreakpoints';

// import { alpha, styled } from '@mui/material/styles';
// interface StyledBoxProps extends ReactElement{
// 	bgColor: string;
// }

export function StyledBox({
	bgColor,
	children,
	width
}: {
	bgColor?: string;
	children: ReactNode;
	width?: string;
}): ReactElement {
	const { isMatchMobile } = useAppBreakpoints();
	return (
		<div
			style={{
				display: 'flex',
				flexDirection: 'column',
				justifyContent: 'flex-start',
				backgroundImage: `linear-gradient(180deg, ${
					bgColor === 'grey'
						? 'rgba(247, 247, 248, 1)'
						: 'rgba(255, 255, 255, 1)'
				}, rgba(153, 153, 153, 0.1))`,
				padding: isMatchMobile ? '8px' : '16px',
				marginBottom: '12px',
				minWidth: width || 'auto'
			}}
		>
			{children}
		</div>
	);
}

export function StyledBoxRules({
	bgColor,
	children,
	width
}: {
	bgColor?: string;
	children: ReactNode;
	width?: string;
}): ReactElement {
	const { isMatchMobile } = useAppBreakpoints();
	return (
		<div
			style={{
				display: 'flex',
				flexDirection: 'column',
				justifyContent: 'center',
				padding: isMatchMobile ? '14px 16px' : '38px 32px',
				marginBottom: '12px',
				minWidth: width || 'auto',
				background: '#FFFFFF',
				border: '1px solid #F1F1F1',
				boxShadow: '3px 4px 12px 0px rgba(0,0,0,0.08)'
			}}
		>
			{children}
		</div>
	);
}
