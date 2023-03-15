const { defineConfig } = require('@vue/cli-service')
module.exports = defineConfig({
  transpileDependencies: true,
  pages: {
    index: {
      entry: './src/pages/Home/main.js',
      template: 'public/index.html',
      title: 'Index Page',
      chunks: ['chunk-vendors', 'chunk-common', 'index']
    },
    live: {
      entry: './src/pages/Live/main.js',
      template: 'public/index.html',
      title: 'Live Page',
      chunks: ['chunk-vendors', 'chunk-common', 'live']
    },
    archive: {
      entry: './src/pages/Archive/main.js',
      template: 'public/index.html',
      title: 'Archive Page',
      chunks: ['chunk-vendors', 'chunk-common', 'archive']
    },
    about: {
      entry: './src/pages/About/main.js',
      template: 'public/index.html',
      title: 'About Page',
      chunks: ['chunk-vendors', 'chunk-common', 'about']
    }
  }
})
