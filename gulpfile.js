var elixir = require('laravel-elixir')
require('laravel-elixir-html-minify')
require('laravel-elixir-livereload')
var gutils = require('gulp-util');
var  b = elixir.config.js.browserify;

if(gutils.env._.indexOf('watch') > -1){
    b.plugins.push({
        name: "browserify-hmr",
        options : {}
    });
}

b.transformers.push({
    name: "vueify",
    options : {}
});

elixir(function(mix) {
    mix.sass('app.scss');

    mix.browserify('app.js')

    mix.html('**/*.html', 'public', 'resources/assets/', {
        quotes: true,
        loose: true,
        empty: true
    });

    mix.browserSync({
        proxy: 'localhost:8080',
        files: [
            elixir.config.get('public.css.outputFolder') + '/**/*.css'
        ]
    })
});