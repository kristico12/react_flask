var webpack = require('webpack');
module.exports = {
    entry: "./React/app.jsx",
    output: {
        path: __dirname + '/static',
        filename: "bundle.js"
    },
    module: {
        rules: [{
            test: /\.jsx?$/,
            use: [{
                loader: 'babel-loader',
            }],
            exclude: /node_modules/
        }]
    },
};
