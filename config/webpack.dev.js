const { merge } = require("webpack-merge");

const common = require("./webpack.common");

module.exports = merge(common, {
	mode: "development",

	devtool: "inline-source-map",

	devServer: {
		historyApiFallback: true,
		open: true,
		compress: true,
		hot: true,
		port: 8080,
	},

	module: {
		rules: [
			{
				test: /\.m?(sass|scss|css)$/,
				use: [
					"style-loader",
					{
						loader: "css-loader",
						options: {
							sourceMap: true,
							importLoaders: 1,
							modules: {
								localIdentName: "[name]__[local]--[hash:base64:5]",
							},
						},
					},
					{ loader: "postcss-loader", options: { sourceMap: true } },
					{ loader: "sass-loader", options: { sourceMap: true } },
				],
			},
		],
	},
});
