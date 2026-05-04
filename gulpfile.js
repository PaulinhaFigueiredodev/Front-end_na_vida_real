var { series, src, dest } = require('gulp')
var pugPlugin = require ('gulp-pug')

function pug() {
    return src('./src/*.pug')
    .pipe(pugPlugin())
    .pipe(dest('./out'))
} 
exports.default = series(pug);