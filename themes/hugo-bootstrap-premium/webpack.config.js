const path = require('path');
const MiniCssExtractPlugin = require('mini-css-extract-plugin');
const BundleAnalyzerPlugin = require('webpack-bundle-analyzer').BundleAnalyzerPlugin;
const ContextReplacementPlugin = require('webpack/lib/ContextReplacementPlugin');

module.exports = {
  entry: {
    index: './scripts/index.js',
    'dmn-simulator': './scripts/dmn-simulator.js'
  },
  output: {
    filename: 'js/[name].js',
    path: path.resolve(__dirname, './static/')
  },
  //devtool: 'cheap-module-source-map',
  module: {
    rules: [
      {
        test: /\.js$/,
        use: {
          loader: 'babel-loader',
          options: {
            babelrc: false,
            plugins: [
              'inferno',
              'transform-object-rest-spread',
              'transform-class-properties'
            ],
            presets: [ 'env' ]
          }
        }
      },
      {
          test: /.*\.less$/,
          use:
          [{
             loader: 'style-loader'
           }, {
             loader: MiniCssExtractPlugin.loader
           },
           {
             loader: 'css-loader', options: { minimize: true }
           }, {
             loader: 'less-loader', options: {
               paths: [
                 path.resolve(__dirname, 'node_modules')
               ],
               relativeUrls: true
             }
           }]
      },
      {
            test: /\.(png|woff|woff2|eot|ttf|otf|svg)$/,
            loader: 'file-loader',
            options: {
              name: '/fonts/[name].[ext]'
          },

      },
      {
        test: /\.dmn$/,
        use: {
          loader: 'raw-loader'
        }
      }
    ]
  },
  plugins: [
    new MiniCssExtractPlugin({
     filename: '/css/[name].css',
   }),
   //new BundleAnalyzerPlugin(),
   new ContextReplacementPlugin(
     /moment[\/\\]locale$/,
    /de|en-gb|en/
  )
  ]
};
