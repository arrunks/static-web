var path = require('path');
var ExtractTextPlugin = require('extract-text-webpack-plugin');
module.exports = {
  entry: './src/index.js',
  output: {
    filename: 'dist.js',
    path: path.resolve(__dirname, 'dist')
  },
  module: {
    loaders: [{
      test: /\.js$/,
      exclude: /(node_modules)/,
      loader: 'babel-loader',
      query: {
        presets: [['es2015', {modules: false}]],
        plugins: ['syntax-dynamic-import']
      }
	    },
	    { test: /\.css$/, loader: ExtractTextPlugin.extract({
	        use: 'css-loader'
	     }) },
	    {
	    test: /\.woff(2)?(\?v=[0-9]\.[0-9]\.[0-9])?$/,
	    loader: 'url-loader?limit=10000&mimetype=application/font-woff'
	  },
	  {
	    test: /\.(ttf|eot|svg)(\?v=[0-9]\.[0-9]\.[0-9])?$/,
	    loader: 'file-loader'
	  }
  	]
  },
  plugins:[
    	new ExtractTextPlugin('styles.css')
  ]
};