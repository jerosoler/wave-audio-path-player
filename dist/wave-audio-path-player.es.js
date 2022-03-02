var __defProp = Object.defineProperty;
var __defNormalProp = (obj, key, value) => key in obj ? __defProp(obj, key, { enumerable: true, configurable: true, writable: true, value }) : obj[key] = value;
var __publicField = (obj, key, value) => {
  __defNormalProp(obj, typeof key !== "symbol" ? key + "" : key, value);
  return value;
};
const getAudioData = (e) => {
  window.AudioContext = window.AudioContext || window.webkitAudioContext;
  const a = new AudioContext();
  return fetch(e).then((e2) => e2.arrayBuffer()).then((e2) => a.decodeAudioData(e2)).catch((e2) => {
    console.error(e2);
  });
}, linearPath = (e, a) => {
  var _a, _b, _c;
  const { channel: t = 0, samples: v = e.length, height: h = 100, width: r = 800, top: s = 0, left: l = 0, type: i = "steps", paths: $ = [{ d: "Q", sx: 0, sy: 0, x: 50, y: 100, ex: 100, ey: 0 }], animation: o = false, animationframes: n = 10, normalize: b = true } = a;
  var a = getFramesData(e, t, o, n), e = getFilterData(a, v), w = b ? getNormalizeData(e) : e;
  let c = "";
  var p, f, g = i != "bars" ? (h + 2 * s) / 2 : h + s, m = r / v, y = $.length, u = i == "mirror" ? 2 * y : y, A = w.length;
  for (let n2 = 0; n2 < A; n2++) {
    0 < n2 && (p = c.length, f = c.charAt(p - 1), c += f == ";" || p === 0 ? " M 0 0 ;" : ";");
    let s2 = -9999, o2 = -9999;
    for (let r2 = 0; r2 < v; r2++) {
      var M = i == "bars" || r2 % 2 ? 1 : -1;
      let t2 = 1;
      for (let e2 = 0; e2 < u; e2++) {
        let a2 = e2;
        e2 >= y && (a2 = e2 - y, t2 = -1), $[a2].minshow = (_a = $[a2].minshow) != null ? _a : 0, $[a2].maxshow = (_b = $[a2].maxshow) != null ? _b : 1, $[a2].normalize = (_c = $[a2].normalize) != null ? _c : false;
        var d = $[a2].normalize ? 1 : w[n2][r2];
        if ($[a2].minshow <= w[n2][r2] && $[a2].maxshow >= w[n2][r2])
          switch ($[a2].d) {
            case "L":
              var D = r2 * m + m * $[a2].sx / 100 + l, x = g + d * $[a2].sy / 100 * (i != "bars" ? h / 2 : h) * -M * t2, k = r2 * m + m * $[a2].ex / 100 + l, z = g + d * $[a2].ey / 100 * (i != "bars" ? h / 2 : h) * -M * t2;
              D === s2 && x === o2 || (c += `M ${D} ${x} `), c += `L ${k} ${z} `, s2 = k, o2 = z;
              break;
            case "H":
              D = r2 * m + m * $[a2].sx / 100 + l, x = g + d * $[a2].y / 100 * (i != "bars" ? h / 2 : h) * -M * t2, k = r2 * m + m * $[a2].ex / 100 + l;
              D === s2 && x === o2 || (c += `M ${D} ${x} `), c += `H ${k} `, s2 = k, o2 = x;
              break;
            case "V":
              var z = r2 * m + m * $[a2].x / 100 + l, C = g + d * $[a2].sy / 100 * (i != "bars" ? h / 2 : h) * -M * t2, F = g + d * $[a2].ey / 100 * (i != "bars" ? h / 2 : h) * -M * t2;
              z === s2 && C === o2 || (c += `M ${z} ${C} `), c += `V ${F} `, s2 = z, o2 = F;
              break;
            case "C":
              var C = r2 * m + m * $[a2].sx / 100 + l, F = g - g * $[a2].sy / 100 * M, Q = r2 * m + m * $[a2].x / 100 + l, P = g + d * $[a2].y / 100 * (i != "bars" ? h : 2 * h) * -M * t2, L = r2 * m + m * $[a2].ex / 100 + l, Z = g - g * $[a2].ey / 100 * M;
              C === s2 && F === o2 || (c += `M ${C} ${F} `), c += `C ${C} ${F} ${Q} ${P} ${L} ${Z} `, s2 = L, o2 = Z;
              break;
            case "Q":
              var Q = r2 * m + m * $[a2].sx / 100 + l, P = g + d * $[a2].sy / 100 * (i != "bars" ? h / 2 : h) * -M * t2, L = r2 * m + m * $[a2].x / 100 + l, Z = g + d * $[a2].y / 100 * (i != "bars" ? h : 2 * h) * -M * t2, N = r2 * m + m * $[a2].ex / 100 + l, H = g + d * $[a2].ey / 100 * (i != "bars" ? h / 2 : h) * -M * t2;
              Q === s2 && P === o2 || (c += `M ${Q} ${P} `), c += `Q ${L} ${Z} ${N} ${H} `, s2 = N, o2 = H;
              break;
            case "A": {
              var N = r2 * m + m * $[a2].sx / 100 + l, H = g + d * $[a2].sy / 100 * (i != "bars" ? h / 2 : h) * -M * t2, V = r2 * m + m * $[a2].ex / 100 + l, B = g + d * $[a2].ey / 100 * (i != "bars" ? h / 2 : h) * -M * t2, I = (N === s2 && H === o2 || (c += `M ${N} ${H} `), $[a2].rx * m / 100), R = $[a2].ry * m / 100;
              let e3 = $[a2].sweep;
              M == -1 && (e3 = e3 == 1 ? 0 : 1), t2 == -1 && (e3 = e3 == 1 ? 0 : 1), c += `A ${I} ${R} ${$[a2].angle} ${$[a2].arc} ${e3} ${V} ${B} `, s2 = V, o2 = B;
              break;
            }
            case "Z":
              c += "Z ";
          }
      }
    }
  }
  return c;
}, getFramesData = (e, a, t, r) => {
  const s = e.getChannelData(a), o = [];
  if (t) {
    var n = e.sampleRate / r;
    for (let e2 = 0; e2 < s.length; e2 += n) {
      var h = s.slice(e2, e2 + n);
      o.push(h);
    }
  } else
    o.push(s);
  return o;
}, getFilterData = (r, a) => {
  const e = [];
  var s = r.length;
  for (let t = 0; t < s; t++) {
    var o = Math.floor(r[t].length / a);
    const h = [];
    for (let e2 = 0; e2 < a; e2++) {
      var n = o * e2;
      let a2 = 0;
      for (let e3 = 0; e3 < o; e3++)
        a2 += Math.abs(r[t][n + e3]);
      h.push(a2 / o);
    }
    e.push(h);
  }
  return e;
}, getNormalizeData = (a) => {
  const t = [];
  var r = a.length;
  for (let e = 0; e < r; e++) {
    var s = Math.max(...a[e]);
    t.push(s);
  }
  const o = Math.pow(Math.max(...t), -1), n = [];
  for (let e = 0; e < r; e++) {
    var h = a[e].map((e2) => e2 * o);
    n.push(h);
  }
  return n;
};
class AudioPathPlayer extends HTMLElement {
  constructor() {
    super();
    __publicField(this, "loadSong", () => {
      this.durationContainer.textContent = this.calculateTime(this.audio.duration);
      this.seekSlider.max = this.audio.duration;
      this.svg.unpauseAnimations();
      this.animationsvg.setAttribute("dur", "" + this.audio.duration + "s");
      if (!this.animation) {
        this.animationsvgx.setAttribute("dur", "" + this.audio.duration + "s");
      }
      this.svg.pauseAnimations();
      this.svg.setCurrentTime(0);
    });
    __publicField(this, "playPause", () => {
      if (this.audio.paused) {
        this.audio.play();
        this.svg.unpauseAnimations();
        this.path2.style.display = "block";
        this.playPathButton.setAttribute("d", this.pausePath);
        this.raf = requestAnimationFrame(this.whilePlaying);
      } else {
        this.audio.pause();
        this.svg.pauseAnimations();
        this.playPathButton.setAttribute("d", this.playPath);
        cancelAnimationFrame(this.raf);
      }
    });
    __publicField(this, "sliderInput", () => {
      this.path2.style.display = "block";
      this.currentTimeContainer.textContent = this.calculateTime(this.seekSlider.value);
      this.svg.setCurrentTime(this.seekSlider.value);
      if (!this.audio.paused) {
        cancelAnimationFrame(this.raf);
      }
    });
    __publicField(this, "sliderChange", () => {
      this.audio.currentTime = this.seekSlider.value;
      this.path2.style.display = "block";
      this.svg.setCurrentTime(this.seekSlider.value);
      if (!this.audio.paused) {
        this.raf = requestAnimationFrame(this.whilePlaying);
      }
    });
    __publicField(this, "onFinish", () => {
      this.seekSlider.value = this.seekSlider.max;
      this.svg.setCurrentTime(this.audio.duration);
      this.svg.pauseAnimations();
      this.playPathButton.setAttribute("d", this.playPath);
      cancelAnimationFrame(this.raf);
    });
    __publicField(this, "whilePlaying", () => {
      this.seekSlider.value = this.audio.currentTime;
      this.currentTimeContainer.textContent = this.calculateTime(this.seekSlider.value);
      this.svg.setCurrentTime(this.seekSlider.value);
      this.raf = requestAnimationFrame(this.whilePlaying);
    });
    __publicField(this, "svgDraw", () => {
      const path = linearPath(this.audioData, this.options);
      if (!this.animation) {
        this.path1.setAttribute("d", path);
        this.path2.setAttribute("d", path);
      } else {
        this.animationsvg.setAttribute("values", path);
      }
      this.svg.setCurrentTime(this.seekSlider.value);
    });
    __publicField(this, "calculateTime", (secs) => {
      const minutes = Math.floor(secs / 60);
      const seconds = Math.floor(secs % 60);
      const returnedSeconds = seconds < 10 ? `0${seconds}` : `${seconds}`;
      return `${minutes}:${returnedSeconds}`;
    });
    this.shadowDOM = this.attachShadow({ mode: "open" });
    this.audioData = null;
    if (this.hasAttribute("wave-options")) {
      this.options = JSON.parse(this.attributes["wave-options"].value);
      this.options.width = parseInt(this.attributes["wave-width"].value);
      this.options.height = parseInt(this.attributes["wave-height"].value);
    } else {
      this.options = {
        samples: 40,
        type: "mirror",
        width: parseInt(this.attributes["wave-width"].value),
        height: parseInt(this.attributes["wave-height"].value),
        paths: [
          { d: "V", sy: 0, x: 50, ey: 100 }
        ]
      };
    }
    if (this.options.hasOwnProperty("animation")) {
      this.animation = this.options.animation;
    } else {
      this.animation = false;
    }
    this.playPath = "M8.5 8.7c0-1.7 1.2-2.4 2.6-1.5l14.4 8.3c1.4.8 1.4 2.2 0 3l-14.4 8.3c-1.4.8-2.6.2-2.6-1.5V8.7z";
    this.pausePath = "M9.2 25c0 .5.4 1 .9 1h3.6c.5 0 .9-.4.9-1V9c0-.5-.4-.9-.9-.9h-3.6c-.4-.1-.9.3-.9.9v16zm11-17c-.5 0-1 .4-1 .9V25c0 .5.4 1 1 1h3.6c.5 0 1-.4 1-1V9c0-.5-.4-.9-1-.9 0-.1-3.6-.1-3.6-.1z";
    this.playPathButton = null;
    this.svg = null;
    this.path1 = null;
    this.path2 = null;
    this.animationsvg = null;
    this.animationsvgx = null;
    this.audio = null;
    this.durationContainer = null;
    this.seekSlider = null;
    this.currentTimeContainer = null;
    this.playIconContainer = null;
    this.raf = null;
  }
  initComponent() {
    this.playPathButton = this.shadowDOM.getElementById("playPathButton");
    this.svg = this.shadowDOM.getElementById("svg");
    this.path1 = this.shadowDOM.getElementById("path1");
    this.path2 = this.shadowDOM.getElementById("path2");
    this.animationsvg = this.shadowDOM.getElementById("animationsvg");
    this.animationsvgx = this.shadowDOM.getElementById("animationsvgx");
    this.audio = this.shadowDOM.querySelector("audio");
    this.durationContainer = this.shadowDOM.getElementById("duration");
    this.seekSlider = this.shadowDOM.getElementById("seek-slider");
    this.currentTimeContainer = this.shadowDOM.getElementById("current-time");
    this.playIconContainer = this.shadowDOM.getElementById("play");
    this.svg.pauseAnimations();
    if (this.audio.readyState > 0) {
      this.loadSong();
    } else {
      this.audio.addEventListener("loadedmetadata", this.loadSong);
    }
    this.audio.addEventListener("ended", this.onFinish);
    this.seekSlider.addEventListener("input", this.sliderInput);
    this.seekSlider.addEventListener("change", this.sliderChange);
    this.playIconContainer.addEventListener("click", this.playPause);
  }
  async audioPath() {
    this.audioData = await getAudioData(this.attributes.src.value);
    this.svgDraw();
  }
  mapComponentAttributes() {
    const attributesMapping = [
      "src",
      "wave-height",
      "wave-width",
      "color",
      "wave-options",
      "wave-color",
      "wave-progress-color",
      "wave-slider"
    ];
    attributesMapping.forEach((key) => {
      if (!this.attributes[key]) {
        this.attributes[key] = { value: null };
      }
    });
  }
  connectedCallback() {
    this.mapComponentAttributes();
    this.render();
    this.initComponent();
    this.audioPath();
  }
  render() {
    this.shadowDOM.innerHTML = `
            ${this.templateCss()}
            ${this.template()}
        `;
  }
  template() {
    let html = `
        <div part="player" class="player">
            <button id="play" part="play">
                <svg viewBox="0 0 34 34" width="34" height="34" part="button">
                    <path id="playPathButton" d="M8.5 8.7c0-1.7 1.2-2.4 2.6-1.5l14.4 8.3c1.4.8 1.4 2.2 0 3l-14.4 8.3c-1.4.8-2.6.2-2.6-1.5V8.7z"></path>
                    <!--<path fill="currentColor" d="M9.2 25c0 .5.4 1 .9 1h3.6c.5 0 .9-.4.9-1V9c0-.5-.4-.9-.9-.9h-3.6c-.4-.1-.9.3-.9.9v16zm11-17c-.5 0-1 .4-1 .9V25c0 .5.4 1 1 1h3.6c.5 0 1-.4 1-1V9c0-.5-.4-.9-1-.9 0-.1-3.6-.1-3.6-.1z"></path>-->
                </svg>
            </button>
        <div id="current-time" part="currenttime">0:00</div>
        <div id="slider" part="slider">
            <svg id="svg" part="svg" xmlns="http://www.w3.org/2000/svg"  viewBox="0 0 ${this.attributes["wave-width"].value} ${this.attributes["wave-height"].value}" width="${this.attributes["wave-width"].value}" height="${this.attributes["wave-height"].value}">
        `;
    if (!this.animation) {
      html += `
            <defs>
                <clipPath id="left-to-right-x">
                <rect x="-1" y="-100" width="${parseInt(this.attributes["wave-width"].value) + 2}" height="${parseInt(this.attributes["wave-height"].value) + 200}" >
                    <animate id="animationsvgx" attributeName="x" values="-1;${parseInt(this.attributes["wave-width"].value) + 2}" dur="99999s" fill="freeze" />   
                </rect>
                </clipPath>
                <clipPath id="left-to-right">
                <rect x="-${parseInt(this.attributes["wave-width"].value) + 2}" y="-100" width="${parseInt(this.attributes["wave-width"].value) + 2}" height="${parseInt(this.attributes["wave-height"].value) + 200}" >
                    <animate id="animationsvg" attributeName="x" values="-${parseInt(this.attributes["wave-width"].value) + 2};-1" dur="99999s" fill="freeze" />   
                </rect>
                </clipPath>    
            </defs> 
            <path id="path1" part="path1"  stroke-width="2" d="" clip-path="url(#left-to-right-x)"></path>
            <path id="path2" part="path2"  stroke-width="2" d="" clip-path="url(#left-to-right)" style="display:none;"></path>`;
    } else {
      html += `
            <path id="path1" part="path1"  stroke-width="2" style="display:none;"></path>
            <path id="path2" part="path2"  stroke-width="2" style="display:block;">
                <animate id="animationsvg" attributeName="d" dur="99999s" calcMode="linear" values="" fill="freeze"></animate>
            </path>
            `;
    }
    html += `
        </svg>
                <input type="range" part="input" id="seek-slider" max="100" value="0" step="any">
            </div>
            <div id="duration" part="duration">0:00</div>
        </div>
        <audio src="${this.attributes.src.value}"></audio>
        `;
    return html;
  }
  templateCss() {
    var _a, _b, _c, _d, _e, _f, _g, _h, _i, _j, _k, _l;
    return `
            <style>
            *, :after, :before { 
                box-sizing: border-box;
                margin: 0;
            }
            :host {
                display: flex;
               
            }
            .player {
                display: flex;
                justify-content: space-between;
                align-items: center;
            }
            #play {
                background: transparent;
                border: none;
                cursor:pointer;
                padding: 0 0 0 10px;
                margin: 0px;
                
            }
            #play svg {
                fill: ${(_b = (_a = this.attributes["color"]) == null ? void 0 : _a.value) != null ? _b : "#858a8d"};
                position:relative;
                transition: transform 0.3s;
                top: -0.5px;
            }
            #play svg:hover {
                transform: scale(1.2);
            }
            #play svg path {
                stroke-linecap: round;
                stroke-linejoin: round;
                transition: 0.2s;
            }
            #svg {
                margin: 0 10px;
                overflow: visible;
                stroke-width: 1px;
                fill: none;
            }
            #path1 {
                stroke: ${(_d = (_c = this.attributes["wave-color"]) == null ? void 0 : _c.value) != null ? _d : "#dadcdd"}; 
                overflow: visible;
                stroke-linecap: round;
            }
            #path2 {
                stroke: ${(_f = (_e = this.attributes["wave-progress-color"]) == null ? void 0 : _e.value) != null ? _f : "#858a8d"};
                overflow: visible;
                stroke-linecap: round;
            }
            #slider  {
                position:relative;
            }
            #duration, #current-time {
                position: relative;
                top:-1.1px;
                color: ${(_h = (_g = this.attributes["color"]) == null ? void 0 : _g.value) != null ? _h : "#858a8d"};
                margin: 0px 10px;
                font-size: 16px;
                font-family: "Helvetica Neue", Helvetica, Arial, sans-serif;
                min-width:32px;
            }
            #seek-slider {
                position: absolute;
                width: 100%;
                left: 0;
            }
            input[type=range] {
                -webkit-appearance: none; 
                width: 100%; 
                background: transparent; 
                padding: 0px;
                margin: 0px;
                border: 0px;
                height: ${parseInt(this.attributes["wave-height"].value)}px;
            }  
            input[type=range]::-webkit-slider-thumb {
                -webkit-appearance: none;
            }
            input[type=range]:focus {
                outline: none; 
            }
            
            input[type=range]::-ms-track {
                width: 100%;
                cursor: pointer;
                /* Hides the slider so custom styles can be added */
                background: transparent; 
                border-color: transparent;
                color: transparent;
            }
            input[type=range]::-webkit-slider-thumb {
                -webkit-appearance: none;
                position:relative; 
                /*top: -1.5px;*/
                height: 12.5px;
                width: 12.5px;
                border-radius: 50%;
                background:  ${(_j = (_i = this.attributes["wave-slider"]) == null ? void 0 : _i.value) != null ? _j : "#4fc3f7"};
                cursor: pointer;
                box-shadow: none;
            }
            input[type="range"]::-webkit-slider-thumb {
                transition: transform 0.3s;
            }
            input[type="range"]:active::-webkit-slider-thumb {
                transform: scale(1.5);
            }
            input[type="range"]::-moz-range-thumb {
                height: 12.5px;
                width: 12.5px;
                border-radius: 50%;
                background:  ${(_l = (_k = this.attributes["wave-slider"]) == null ? void 0 : _k.value) != null ? _l : "#4fc3f7"};
                cursor: pointer;
                box-shadow: none;
                border: 0px;
            }

            input[type="range"]:active::-moz-range-thumb {
                transform: scale(1.5);
            }  
            </style>
        `;
  }
}
window.customElements.define("wave-audio-path-player", AudioPathPlayer);
export { AudioPathPlayer };
