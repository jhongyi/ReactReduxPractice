module.exports = {
	entry:[
		'./src/index.js'
	],
	output: {
		// 打包文件存放的絕對路徑
		path: __dirname,
		publicPath: '/',
		// 打包後的文件名
		filename: 'bundle.js'
	},
	module: {
		// loaders 則是放欲使用的 loaders，在這邊是使用 babel-loader 將所有 .js（這邊用到正則式）相關檔案（排除了 npm 安裝的套件位置 node_modules）
		// 轉譯成瀏覽器可以閱讀的 JavaScript。preset 則是使用的 babel 轉譯規則，這邊使用 react、es2015。
		// 若是已經單獨使用 .babelrc 作為 presets 設定的話，則可以省略 query ({ test: /\.js$/, loader: 'babel', query: {presets: ['es2015', 'react']}},)
		loaders: [
			{ test: /\.js$/, exclude: /node_modules/, loader: 'babel' },
			{ test: /\.css$/, loaders: ['style', 'css', 'sass']}
		],
	},
	resolve: {
		// Require 檔案的時候可以直接使用 require('file')，不用使用 require('file.js')
		extensions: ['', '.js', '.jsx']
	},
	// devServer 則是 webpack-dev-server 設定
	devServer: {
		historyApiFallback: true,
		contentBase: './',
		host: '0.0.0.0',
		port: 3000,
	}
};