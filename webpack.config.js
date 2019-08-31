const path = require('path');
const h_w_p = require('html-webpack-plugin');

module.exports = {
	entry: {
		path: path.join(__dirname, './src/main.js')
	},
	output: {
		path: path.join(__dirname, './dist'),
		filename: 'bundle.js'
	},
	plugins: [
		new h_w_p({
			template: path.join(__dirname, './src/index.html'),
			filename: 'index.html'
		})
	],
	module: {
		rules: [
			{
				test: /\.css$/,
				use: [ 'style-loader', 'css-loader' ]
			},
			{
				test: /\.less$/,
				use: [ 'style-loader', 'css-loader', 'less-loader' ]
			},
			{
				test: /\.(jpg|jpeg|png|gif|bmp)$/,
				//以上多种后缀名都是用这个url-loader进行处理
				use: 'url-loader?limit=4000&name=[hash:8]-[name].[ext]'
				//同时还可以给loader加参数，加参数的方式和get方式url传参方式完全一样
				//limit参数用于表示图片的最大大小，单位为byte，如果文件大于这个值则以url方式访问，如果小于这个值则转换成base64编码
				//name参数用于表示图片的名称，[name]表示图片名称和原来的名称一样，[ext]表示扩展名和原来的一样,[hash:8]表示取hash值的前八位
			}, //用于处理图片的loader
			{
				test: /\.scss$/,
				use: [ 'style-loader', 'css-loader', 'sass-loader' ]
			},
			{
				test: /\.(ttf|eot|svg|woff|woff2)$/,
				use: 'url-loader'
				//处理字体文件的配置
			},
			{
				test: /\.js$/,
				use: 'babel-loader',
				exclude: /node_modules/
				//在配置babel的loader规则的时候，必须把 node_modules 目录通过exclude选项排除掉
				//原因有：
				//1.如果不排除node_modules，则Babel，会把 node_modules 中所有的第三方JS文件，都打包编译，这样会非常消耗资源
				//2.哪怕最终Babel把所有 node_modules 中的JS转换完毕了，但是项目也无法正常运行
			}
		]
	}
};
