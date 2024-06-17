import { ReactNode } from 'react';

import { i18n } from '@lingui/core';
import { I18nProvider } from '@lingui/react';

// eslint-disable-next-line @typescript-eslint/ban-ts-comment
// @ts-ignore
import { messages } from 'locales/en/messages.po';
import { useAppSelector } from 'state/hooks';
import { settingBaseState } from 'state/setting/slice';

import { DEFAULT_LOCALE, SupportedLocale } from './locales';

export async function dynamicActivate(locale: SupportedLocale) {
	// eslint-disable-next-line @typescript-eslint/no-unsafe-assignment
	const { messages } = await import(`../locales/${locale}/messages.po`);
	// eslint-disable-next-line @typescript-eslint/no-unsafe-argument
	i18n.load(locale, messages);
	i18n.activate(locale);
}

interface ProviderProperties {
	locale: SupportedLocale;
	onActivate?: (locale: SupportedLocale) => void;
	children: ReactNode;
}

export function Provider({ locale, onActivate, children }: ProviderProperties) {
	useEffect(() => {
		dynamicActivate(locale)
			.then(() => onActivate?.(locale))
			.catch(error => {
				console.error('Failed to activate locale', locale, error);
			});
	}, [locale, onActivate]);

	if (!i18n.locale && locale === DEFAULT_LOCALE) {
		// eslint-disable-next-line @typescript-eslint/no-unsafe-argument
		i18n.load(DEFAULT_LOCALE, messages);
		i18n.activate(DEFAULT_LOCALE);
	}

	return <I18nProvider i18n={i18n}>{children}</I18nProvider>;
}

export function LanguageProvider({ children }: { children: ReactNode }) {
	const { activeLocale } = useAppSelector(settingBaseState);
	const onActivate = useCallback((locale: SupportedLocale) => {
		document.documentElement.setAttribute('lang', locale);
	}, []);
	return (
		<Provider locale={activeLocale} onActivate={onActivate}>
			{children}
		</Provider>
	);
}
