const path = require('path')
const { defineConfig } = require('vite')

module.exports = defineConfig({
  build: {
    lib: {
      entry: path.resolve(__dirname, 'src/index.js'),
      name: 'wave-audio-path-player',
      fileName: (format) => `wave-audio-path-player.${format}.js`
    }
 }
});
