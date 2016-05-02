var webpack = require("webpack");




module.exports = {
    entry: './entry',
    output: {
        filename: 'bundle.js'
    },
    module: {
        loaders: [
          {
            test: /jquery[\\\/]src[\\\/]selector\.js$/,
            loader: 'amd-define-factory-patcher-loader' },
          {
            test: /\.jsx?$/,
            exclude: /(node_modules|bower_components)/,
            loader: 'babel?presets[]=es2015'
          },
          {
            test: /vendor\/.+\.(jsx|js)$/,
            loader: 'imports?jQuery=jquery,$=jquery,this=>window'
          }
        ]
    },
    plugins: [
        new webpack.ProvidePlugin({
          $: "jquery",
          jQuery: "jquery",
        })
    ]

};
