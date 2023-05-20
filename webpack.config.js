module.exports = {
    entry: __dirname + "src/index.js",

    output: {
        path: __dirname + "/dist",
        filename: "bundle.js"
    },
    module: {
        rules: [
            {
                test: /\.svg$/,
                use: [
                    {loader: 'svg-sprite-loader', options: {}},
                    {loader: 'svgo-loader',
                        options: {plugins:[{removeAttrs: {attrs: 'fill'}}]}
                    }
                ]
            },
        ]
    }
}