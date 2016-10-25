    const path = require('path');
    const webpack = require('webpack');
    const notifier = require('node-notifier');

module.exports = {

    entry:  [
                './app/server/views/components/Index.js'
            ],
    
    module: {
            loaders:    [{
                            test: /\.js$/,           
                             exclude: /node_modules/,
                            loaders: ['babel']
                   
                        }]
    },

    resolve: {
                extensions: ['', '.js', '.jsx']
    },

    output: {
                path:'./app/public/js/gulp/',
                filename: 'reactx.js'
    }
    

};