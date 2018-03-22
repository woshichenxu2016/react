var path = require('path');

var root = path.resolve(__dirname, '../');

var config = {
	entry: {
		index: `${root}/components/index.js`
	},
	output: {
		filename: 'bundle.js',
		path: `${root}/build`
	},
	resolve: {
		extensions: ['.js', '.png', '.css', '.less'],
		alias: {
			components: `${root}/components`
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
				test: /\.less/,
				use: [
					{loader: 'style-loader'},
					{loader: 'css-loader', options: {modules: true}},
					{loader: 'less-loader'}
				]
			},
			{
				test: /\.(jpg|png|gif)/,
				loader: 'url-loader?limit=1000'
			}
		]
	}

};

module.exports = config;
