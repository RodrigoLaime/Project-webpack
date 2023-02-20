//Añadir nuestro plugin
const path = require("path");
const HtmlWebpackPlugin = require("html-webpack-plugin");
const MiniCssExtractPlugin = require("mini-css-extract-plugin");
const CopyPlugin = require('copy-webpack-plugin');
const Dotenv = require('dotenv-webpack');
const BundleAnalizerPlugin = require('webpack-bundle-analyzer')

module.exports = {
  //punto de entrada
  entry: "./src/index.js",
  //hacia donde enviamos el webpack, donde se va a guardar
  output: {
    path: path.resolve(__dirname, "dist"),
    filename: "[name].[contenthash].js",
    assetModuleFilename: 'assts/images/[hash][ext][query]'
  },
  mode: 'development',
  resolve: {
    //extension a usar
    extensions: [".js"],
    alias: {
        '@utils': path.resolve(__dirname, 'src/utils/'),
        '@templates': path.resolve(__dirname, 'src/templates/'),
        '@styles': path.resolve(__dirname, 'src/styles/'),
        '@images': path.resolve(__dirname, 'src/assets/images/'),
    }
  },
  module: {
    //crear el loader o la configuracion para nuestro loader de html y css
    rules: [
      {
        //cualquier archivo que enpiese con m o js
        test: /\.m?js$/,
        //que no utilice nada de node modules
        exclude: /node_modules/,
        use: {
          loader: "babel-loader",
        },
      },
      {
        //reconocer los archivos css y tambien los stylus
        test: /\.css|.styl$/i,
        use: [MiniCssExtractPlugin.loader, "css-loader", "stylus-loader"],
      },
      {
        //trabajar con las imagenes
        test: /\.png/,
        type: 'asset/resource'
      },
      {
        //trabajar con las fuentes
        test: /\.(woff|woff2)$/,
        use: {
          loader: 'url-loader',
          options: {
            limit: 10000,
            mimetypw: "application/font-woff",
            name: "[name].[contenthash].[ext]",
            outputPath: "./assets/fonts/",
            publicPath: "../assets/fonts/",
            esModule: false,          }
        }
      }
    ],
  },
  
  //utilizacion de nuestro recurso o plugin para el html o css para diferentes documentos
  plugins: [
    new HtmlWebpackPlugin({
      inject: true,
      template: "./public/index.html",
      filename: "./index.html",
    }),
    new MiniCssExtractPlugin({
      filename: 'assets/[name].[contenthash].css'
    }),
    new CopyPlugin({
      //elementos a usar
      patterns: [
        {
          //desde donde y hacia donde se va  a mover
          from: path.resolve(__dirname, "src", "assets/images"),
          to: "assets/images"
        }
      ]
    }),
    new Dotenv(),
    new BundleAnalizerPlugin(),
  ],
  devServer: {
    static: path.join(__dirname, 'dist'),
    compress: true,
    historyApiFallback: true,
    port: 8080,
    open: true,
  },
};
