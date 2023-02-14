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
      template: 'public/live.html',
      title: 'Live Page',
      chunks: ['chunk-vendors', 'chunk-common', 'live']
    },
    archive: {
      entry: './src/pages/Archive/main.js',
      template: 'public/archive.html',
      title: 'Archive Page',
      chunks: ['chunk-vendors', 'chunk-common', 'archive']
    }
  }
})
