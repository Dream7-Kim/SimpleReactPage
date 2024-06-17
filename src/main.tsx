import { StrictMode } from 'react';
import { createRoot } from 'react-dom/client';
import { Provider as ReduxProvider } from 'react-redux';

import { QueryClient, QueryClientProvider } from '@tanstack/react-query';
import App from 'App';
import { registerSW } from 'virtual:pwa-register';
import 'virtual:svg-icons-register';

import 'aos/dist/aos.css';
import { enableMapSet } from 'immer';
import { LanguageProvider } from 'language';
import { persistStore } from 'reduxjs-toolkit-persist';
import { PersistGate } from 'reduxjs-toolkit-persist/integration/react';
import { store } from 'state';

import './index.css';
import './module.css';

// eslint-disable-next-line import/extensions

registerSW();
enableMapSet();

const MAX_RETRIES = 1;
const queryClient = new QueryClient({
	defaultOptions: {
		queries: {
			staleTime: Number.POSITIVE_INFINITY,
			retry: MAX_RETRIES
		}
	}
});

const container = document.querySelector('#root');
if (container) {
	const root = createRoot(container);
	root.render(
		<StrictMode>
			<QueryClientProvider client={queryClient}>
				<ReduxProvider store={store}>
					<LanguageProvider>
						<PersistGate loading={<App />} persistor={persistStore(store)}>
							<App />
						</PersistGate>
					</LanguageProvider>
				</ReduxProvider>
			</QueryClientProvider>
		</StrictMode>
	);
}
