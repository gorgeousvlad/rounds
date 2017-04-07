'use strict';

const webpack  = require("webpack");

module.exports = {
	entry: "./main",
    output: {
        filename: "build.js"
    },

    watch:true,

    watchOptions:{

    	aggregateTimeout:100
    },

    devtool: "cheap-inline-module-source-map",

    plugins : [
        new webpack.DefinePlugin({
            LANG:JSON.stringify("ru")
        }),
        new webpack.LoaderOptionsPlugin({
         options: {
           resolveLoaders: {
                modulesDirectories:['node_modules'],
                moduleTemplates:['*-loader'],
                extensions:[' ','.js']
            }
         }
       }),
        new webpack.ProvidePlugin({
            $: "jquery",
            jQuery: "jquery",
            "window.jQuery": "jquery"
        })
    ],


    resolve:{
        extensions:[' ','.js']
    },


    module:{

        loaders:[
        {
                test: /\.scss$/,
                loaders: ['style-loader', 'css-loader', 'sass-loader']
        },
        {
            test:/\.js$/,
            loader:'babel-loader'
        },



        ]
    }
}
