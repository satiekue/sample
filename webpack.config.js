var TsConfigPathsPlugin = require('awesome-typescript-loader').TsConfigPathsPlugin;

module.exports = {
    context: __dirname,
    entry: {
        library: __dirname + '/src/index'
    },
    output: {
        library: 'mwf',
        libraryTarget: 'umd',
        path: __dirname + '/out',
        filename: 'MWF-main-2.js'
    },
    resolve: {
        // Add `.ts` and `.tsx` as a resolvable extension.
        extensions: ['', '.webpack.js', '.web.js', '.ts', '.tsx', '.js'],
        plugins: [
            new TsConfigPathsPlugin( './tsconfig.json')
        ]
    },
    module: {
        loaders: [{
            test: /\.ts$/,
            loader: 'awesome-typescript-loader',
            exclude: /node_modules/
        }]
    },

}