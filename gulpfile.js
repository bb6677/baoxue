const gulp = require("gulp");
const sass = require("gulp-sass");
const connect = require("gulp-connect");
const sourcemaps = require("gulp-sourcemaps");

gulp.task("html", done => {
    gulp.src("*.html")
        .pipe(gulp.dest("dist"))
        .pipe(connect.reload());

    done();
});
gulp.task("font" ,done => {
    gulp.src("font1/**")
        .pipe(gulp.dest("dist"));
    done();
})
gulp.task("imgs", done => {
    gulp.src("imgs/**").pipe(gulp.dest("dist/imgs"));
    done();
})
gulp.task("sass", done => {
    gulp.src("sass/*.scss")
        .pipe(sourcemaps.init())
        .pipe(sass({
            outputStyle: 'compact'
        }))
        .pipe(sourcemaps.write())
        .pipe(gulp.dest("dist/css"))
        .pipe(connect.reload());

    done();
});
// gulp.task("css", done => {
//     gulp.src("myselfy.css").pipe(gulp.dest("dist/css"));
//     gulp.src("xin.css").pipe(gulp.dest("dist/css"));
//     gulp.src("bootstrap.css").pipe(gulp.dest("dist/css"));
//     gulp.src("iconfont.css").pipe(gulp.dest("dist/css"));

//     done();
// })
gulp.task("copyjss", done => {
    gulp.src("jquery.1.11.3.js").pipe(gulp.dest("dist"))
    done();
})
gulp.task("copyjs", done => {
    gulp.src("bootstrap.js").pipe(gulp.dest("dist"))
    done();
})
gulp.task("imm", done => {
    gulp.src("imm/**").pipe(gulp.dest("dist/imm"))
    done();
})
gulp.task("server", done => {
    connect.server({
        root: "dist",
        livereload: true
    })

    done();
});

gulp.task("build", gulp.series("copyjs","copyjss","html", "sass","imm","imgs"));

gulp.task("watch", done => {
    gulp.watch("*.html", gulp.series("html"));
    gulp.watch("sass/*.scss", gulp.series("sass"));
    done();
});

gulp.task("default", gulp.series("build", "server", "watch"));