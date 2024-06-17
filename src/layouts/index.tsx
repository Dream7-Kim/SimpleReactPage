import React, { ReactNode } from 'react';

import { styled } from '@mui/material';

// import LogoLightSvg from '../assets/svg/icon-logo.svg';
import { useAppBreakpoints } from '../hooks/app/useAppBreakpoints';
// import { useCurrentPage } from 'hooks/useCurrentPage';
// import { Dom_Size, Page } from '../constant';
import Footer from './Footer';
import Header from './Header';

const RootLayout = styled('article')(({ theme }) => {
	const { isMatchMobile } = useAppBreakpoints();
	return {
		minHeight: '100vh',
		// padding: '8px',
		height: isMatchMobile ? '100vh' : 'auto',
		backgroundColor: theme.palette.background.default
	};
});

const MainLayout = styled('main')(({ theme }) => {
	return {
		display: 'block',
		height: '100vh',
		margin: '0 auto',
		// flex: 1,
		// color: theme.palette.text.primary,
		boxSizing: 'border-box'
		// background: theme.palette.background.paper,
	};
});

export default React.memo(({ children }: { children: ReactNode }) => {
	return (
		<RootLayout>
			<MainLayout className='bg-black'>{children}</MainLayout>
		</RootLayout>
	);
});
