## intallar webpack
npm install webpack webpack-cli -D

## para webpack lea nuestro proyecto
npx webpack
··crea un archivo dist··

## para activar el modod desarrollo
npx webpack --mode development

## para activar el modod produccion
npx webpack --mode production

## pasar la configuracion
··creamos la carpeta webpack.config y luego de configurarlo ejecutamos··
npx webpack --mode production --config webpack.config.js

## otra forma es en el archivo package.json agregar
··debajo de test··
"build": "webpack --mode production"

## ejecutar el comando de webpack
npm run build

## installar dependencias de babel
 npm install babel-loader @babel/core @babel/preset-env @babel/plugin-transform-runtime -D


## intallar plugin de html
 npm install html-webpack-plugin -D

## intallar plugin de css
 npm install mini-css-extract-plugin css-loader -D


 ## installar un preprosesador de stylus
npm install style-loader stylus-loader -D

## instalar un plugin para mover archivos o recursos que necesitemos mover
npm install copy-webpack-plugin -D

## ??
npm install url-loader file-loader -D

## Optimización: hashes, compresión y minificación de archivos
npm install css-minimizer-webpack-plugin terser-webpack-plugin -D

## variable de entorno
npm install dotenv-webpack -D

## plugin que elimina las copias de webpack y deja unicasmente los ultimo
npm install clean-webpack-plugin -D 
··en package.json agregar··
"build": "webpack --mode production --config webpack.config.js",

## netlify Web para deploy
https://app.netlify.com/sites/endearing-platypus-aac615/overview

## 
npm install webpack-bundle-analyzer -D

## Para guardar informacion desde la terminal
npx webpack --profile --json > stats.json

## para ver el recurso en una interfas grafica
npx webpack-bundle-analyzer stats.json