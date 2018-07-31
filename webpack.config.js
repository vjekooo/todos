
const webpack = require('webpack')
const HtmlWebpackPlugin = require('html-webpack-plugin')
const webpackMerge = require('webpack-merge')
const modeConfig = env => require(`./build-utils/webpack.${env}`)(env)
const presetConfig = require('./build-utils/loadPresets')
const commonPaths = require('./build-utils/common-paths')
const WebpackPwaManifest = require('webpack-pwa-manifest')
const WorkboxPlugin = require('workbox-webpack-plugin')

module.exports = ({ mode, presets } = { mode: 'production', presets: [] }) => {
	return webpackMerge(
		{
			mode,
			entry: {
				vendor: ['react', 'react-dom', 'react-prop-types', 'firebase']
			},
			output: {
				path: commonPaths.outputPath
			},
			resolve: {
				extensions: ['.js', '.jsx', '.json']
			},
			module: {
				rules: [
					{
						test: /\.(js|jsx|mjs)$/,
						enforce: 'pre',
						loader: 'eslint-loader',
						include: commonPaths.appEntry
					},
					{
						test: /\.jsx?$/,
						include: commonPaths.appEntry,
						use: 'babel-loader'
					},
					{
						test: /\.json$/,
						use: 'json',
						include: commonPaths.appEntry
					},
					{
						test: /\.(gif|png|jpe?g|svg)$/i,
						include: `${commonPaths.appEntry}/assets/images`,
						use: [
							{
								loader: 'file-loader',
								options: {
									name: 'assets/images/[hash:8]-[name].[ext]'
								}
							},
							{
								loader: 'image-webpack-loader',
								options: {
									mozjpeg: {
										progressive: true,
										quality: 70
									},
									optipng: {
										optimizationLevel: 7
									},
									pngquant: {
										quality: '65-90',
										speed: 4
									},
									gifsicle: {
										interlaced: false
									}
								}
							}
						]
					}
				]
			},
			optimization: {
				splitChunks: {
					cacheGroups: {
						vendor: {
							chunks: 'initial',
							test: 'vendor',
							name: 'vendor',
							enforce: true
						}
					}
				}
			},
			plugins: [
				new HtmlWebpackPlugin({
					title: 'Los Todos',
					template: `public/index.html`,
					favicon: `public/favicon.ico`
				}),
				new webpack.ProgressPlugin(),
				new WebpackPwaManifest({
					name: 'Los Todos todo app',
					short_name: 'LosTodos',
					description: 'PWA Todo app',
					background_color: '#ffffff',
					icons: [
						{
							src: `${commonPaths.appEntry}/assets/images/ico_96.png`,
							sizes: '96'
						},
						{
							src: `${commonPaths.appEntry}/assets/images/ico_144.png`,
							sizes: '144'
						},
						{
							src: `${commonPaths.appEntry}/assets/images/ico_192.png`,
							sizes: '192'
						}
					]
				}),
				new WorkboxPlugin.GenerateSW({
					clientsClaim: true,
					skipWaiting: true
				})
			]
		},
		modeConfig(mode),
		presetConfig({ mode, presets })
	)
}
