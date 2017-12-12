#pokemon-poc

##Information
This repo follows a tutorial by [Sergio Zamarro](https://github.com/zamarrowski/pokemon-poc) based on a tutorial he wrote on [Medium](https://medium.com/@zamarrowski/angular-1-x-component-based-application-with-webpack-and-es6-dfab450f2df4)

##Changes
Here were the changes I needed to make in order for my code to work

* In webpack.config.js: 
 * If './bin' doesn't work for you, set path to __dirname + '/bin'
 * Change html to html-loader, so it looks like { test: /\.html$/, loader: 'html-loader'},
* Make sure to use quotes for the start script
 * "start": "concurrently 'lite-server' 'webpack --watch'"
 * or
 * "start": "concurrently \"lite-server\" \"webpack --watch\""
* When following the medium post, be careful when naming pokesmon.service.js (not pokemons.services.js)
* When you get to this line in the blog post, "And import in pokemons.module.js", he means "pokemons/index.js"