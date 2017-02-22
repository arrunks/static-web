var path = require('path');
var ExtractTextPlugin = require('extract-text-webpack-plugin');
var webpack = require('webpack');
var HtmlWebpackPlugin = require('html-webpack-plugin');
module.exports = {
  entry: './src/index.js',
  output: {
    filename: 'js/dist.js',
    path: path.resolve(__dirname, 'dist')
  },
  devtool: 'source-map',
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
	  { test: /\.css$/, 
	    loader: ExtractTextPlugin.extract({
	        	use: 'css-loader'
	     }) 
	  },
	  { test: /\.scss$/,
	  	loader: ExtractTextPlugin.extract('css-loader!sass-loader')
	  },
	  {
	    test: /\.woff(2)?(\?v=[0-9]\.[0-9]\.[0-9])?$/,
	    loader: 'url-loader?limit=10000&mimetype=application/font-woff&name=fonts/[name].[ext]'
	  },
	  {
	    test: /\.(ttf|eot|svg)(\?v=[0-9]\.[0-9]\.[0-9])?$/,
	    loader: 'file-loader?limit=10000&name=fonts/[name].[ext]'
	  },
	  { test: /\.(jpe?g|png|gif|svg)$/i, 
	  	loader: "file-loader?limit=10000&name=img/[name].[ext]"
	  }
  	]
  },
  plugins:[
    	new ExtractTextPlugin('./css/styles.css'),
    	new webpack.ProvidePlugin({
           $: "jquery",
           jQuery: "jquery"
       }),
    	new HtmlWebpackPlugin({
    		template: './src/index.html',
    		inject: 'body',
  	   })
  ]
};