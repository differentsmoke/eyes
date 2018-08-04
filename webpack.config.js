const HTMLWebpackPlugin = require("html-webpack-plugin");
const path = require("path");

const mode = process.env;

const html = new HTMLWebpackPlugin({
    title: "I'm watching you"
});

console.log(mode);

config = {
    mode: "development",
    entry: "./src/index.js",
    output: {
        path: __dirname + "/dist/",
        filename: "app.js"
    },
    devServer: {
        open: true
    },
    module: {
        rules: [
            {
                test: /\.css/,
                include: [path.resolve(__dirname, "src")],
                exclude: [path.resolve(__dirname, "node_modules")],
                loader: ["style-loader", "css-loader"]
            }
        ]
    },
    plugins: [html]
};

module.exports = config;
