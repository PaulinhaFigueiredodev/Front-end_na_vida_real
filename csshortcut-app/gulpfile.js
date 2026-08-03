var { series, src, parallel, dest, watch } = require('gulp')
var pugPlugin = require ('gulp-pug')
var stylusPlugin = require('gulp-stylus')
var connect = require('gulp-connect')

// Tarefa para compilar os arquivos Pug e Stylus
function pug() {
     return src('./src/*.pug')
            .pipe(pugPlugin())
            .pipe(dest('./out'))
            .pipe(connect.reload()) // Atualiza o navegador automaticamente quando os arquivos Pug forem compilados
}

function stylus() {
     return src('./src/assets/styles/*.styl')
            .pipe(stylusPlugin())
            .pipe(dest('./out/assets/styles/'))
            .pipe(connect.reload()) // Atualiza o navegador automaticamente quando os arquivos Stylus forem compilados
}

function imagemin() {
    return src('./src/assets/img/*', { encoding: false })
    .pipe(dest('./out/assets/img/'))
}

function scripts() {
    return src('./src/assets/scripts/*.js')
        .pipe(dest('./out/assets/scripts/'))
        .pipe(connect.reload())
}

// Qualquer alteracao que ocorra nos arquivos pug ou stylus, o gulp vai executar as tarefas correspondentes
function watchTask() {
    watch('./src/*.pug', pug)
    watch('./src/layouts/*.pug', pug)
    watch('./src/partials/*.pug', pug)
    watch('./src/assets/styles/*.styl', stylus)
    watch('./src/assets/scripts/*.js', scripts)
}

// Tarefa para iniciar o servidor de desenvolvimento
function serve() {
    connect.server({
        root: 'out/',
        livereload: true
    })
}

exports.server = parallel (watchTask, serve)

exports.build = series(pug, stylus, scripts, imagemin);
