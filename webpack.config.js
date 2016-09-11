module.exports = {
    entry: './build/scripts/index.jsx',
    output: {
        path: './public',
        filename: 'app.js'
    },
    module: {
        loaders: [
            {
              test: /\.jsx?$/,         // Match both .js and .jsx files
              exclude: /node_modules/, 
              loader: "babel", 
              query:
              {
                presets:['react']
              }
            }
        ]
    },
    externals: {
        //don't bundle the 'react' npm package with our bundle.js
        //but get it from a global 'React' variable
        'react': 'React'
    },
    resolve: {
        extensions: ['', '.js', '.jsx']
    }
}