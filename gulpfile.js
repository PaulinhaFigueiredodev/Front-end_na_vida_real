var { series } = require('gulp')

function demo(done) {
    console.log('demo')
    done();
}

function demo1(done) {
    console.log('demo 1')
    done();
}

exports.default = series(demo, demo1);