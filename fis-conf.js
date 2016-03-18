fis.match('*', {
  release: '/web/$0'
});
fis.match('static/*',{
    isMod: false
})
fis.match('**/*.scss', {
    rExt: '.css', // from .scss to .css
    parser: fis.plugin('node-sass', {
        //fis-parser-sass option
    })
});
fis.match('*.png', {
  // fis-optimizer-png-compressor 插件进行压缩，已内置
  optimizer: fis.plugin('png-compressor')
});
fis.match('*.{css,scss}', {
    preprocessor: fis.plugin('px2rem', {
        // 设计稿实际宽度
        designWidth: 1000
    })
});