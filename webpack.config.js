module.exports = {
    entry: ["./src/app.js"],
    output: {
        path: __dirname + '/dist',
        publicPath: 'dist/',
        filename: "app.bundle.js",
        hot: false
    },
    module: {
        //preLoaders: [
        //    {
        //        test: /\.js$/, // include .js files
        //        exclude: /node_modules/, // exclude any and all files in the node_modules folder
        //        loader: "jshint-loader"
        //    }
        //],
        loaders: [
            { test: /\.scss/, loader: "style!css!autoprefixer!sass?outputStyle=expanded" }
        ]
    },
    plugins: [
    ]
};