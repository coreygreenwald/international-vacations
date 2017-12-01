module.exports = {
    entry: './client/index.js',
    output: {
      path: __dirname + '/public',
      filename: 'bundle.js'
    },
    devtool: 'source-map',
    module: {
      rules: [
        {
          test: /\.jsx?$/,
          exclude: /node_modules/,
          loader: 'babel-loader',
          options: {
            presets: ['react', 'es2015']
          }
        },
        {
          test: /\.scss$/,
          use: [
            'style-loader',
            'css-loader',
            'sass-loader'
          ]
        },
      ]
    }
  };