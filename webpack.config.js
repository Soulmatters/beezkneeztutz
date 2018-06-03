const {resolve, join} = require('path');
const isDev = process.argv.find(arg => arg.includes('webpack-dev-server'));
const outputPath = isDev ? resolve('src') : resolve('dist');
const OUTPUT_PATH = resolve('./dist');
const babelOptions = {
  presets: [
    require('babel-preset-env')
  ],
  plugins: [
    require('babel-plugin-syntax-dynamic-import'), 
    require('babel-plugin-transform-object-rest-spread'), [
    require('babel-plugin-transform-runtime'),
    {
      helpers: false,
      polyfill: false,
      regenerator: true
    }
  ]]
};

module.exports = {
  entry: './src/index.js',
  output: {
    path: outputPath,
    filename: 'bundle.js'
  },
  plugins: [
  //  new UglifyJsPlugin(),
  //  new GenerateSW({
  //   globDirectory: OUTPUT_PATH,
  //   globPatterns: ['**/!(*map*)'],
  //   globIgnores: ['**/sw.js'],
  //   swDest: join(OUTPUT_PATH, 'sw.js')
  // })
  ],
  module: {
    rules:
    [{
      test: /\.html$/,
      use: ['html-loader']
      },
      // If you see a file that ends in .js, just send it to the babel-loader.
      {
        test: /\.js$/,
        use: {
          loader: 'babel-loader',
          options: babelOptions
        }
      },      
      {
        test: /\.styl$/,
        use: [{
            loader: 'to-string-loader'
          },
          {
            loader: 'css-loader'
          },
          {
            loader: 'stylus-loader'
          }
         
        ]
      },
      {
        test: /\.css$/,
        use: [
          {
            loader: 'to-string-loader'
          },
          {
            loader: 'css-loader'
          }
        ]
      }
    ]
  },
  
  devServer: {
    contentBase: resolve(outputPath),
    compress: true,
    overlay: {
      errors: true
    },
    historyApiFallback: true,
    publicPath: '/',
    port: 5001,
    host: '0.0.0.0'
  }
};