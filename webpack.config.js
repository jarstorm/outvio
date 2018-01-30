const path = require('path');
var ExtractTextPlugin = require('extract-text-webpack-plugin');

module.exports = {
    entry: ['./src/App.js', './src/styles/wizard.scss'],
    output: {
        path: path.resolve(__dirname, 'dist'),
        filename: 'bundle.js'
    },
    module: {
        rules: [
            { 
                test: /\.jsx?$/, 
                loader: 'babel-loader', 
                exclude: /node_modules/,
                query: {
                    presets: ['react', 'es2015','stage-1']       
                }
            }, {
                test: /(\.css)$/,
                use: [
                    'style-loader',
                    'css-loader?modules&importLoaders=1',
                    'sass-loader'
                ]
            }, { // sass / scss loader for webpack
                test: /\.(sass|scss)$/,
                loader: ExtractTextPlugin.extract(['css-loader', 'sass-loader'])
            }
        ]
    },
    plugins: [
        new ExtractTextPlugin({ // define where to save the file
          filename: 'app.css',
          allChunks: true,
        }),
    ],
    devServer: {
        contentBase: path.resolve(__dirname, "dist")
    }
};