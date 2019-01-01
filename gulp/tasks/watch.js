var gulp=require("gulp"),
    watch=require("gulp-watch"),
    browserSync=require("browser-sync").create();

gulp.task("watch",function(){

    browserSync.init({
        browser: "chrome",
        notify: false,//not show the notifying message when the site is changing its display
        server:{
            baseDir:"app"
        }
    });

    watch("./app/index.html",function(){
       browserSync.reload();
    });

    watch("./app/assets/styles/**/*.css",function(){
        gulp.start("cssInject");
    });
});

gulp.task("cssInject", ["styles"],function(){
   //return gulp.src("./app/assets/styles/style.css")
   return gulp.src("./app/temp/styles/style.css")
        .pipe(browserSync.stream());
});
