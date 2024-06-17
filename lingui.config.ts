const linguiConfig = {
	locales: ['en', 'es', 'pt', 'ja', 'ko', 'vn', 'ru', 'zh-CN', 'zh-HK'],
	catalogs: [
		{
			path: 'src/locales/{locale}/messages',
			include: ['src']
		}
	],
	compileNamespace: 'cjs',
	fallbackLocales: {
		default: 'en'
	},
	format: 'po',
	formatOptions: {
		lineNumbers: false
	},
	orderBy: 'messageId',
	sourceLocale: 'en',
	pseudoLocale: 'pseudo'
};

export default linguiConfig;
