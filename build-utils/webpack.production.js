
const commonPaths = require('./common-paths')
const MiniCssExtractPlugin = require('mini-css-extract-plugin')

module.exports = env => ({
	mode: env.mode,
	entry: {
		app: [`${commonPaths.appEntry}/index.jsx`]
	},
	output: {
		filename: 'js/[name].[chunkhash:8].js'
	},
	module: {
		rules: [
			{
				test: /\.(s*)css$/,
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
	devtool: 'source-map',
	plugins: [
		new MiniCssExtractPlugin({
			filename: 'style/[name]-[contenthash].css'
		})
	]
})
