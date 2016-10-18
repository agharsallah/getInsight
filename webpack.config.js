var config = {
   entry: './app/server/views/components/Index.js',
	
   output: {
      path:'./app/public/js/gulp/',
      filename: 'reactx.js',
   },
	
   devServer: {
      inline: true,
      port: 8080
   },
	
   module: {
      loaders: [
         {
            test: /\.jsx?$/,
            exclude: /node_modules/,
            loader: 'babel',
				
            query: {
               presets: ['es2015', 'react']
            }
         }
      ]
   }
}

module.exports = config;