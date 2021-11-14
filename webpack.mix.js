const mix = require('laravel-mix');

mix
  .sourceMaps(true, 'source-map')
  .js('resources/js/main.js', 'dist/js')
  .sass('resources/scss/main.scss', 'dist/css')


//шрифты, картинки и библиотеки копирую в dist
mix.copy('resources/fonts', 'dist/fonts')
mix.copy('resources/img', 'dist/img')



