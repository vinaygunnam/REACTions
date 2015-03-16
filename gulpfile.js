var gulp        = require("gulp")
    react       = require('gulp-react'),
    babel       = require("gulp-babel"),
    transform   = require('vinyl-transform'),
    browserify  = require("browserify"),
    connect     = require("gulp-connect"),
    watch       = require("gulp-watch");

gulp.task("default", ["webserver", "bundle"]);

gulp.task("watch", ["default"], function() {
    watch("apps/src/**/*.jsx", function() {
        gulp.start("bundle");
    });
    
    watch(["**/*.html", "apps/build/**/App.js"], function() {
        gulp.start("reload");
    });
});

gulp.task("jsx", function() {
    return gulp.src("apps/src/**/*.jsx")
                .pipe(react({harmony: true, es6module: true}))
                .pipe(babel())
                .pipe(gulp.dest("apps/src"));
})

gulp.task("bundle", ["jsx"], function() {
    // transform regular node stream to gulp (buffered vinyl) stream 
    var browserified = transform(function(filename) {
        var b = browserify({entries: filename, debug: true});
        return b.bundle();
    });
    
    return gulp.src("apps/src/**/App.js")
                .pipe(browserified)
                .pipe(gulp.dest("apps/build"));
});

gulp.task("webserver", function() {
    connect.server({
        livereload: true
    });
});

gulp.task("reload", function() {
    gulp.src("index.html")
        .pipe(connect.reload());
})