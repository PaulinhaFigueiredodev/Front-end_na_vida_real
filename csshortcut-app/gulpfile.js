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

// Qualquer alteracao que ocorra nos arquivos pug ou stylus, o gulp vai executar as tarefas correspondentes
function watchTask() {
    watch('./src/*.pug', pug)
    watch('./src/assets/styles/*.styl', stylus)
}

// Tarefa para iniciar o servidor de desenvolvimento
function serve() {
    connect.server({
        root: 'out/',
        livereload: true
    })
}

exports.server = parallel (watchTask, serve)

exports.build = series(pug, stylus);