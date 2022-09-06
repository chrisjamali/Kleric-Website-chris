const path = require('path');
const HtmlWebpackPlugin = require('html-webpack-plugin');

module.exports = {
  mode: 'development',
  entry: path.join(__dirname, 'src', 'index.tsx'),
  output: {
    path: path.resolve(__dirname, 'dist'),
  },
  module: {
    rules: [
      //   {
      //     test: /\.?js$/,
      //     exclude: /node_modules/,
      //     use: {
      //       loader: "babel-loader",
      //       options: {
      //         presets: ['@babel/preset-env', '@babel/preset-react']
      //       }
      //     }
      //   },
      {
        test: /\.tsx?$/,
        use: 'ts-loader',
        // Use babel-loader w/ @babel/preset-typescript & react?
        exclude: /node_modules/,
      },
      {
        test: /\.(js|jsx)$/,
        exclude: /node_modules/,
        use: ['babel-loader'],
      },
       {
        test: /\.(s(a|c)ss)$/,
        // When in production mode use MiniCssExtractPlugin.loader instead of style-loader
        use: ['style-loader', 'css-loader', 'sass-loader'] // webpack applies loaders from last to first
      },
      {
        test: /\.(png|jp(e*)g|svg|gif)$/,
        use: ['file-loader'],
      },
      {
        test: /\.svg$/,
        use: ['@svgr/webpack'],
      },
    ],
  },
  resolve: {
    extensions: ['.tsx', '.ts', '.jsx', '.js'],
  },
  plugins: [
    new HtmlWebpackPlugin({
      template: path.join(__dirname, 'src', 'index.html'),
    }),
  ],
};
