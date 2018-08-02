import path from 'path';
import HtmlWebpackPlugin from 'html-webpack-plugin';
import MiniCssExtractPlugin from 'mini-css-extract-plugin';


module.exports = {
    context: path.resolve(__dirname, 'src'),
    entry: ["./index.js"],
    output: {
        path: path.join(__dirname, 'dist'),
        filename: "bundle.js",
    },
    watch: true,
    module: {
        rules: [{
          test: /\.scss$/,
          use: [
            {
              loader: MiniCssExtractPlugin.loader
            },
            'css-loader',
            'sass-loader',
          ]
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
      new HtmlWebpackPlugin({template: "./index.html", inject: true,}),
      new MiniCssExtractPlugin(),
    ],
};