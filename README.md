[![npm](https://img.shields.io/npm/v/wave-audio-path-player?color=green)](https://www.npmjs.com/package/wave-audio-path-player)
![npm](https://img.shields.io/npm/dy/wave-audio-path-player)
![npm bundle size](https://img.shields.io/bundlephobia/minzip/wave-audio-path-player)
[![GitHub license](https://img.shields.io/github/license/jerosoler/wave-audio-path-player)](https://github.com/jerosoler/wave-audio-path-player/blob/master/LICENSE)
[![Twitter URL](https://img.shields.io/twitter/url?style=social&url=https%3A%2F%2Ftwitter.com%2Fjerosoler)](https://twitter.com/jerosoler)

# wave-audio-path-player

![Image demo](https://github.com/jerosoler/wave-audio-path-player/raw/master/docs/wave-audio-path-player.png)


Simple audio player webcomponent customizable with waveform.
Created with [waveform-path](https://jerosoler.github.io/waveform-path/).

[Live Demo](https://jerosoler.github.io/wave-audio-path-player/)

## Installation

```bash
npm i wave-audio-path-player
```


## Usage

### Import
```javascript
import 'wave-audio-path-player'
```

### Hosted
```html
<script type="module" src="YOUR_PATH/wave-audio-path-player.umd.js"></script>
```

### Using 
```html
<!-- Basic -->
<wave-audio-path-player src="hello_world.ogg" wave-width="200" wave-height="40"></wave-audio-path-player>

<!-- Complete -->
<wave-audio-path-player src='hello_world.ogg' wave-width="200" wave-height="40" color="#55007f" wave-color="#55007f" wave-progress-color="#ff00ff" wave-slider="#ffaaff" wave-options='{"samples":40,"type":"steps","width":192,"height":40}'></wave-audio-path-player>
```

### Custom CSS
```css
wave-audio-path-player {
  margin-top: 10px;
  margin-bottom: 10px;
}

#demo1::part(player) {
  background:rgb(0, 0, 0);
  padding: 15px 0px;
  border-radius: 20px;
  border:1px solid black;
}

#demo1::part(button) {
  stroke: white;
  fill:white;
}

#demo1::part(currenttime), #demo1::part(duration) {
  color:white;
  font-weight: bold;
}

#demo1::part(path1) {
  stroke: white;
}

#demo1::part(path2) {
  stroke:fuchsia;
}
```

### Attributes
Name | Required | Type | Description
--- | --- | --- | --- 
src | True | audio file | Source path to audio file
wave-width | True | px | Number of pixels
wave-height | True | px | Number of pixels
color | False | color | Color of elements
wave-color | False | color | Color of wave incomplete (Only for wave-option "animation":false)
wave-progess-color | False | color | Color of wave complete or animation
wave-slider | False | color | Color of slider thumb
wave-options | False | object | Object of waveform-path (width and height is replaced for wave-width and wave-height)