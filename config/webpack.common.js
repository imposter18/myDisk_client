const { CleanWebpackPlugin } = require("clean-webpack-plugin");
const CopyWebpackPlugin = require("copy-webpack-plugin");
const HtmlWebpackPlugin = require("html-webpack-plugin");

const paths = require("./paths");

module.exports = {
	entry: ["@babel/polyfill", paths.src + "/index.jsx"],

	output: {
		path: paths.build,
		filename: "[name].bundle.js",
		publicPath: "/",
	},

	plugins: [
		new CleanWebpackPlugin(),

		new CopyWebpackPlugin({
			patterns: [
				{
					from: paths.public,
					to: "assets",
					globOptions: {
						ignore: ["*.DS_Store"],
					},
					noErrorOnMissing: true,
				},
			],
		}),

		new HtmlWebpackPlugin({
			template: paths.src + "/index.html",
			title: "webpack Boilerplate",
			favicon: paths.src + "/images/favicon.ico",
			filename: "index.html", // output file
		}),
	],

	module: {
		rules: [
			{ test: /\.js$/, use: ["babel-loader"], exclude: /node_modules/ },
			{
				test: /\.jsx$/,
				exclude: /node_modules/,
				use: {
					loader: "babel-loader",
					options: {
						presets: ["@babel/preset-env", "@babel/preset-react"],
					},
				},
			},

			{ test: /\.(?:ico|gif|png|jpg|jpeg)$/i, type: "asset/resource" },

			{ test: /\.(woff(2)?|eot|ttf|otf|svg|)$/, type: "asset/inline" },
		],
	},

	resolve: {
		modules: [paths.src, "node_modules"],
		extensions: [".js", ".jsx", ".json"],
		alias: {
			"@": paths.src,
			assets: paths.public,
		},
	},
};
