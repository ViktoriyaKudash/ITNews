const path = require('path');
const webpack = require('webpack');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const merge = require('webpack-merge');
const devserver = require('./webpack/devserver');
const babel = require('./webpack/babel');
const sass = require('./webpack/sass');
const css = require('./webpack/css');
const extractCSS = require('./webpack/css.extract');
const uglifyJS = require('./webpack/js.uglify');
const html = require('./webpack/html');
const xml = require('./webpack/xml');
const images = require('./webpack/images');
const fonts = require('./webpack/fonts');

const PATHS = {
    source: path.join(__dirname, 'source'),
    build: path.join(__dirname, 'build')
};

const common = merge([
    {
        entry: {
            'common': PATHS.source + '/common/common.js',
            'index': PATHS.source + '/pages/index/index.js',
            'about': PATHS.source + '/pages/about/about.js',
            'single_1': PATHS.source + '/pages/single_1/single_1.js',
            'single_2': PATHS.source + '/pages/single_2/single_2.js',
            'single_3-1': PATHS.source + '/pages/single_3-1/single_3-1.js',
            'single_4': PATHS.source + '/pages/single_4/single_4.js',
            'single_3-1': PATHS.source + '/pages/single_3-1/single_3-1.js',
            'galereya': PATHS.source + '/pages/galereya/galereya.js',
            'new_1': PATHS.source + '/pages/new_1/new_1.js',
            'contact': PATHS.source + '/pages/contact/contact.js',
        },
        output: {
            path: PATHS.build,
            filename: 'js/[name].js'
        },
        plugins: [
            new HtmlWebpackPlugin({
                filename: 'index.html',
                chunks: ['index', 'common'],
                template: PATHS.source + '/pages/index/index.html'
            }),
            new HtmlWebpackPlugin({
                filename: 'about.html',
                chunks: ['about', 'common'],
                template: PATHS.source + '/pages/about/about.html'
            }),

            new HtmlWebpackPlugin({
                filename: 'single_1.html',
                chunks: ['single_1', 'common'],
                template: PATHS.source + '/pages/single_1/single_1.html'
            }),
            new HtmlWebpackPlugin({
                filename: 'single_2.html',
                chunks: ['single_2', 'common'],
                template: PATHS.source + '/pages/single_2/single_2.html'
            }),
            new HtmlWebpackPlugin({
                filename: 'single_3-1.html',
                chunks: ['single_3-1', 'common'],
                template: PATHS.source + '/pages/single_3-1/single_3-1.html'
            }),
            new HtmlWebpackPlugin({
                filename: 'single_4.html',
                chunks: ['single_4', 'common'],
                template: PATHS.source + '/pages/single_4/single_4.html'
            }),
            new HtmlWebpackPlugin({
                filename: 'galereya.html',
                chunks: ['galereya', 'common'],
                template: PATHS.source + '/pages/galereya/galereya.html'
            }),
            new HtmlWebpackPlugin({
                filename: 'new_1.html',
                chunks: ['new_1', 'common'],
                template: PATHS.source + '/pages/new_1/new_1.html'
            }),
            new HtmlWebpackPlugin({
                filename: 'contact.html',
                chunks: ['contact', 'common'],
                template: PATHS.source + '/pages/contact/contact.html'
            }),
            new webpack.optimize.CommonsChunkPlugin({
                name: 'common'
            }),
            new webpack.ProvidePlugin({
                $: 'jquery',
                jQuery: 'jquery'
            })
        ]
    },
    html(),
    xml(),
    images(),
    fonts()
]);

module.exports = function(env) {
    if (env === 'production'){
        return merge([
            common,
            extractCSS(),
            babel(),
            uglifyJS()
        ]);
    }
    if (env === 'development'){
        return merge([
            common,
            devserver(),
            sass(),
            babel(),
            css()
        ])
    }
};










