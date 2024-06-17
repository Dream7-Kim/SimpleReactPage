import { NodeGlobalsPolyfillPlugin } from '@esbuild-plugins/node-globals-polyfill';
import { lingui } from '@lingui/vite-plugin';
import eslintPlugin from '@nabla/vite-plugin-eslint';
import react from '@vitejs/plugin-react';
import path from 'node:path';
import type { UserConfig } from 'vite';
import { loadEnv, mergeConfig } from 'vite';
import inspect from 'vite-plugin-inspect';
import { VitePWA } from 'vite-plugin-pwa';
import { createSvgIconsPlugin } from 'vite-plugin-svg-icons';
import tsconfigPaths from 'vite-tsconfig-paths';

import AutoImport from 'unplugin-auto-import/vite';

export default ({ mode }: { mode: string }): UserConfig => {
	const isDevelopment = mode === 'development';
	const env = loadEnv(mode, process.cwd());

	const defaultConfig: UserConfig = {
		plugins: [
			tsconfigPaths(),
			react({
				babel: {
					plugins: [
						'macros',
						[
							'@locator/babel-jsx/dist',
							{
								env: 'development'
							}
						]
					]
				}
			}),
			lingui(),
			AutoImport({
				include: [
					/\.[jt]sx?$/ // .ts, .tsx, .js, .jsx
				],
				imports: ['react']
			}),
			createSvgIconsPlugin({
				iconDirs: [path.resolve(__dirname, 'src/assets/__icons__')],
				symbolId: 'icon-[name]'
			}),
			VitePWA({
				registerType: 'autoUpdate',
				includeAssets: [
					'favicon.png',
					'robots.txt',
					'apple-touch-icon.png',
					'icons/*.svg',
					'fonts/*.woff2'
				],
				manifest: {
					theme_color: '#BD34FE',
					icons: [
						{
							src: '/android-chrome-192x192.png',
							sizes: '192x192',
							type: 'image/png',
							purpose: 'any maskable'
						},
						{
							src: '/android-chrome-512x512.png',
							sizes: '512x512',
							type: 'image/png'
						}
					]
				}
			}),
			// Enable esbuild polyfill plugins
			NodeGlobalsPolyfillPlugin({
				buffer: true,
				process: true
			})
		],
		resolve: {
			alias: {
				'@': '/src' // 这里设置 @ 别名指向 src 目录
			}
		},
		server: {
			port: 5000,
			host: '0.0.0.0'
		}
	};

	const buildConfig: UserConfig = {
		plugins: [eslintPlugin(), inspect()]
	};

	return isDevelopment
		? defaultConfig
		: mergeConfig(defaultConfig, buildConfig);
};
