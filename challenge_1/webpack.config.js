

module.exports = {
    "mode": "development",
    "entry": "./client",
    "output": {
        "path": __dirname + '/public',
        "filename": "bundle.js"
    },
    "module": {
        "rules": [
            {
                "test": /\.js$/,
                "exclude": /node_modules/
            },
            {
                "test": /\.(js|jsx)$/,
                "exclude": /node_modules/,
                "use": {
                    "loader": "babel-loader"
                }
            },
            {
                "test": /\.css$/,
                "use": [
                    "style-loader",
                    "css-loader"
                ]
            }
        ]
    },
}