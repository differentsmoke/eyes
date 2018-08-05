const HTMLWebpackPlugin = require("html-webpack-plugin");
const path = require("path");

const mode =
    process.env.npm_lifecycle_event === "build" ? "production" : "development";

const html = new HTMLWebpackPlugin({
    title: "I'm watching you",
    template: __dirname + "/src/index.ejs"
});

config = {
    mode,
    entry: "./src/index.js",
    output: {
        path: __dirname, // + "/dist/",
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
