 const path = require('path');
    const webpack = require('webpack');

module.exports = {
 devtool: 'eval',
context: __dirname,
entry: [
    'webpack-hot-middleware/client?path=/__webpack_hmr&timeout=20000',
    './app/server/views/components/Index.js'
],
module: {
    loaders: [{
            test: /\.js$/,           
             exclude: /node_modules/,
            loaders: ['react-hot', 'babel']
	   
         },
        {
            // Test expects a RegExp! Note the slashes!
            test: /\.css$/,
            loaders: ['style', 'css'],
            // Include accepts either a path or an array of paths.
            include: path.join(__dirname, 'app/public/css')
        }
    ]
},
resolve: {
    extensions: ['', '.js', '.jsx']
},
output: {
    path: __dirname + 'app/public',
    publicPath: '/',
    filename: 'js/gulp/reactx.js'
},
plugins: [
    new webpack.optimize.OccurenceOrderPlugin(),
    new webpack.HotModuleReplacementPlugin(),
    new webpack.NoErrorsPlugin()
]
};