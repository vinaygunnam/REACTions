var gulp        = require("gulp")
    react       = require('gulp-react'),
    babel       = require("gulp-babel"),
    transform   = require('vinyl-transform'),
    browserify  = require("browserify"),
    watchify    = require("watchify"),
    connect     = require("gulp-connect"),
    watch       = require("gulp-watch"),
    ghPages     = require("gulp-gh-pages");

gulp.task("default", ["webserver", "copy"]);

gulp.task("watch", ["default", "copy-watch"], function() {
    watch(["dist/**/*.*"], function() {
        gulp.start("reload");
    });
});

gulp.task("jsx", jsx(false));
gulp.task("jsx-watch", jsx(true));

function jsx(shouldWatch) {
    return function() {
        return prepareStream("apps/**/*.jsx", shouldWatch)
                    .pipe(react({harmony: true, es6module: true}))
                    .pipe(babel())
                    .pipe(gulp.dest("apps"));
    };
}

gulp.task("copy", ["copy-html", "copy-js", "copy-assets"]);
gulp.task("copy-watch", ["copy-js-watch", "copy-html-watch", "copy-assets-watch"]);

gulp.task("copy-js", ["jsx"], copyJs(false));
gulp.task("copy-js-watch", ["jsx-watch"], copyJs(true));

function copyJs(shouldWatch) {
    return function() {
        // transform regular node stream to gulp (buffered vinyl) stream
        var browserified = transform(function(filename) {
            var b = browserify({entries: filename, debug: true});
            if (shouldWatch) {
                b = watchify(b);
            }
            return b.bundle();
        });
        
        return prepareStream("apps/**/App.js", false)
                .pipe(browserified)
                .pipe(gulp.dest("dist"));
    }
}

gulp.task("copy-html", copyHtml(false));
gulp.task("copy-html-watch", copyHtml(true));

function copyHtml(shouldWatch) {
    return function() {
        return prepareStream(["*.html","apps/**/*.html"], shouldWatch)
                .pipe(gulp.dest("dist"));
    }
}

gulp.task("copy-assets", copyAssets(false));
gulp.task("copy-assets-watch", copyAssets(true));

function copyAssets(shouldWatch) {
    return function() {
        prepareStream("css/**/*.*", shouldWatch)
                .pipe(gulp.dest("dist/css"));
        prepareStream("fonts/**/*.*", shouldWatch)
                .pipe(gulp.dest("dist/fonts"));
        prepareStream("images/**/*.*", shouldWatch)
                .pipe(gulp.dest("dist/images"));
        prepareStream("js/**/*.*", shouldWatch)
                .pipe(gulp.dest("dist/js"));
    }
}

function prepareStream(source, shouldWatch, watchSource) {
    var stream = gulp.src(source);
    
    if (shouldWatch) {
        stream = stream.pipe(watch(watchSource || source));
    }
    
    return stream;
}

gulp.task("webserver", function() {
    connect.server({
        livereload: true,
        root: "dist"
    });
});

gulp.task("reload", function() {
    gulp.src("index.html")
        .pipe(connect.reload());
});

gulp.task("deploy", function() {
    return gulp.src("dist/**/*")
                .pipe(ghPages());
});