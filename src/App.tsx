import type { ReactElement } from 'react';
import React, { Suspense, useEffect } from 'react';
import { BrowserRouter } from 'react-router-dom';

// import setupLocatorUI from '@locator/runtime';
import { ThemeProvider } from '@mui/material/styles';
import { SnackbarProvider } from 'notistack';

import AOS from 'aos';

import ScrollToTop from './components/ScrollToTop';
import Layouts from './layouts';
import RoutesList from './routes';
import theme from './theme';

export default function App(): ReactElement {
	useEffect(() => {
		AOS.init();
	}, []);

	return (
		<BrowserRouter>
			<Suspense>
				<ThemeProvider theme={theme}>
					<SnackbarProvider>
						<Layouts>
							<ScrollToTop />
							<RoutesList />
						</Layouts>
					</SnackbarProvider>
				</ThemeProvider>
			</Suspense>
		</BrowserRouter>
	);
}
