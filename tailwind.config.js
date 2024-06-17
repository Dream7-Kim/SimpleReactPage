const formsPlugin = require('@tailwindcss/forms');

/** @type {import('tailwindcss/types').Config} */
const config = {
	content: ['index.html', 'src/**/*.tsx'],
	important: true,
	theme: {
		fontSize: {
			120: [
				'7.5rem',
				{
					lineHeight: 'normal'
				}
			],
			100: [
				'6.25rem',
				{
					lineHeight: 'normal'
				}
			],

			72: [
				'4.5rem',
				{
					lineHeight: 1.1
				}
			],
			64: [
				'4rem',
				{
					lineHeight: 'normal'
				}
			],
			60: [
				'3.75rem',
				{
					lineHeight: 1.1
				}
			],
			52: [
				'3.25rem',
				{
					lineHeight: 'normal'
				}
			],
			50: [
				'3.125rem',
				{
					lineHeight: 'normal'
				}
			],
			48: [
				'3rem',
				{
					lineHeight: 'normal'
				}
			],
			40: [
				'2.5rem',
				{
					lineHeight: 'normal',
					letterSpacing: '-0.8px'
				}
			],
			32: [
				'2rem',
				{
					lineHeight: 'normal',
					letterSpacing: '-0.64px'
				}
			],
			28: [
				'1.75rem',
				{
					lineHeight: 1.2
				}
			],
			24: [
				'1.5rem',
				{
					lineHeight: 'normal'
				}
			],

			20: [
				'1.25rem',
				{
					lineHeight: 1.5
				}
			],
			18: [
				'1.125rem',
				{
					lineHeight: 1.1
				}
			],
			16: [
				'1rem',
				{
					lineHeight: 1.5
				}
			],
			14: [
				'0.875rem',
				{
					lineHeight: 1.5
				}
			]
		},
		screens: {
			sm: { max: '767px' },
			md: { min: '768px' },
			lg: { min: '992px' },
			xl: { min: '1200px' },
			'2xl': { min: '1440px' },
			// md: { min: '768px', max: '1199px' },
			// lg: { min: '1200px', max: '1599px' },
			// xl: { min: '1600px', max: '1919px' },
			'3xl': { min: '1920px' }
		},
		extend: {
			fontSize: {
				xxs: '0.625rem',
				13: '0.8125rem'
			},
			flex: {
				1.25: 1.25,
				1.5: 1.5,
				2: 2,
				2.25: 2.25,
				2.5: 2.5,
				3: 3,
				4: 4,
				5: 5
			}
		}
	},
	experimental: { optimizeUniversalDefaults: true },
	plugins: [formsPlugin]
};
module.exports = config;
