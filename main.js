import './style.css'
import './src/index.js'
document.querySelector('#app').innerHTML = `
  <h1 class="title">Wave Audio Path Player</h1>
  <h3 class="title">Webcomponent</h3>
  <p>Simple webcomponent customizable with waveform.</p>
  <p>Created with <a href="https://jerosoler.github.io/waveform-path/" target="_blank">waveform-path</a> by <a href="https://github.com/jerosoler" target="_blank">Jero Soler</a>.</p>
  <p>Install instruccions on <a href="https://github.com/jerosoler/wave-audio-path-player">Github</a></p>
  <h3>Default</h3>
  <wave-audio-path-player src="hello_world.ogg" wave-width="200" wave-height="40"></wave-audio-path-player>

  <h3>Animation</h3>
  <wave-audio-path-player src="hello_world.ogg" wave-width="200" wave-height="40" wave-options='{"animation":true,"samples":50}'></wave-audio-path-player>

  <h3>Customized Attributes</h3>
  <wave-audio-path-player src='hello_world.ogg' wave-width="200" wave-height="40" color="#55007f" wave-color="#55007f" wave-progress-color="#ff00ff" wave-slider="#ffaaff" wave-options='{"samples":40,"type":"steps","width":192,"height":40}'></wave-audio-path-player>

  <wave-audio-path-player src='hello_world.ogg' wave-width="200" wave-height="80" color="#00aa7f" wave-color="#00aa7f" wave-progress-color="#aaff00" wave-slider="#00aa00" wave-options='{"samples":50,"type":"steps","paths":[{"d":"V","sy":0,"x":0,"ey":100},{"d":"A","sx":0,"sy":100,"ex":100,"ey":100,"rx":10,"ry":10,"angle":180,"arc":1,"sweep":1},{"d":"V","sy":0,"x":100,"ey":100}]}'></wave-audio-path-player>

  <h3>Customized CSS</h3>
  <wave-audio-path-player id="demo1" src="hello_world.ogg" wave-width="200" wave-height="40"></wave-audio-path-player>

  <wave-audio-path-player id="demo2" src="hello_world.ogg" wave-width="200" wave-height="40"></wave-audio-path-player>
  <footer>
  <p><a href="https://twitter.com/jerosoler">Jero Soler</a> - <a href="https://github.com/jerosoler/wave-audio-path-player">Github</a></p>
  </footer>
`

