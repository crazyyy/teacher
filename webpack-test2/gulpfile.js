'use strict';

var gulp            = require('gulp'),
    gulpLoadPlugins = require('gulp-load-plugins'),
    plugins         = gulpLoadPlugins(),
    webpack         = require('webpack'),
    ComponentPlugin = require("component-webpack-plugin"),
    info            = require('./package.json'),
    webpackCompiler;

    // require('gulp-grunt')(gulp); // add all the gruntfile tasks to gulp;

var config = {

  JS: {
    src: ["js/**/*.js"],
    build: "build/assets/js/",
    buildFiles: "build/assets/js/*.js"
  },

  HTML:{
    src: ['pages/**/*.hbs', 'templates/**/*.hbs'],
    build: "../",
    buildFiles: ["../*.html","../PT/*.html"]
  },

  SASS: {
    src: "sass/**/*.scss",
    build: "build/assets/css/"
  },

  IMAGES: {
    src: ["images/**/*.jpg", "!images/**/*.png"],
    build: "build/assets/images/",

    png: {
      src: "images/**/*.png",
      build: "build/assets/images/"
    }

  },

  ICONS: {
    src      : 'sass/app/components/icons/svg/*.svg',
    build    : 'build/assets/css/fonts/',
    fontname : 'icon'
  }

}

// SERVER ---------------------------------------------------------------------
gulp.task('connect', function() {
  plugins.connect.server({
    root: '../',
    port: 8000,
    livereload: false
  });
});


// SASS -----------------------------------------------------------------------
gulp.task('sass', function() {
  gulp.src( config.SASS.src )
    .pipe(plugins.plumber())
    .pipe(plugins.sass({
      outputStyle: 'compressed',
      }))
    .on("error", plugins.notify.onError())
    .on("error", function (err) {
      console.log("Error:", err);
    })
    .pipe( plugins.autoprefixer (
        "last 2 versions", "> 10%", "ie 9"
        ))
    .pipe( gulp.dest( config.SASS.build ) )
    .pipe( plugins.livereload() );
});


// WEBPACK --------------------------------------------------------------------
gulp.task('webpack', function(callback) {
  webpackCompiler.run(function(err, stats) {
    if (err) {
      throw new plugins.util.PluginError('webpack', err);
    }
    plugins.util.log('webpack', stats.toString({
      colors: true,
    }));
    callback();
  });
});

var webpackConfig = {
  cache: true,
  debug: true,
  progress: true,
  colors: true,
  devtool: 'source-map',
  entry: {
    main: './js/main.js',
  },
  output: {
    path: config.JS.build ,
    filename: '[name].bundle.js',
    chunkFilename: '[id].chunk.js',
    publicPath: '/build/js/',
  }
};

gulp.task('set-env-dev', function() {
  webpackConfig.plugins = [
    new webpack.BannerPlugin(info.name + '\n' + info.version + ':' + Date.now() + ' [development build]'),
    new ComponentPlugin()
  ];
  webpackCompiler = webpack( webpackConfig );
});

gulp.task('set-env-prod', function() {
  webpackConfig.debug = false;
  webpackConfig.devtool = "";
  webpackConfig.plugins = [
    new webpack.optimize.UglifyJsPlugin(),
    new ComponentPlugin()
  ];
  webpackCompiler = webpack( webpackConfig );
});


// BOWER ----------------------------------------------------------------------
gulp.task ('bower', function () {
  gulp.src ([
      './vendor/bower/owl.carousel/dist/owl.carousel.js'
    ])
    .pipe( plugins.concat("plugins.js") )
    .pipe( plugins.uglify() )
    .pipe( gulp.dest ( config.JS.build ) )
});


// JAVASCRIPT RELOADING -------------------------------------------------------
gulp.task('js', function () {
  gulp.src( config.JS.buildFiles )
    .pipe( plugins.livereload() );
});




// IMAGE OPTIMIZATION ---------------------------------------------------------

gulp.task('buildPNG', function () {
  gulp.src( config.IMAGES.png.src )
    .pipe( plugins.changed ( config.IMAGES.png.build ))
    .pipe( plugins.tinypng ('XXXXXXX'))
    .pipe( gulp.dest( config.IMAGES.png.build ) )
    .pipe( plugins.livereload() );
});

gulp.task('buildIMG', function () {
  gulp.src( config.IMAGES.src )
    .pipe( plugins.changed ( config.IMAGES.build ))
    .pipe( plugins.imagemin ({
      progressive: true,
      svgoPlugins: [{removeViewBox: false}]
    }))
    .pipe( gulp.dest( config.IMAGES.build ) )
    .pipe( plugins.livereload() );
});



// HTML TEMPORARIO --------------------------------------------------------------
gulp.task('html', function () {
  gulp.src( config.HTML.buildFiles )
    .pipe( plugins.livereload() );
});


// ICONS ----------------------------------------------------------------------
gulp.task('icons', function(){
  gulp.src([ config.ICONS.src ])
    .pipe( plugins.iconfontCss({
      fontName: config.ICONS.fontname,
      path: './sass/app/components/icons/_icons-template.scss',
      targetPath: '../../../.src/sass/app/components/icons/_icons.scss',
      fontPath: './fonts/',
    }))
    .pipe( plugins.iconfont({
      fontName: config.ICONS.fontname,
      fixedWidth: true,
      appendCodepoints: false
    }))
    .pipe(gulp.dest( config.ICONS.build ));
});


// GLOBAL TASKS ---------------------------------------------------------------

gulp.task('watch', function () {
  gulp.watch( config.HTML.src , ['grunt-assemble'] );
  gulp.watch( config.HTML.buildFiles , ['html'] );
  gulp.watch( config.JS.src , ["webpack"]);
  gulp.watch( config.JS.buildFiles , ["js"] );
  gulp.watch( config.IMAGES.png.src , ['buildPNG'] );
  gulp.watch( config.IMAGES.src , ['buildIMG'] );
  gulp.watch( config.SASS.src , ['sass']  );
});

gulp.task('default', ['prod'] );
gulp.task('dev', ['set-env-dev', 'connect', 'watch'] );
gulp.task('prod', ['set-env-prod', 'connect', 'watch'] );
