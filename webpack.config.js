
const markup = {
    test: /\.html$/,
    loaders: ['ngtemplate-loader', 'html-loader']
};

const scripts = {
    test: /\.js$/,
    exclude: /src\/app/,
    loaders: ['uglify-loader', 'ng-annotate-loader', 'babel-loader?presets[]=es2015']
};

module.exports = {
    devtool: 'sourcemap',
    module: {
        loaders: [scripts, markup]
    },
    plugins: []
};