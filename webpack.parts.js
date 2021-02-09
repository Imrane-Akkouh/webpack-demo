const { WebpackPluginServe } = require('webpack-plugin-serve');

const { MiniHtmlWebpackPlugin } = require('mini-html-webpack-plugin');

const MiniCssExtractPlugin = require("mini-css-extract-plugin");

exports.devServer = () => ({
    watch: true,
    plugins: [
        new WebpackPluginServe({
            port: process.env.PORT || 8080,
            host: '127.0.0.1',
            static: "./dist",
            liveReload: true,
            waitForBuild: true,
        })
    ]
})

exports.page = (title) => ({
    plugins: [
        new MiniHtmlWebpackPlugin({ context: { title } })
    ]
})

exports.loadCSS = () => ({//loads css and inlines it with js but this prevents us from cashing styles
    module: {
        rules: [
            { test: /\.css$/, use: ["style-loader", "css-loader"] },
        ],
    },
});

exports.extractCSS = ({ options = {}, loaders = [] } = {}) => ({//extracts css and bundles it in a separate file
    module: {
        rules: [
            {
                test: /\.css$/,
                use: [{ loader: MiniCssExtractPlugin.loader, options }, "css-loader"].concat(loaders),
                sideEffects: true
            }
        ],
    },
    plugins: [
        new MiniCssExtractPlugin({
            filename: "[name].css",
        }),
    ],
});
