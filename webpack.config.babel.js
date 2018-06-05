import HtmlWebpackPlugin from 'html-webpack-plugin';
import CopyWebpackPlugin from 'copy-webpack-plugin';
import path from "path";

module.exports = {
    mode: 'development',
    context: path.resolve(__dirname, 'src'),
    entry: ["./index.js", "./index.html"],
    output: {
        path: path.join(__dirname, 'dist'),
        filename: "bundle.js",
    },
    watch: true,
    module: {
        rules: [{
            test: /\.scss$/,
            loader: 'style-loader!css-loader!sass-loader',
        },  {
            test: /\.(png|jpg|gif)$/,
            use: [
                {
                    loader: 'file-loader',
                    options: {
                        name: '[path][name].[ext]'
                    }
                }
            ]
        }, {
            test: /\.(html)$/,
            use: {
                loader: 'html-loader',
                options: {

                }
            }
        }
        ]
    },
    plugins: [
        new HtmlWebpackPlugin({template: "./index.html", inject: true,})
    ],
};