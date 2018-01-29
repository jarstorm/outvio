const path = require('path');

module.exports = {
    entry: './src/App.js',
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
            }
        ]
    },
    devServer: {
        contentBase: path.resolve(__dirname, "dist")
    }
};