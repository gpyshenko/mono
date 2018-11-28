const { paths } = require('../config');
const { gulp, gulpif, argv, connect, plumber, sourcemaps } = require('../plugins/tools');

module.exports = function() {
    return function (cb) {
        gulp.src(`${paths.src}/**/*.js`)
            .pipe(plumber())
            .pipe(gulpif(argv.dev, sourcemaps.init()))
            .pipe(gulpif(argv.dev, sourcemaps.write(paths.maps)))
            .pipe(gulp.dest(paths.dist))
            .pipe(connect.reload());
        cb();
    }
}