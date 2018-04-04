var path = require('path');
var webpack = require('webpack');
var ExtractTextPlugin = require('extract-text-webpack-plugin');

var root = path.resolve(__dirname, '../');


var config = {
	entry: {
		index: `${root}/components/index.js`,
		vendor: ['superagent', 'react-loadable', 'react-router-dom']
	},
	output: {
		filename: '[name].bundle.js',
		path: `${root}/build`
	},
	resolve: {
		extensions: ['.js', '.png', '.css', '.less'],
		alias: {
			components: `${root}/components`,
			utils: `${root}/utils`
		}
	},
	module: {
		rules: [
			{
				test: /\.jsx?$/,
				exclude: /node_modules/,
				loader: 'babel-loader'
			},
			{
				test: /\.(less|css)$/,
				exclude: /node_modules/,
				loader: ExtractTextPlugin.extract('css-loader!cx-loader!less-loader', {
					fallback: 'style-loader',
					use: [{loader: 'css-loader', options: {modules: true}}, {loader: 'cx-loader'}, {loader: 'less-loader'}]
				})
			},
			{
				test: /\.(jpg|png|gif)/,
				loader: 'url-loader?limit=1000'
			}
		]
	},
	plugins:[
		new ExtractTextPlugin({
			filename: '[name].[chunkhash:13].css',
			allChunks: true
		}),
		new webpack.optimize.CommonsChunkPlugin({
			name: 'vendor',
			filename: '[name].[chunkhash:8].js'
		})
	]

};

module.exports = config;
