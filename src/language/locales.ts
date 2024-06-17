import map from 'lodash/map';

export const LOCALES = [
	{ key: 'en', name: 'English', type: 'select' },
	{ key: 'es', name: 'Spanish', type: 'select' },
	{ key: 'pt', name: 'Português', type: 'select' },
	{ key: 'ja', name: '日本語', type: 'select' },
	{ key: 'ko', name: '한국어', type: 'select' },
	{ key: 'vn', name: 'Tiếng Việt', type: 'select' },
	{ key: 'ru', name: 'Русский', type: 'select' },
	{ key: 'zh-CN', name: '简体中文', type: 'select' },
	{ key: 'zh-HK', name: '繁體中文', type: 'select' }
];

export const SUPPORTED_LOCALES = map(LOCALES, 'key');

export type SupportedLocale = (typeof SUPPORTED_LOCALES)[number];

export const DEFAULT_LOCALE: SupportedLocale = 'en';
