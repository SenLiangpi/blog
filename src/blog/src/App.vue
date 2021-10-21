<!--
 * @Author: Pi Patle
 * @Email: pisenliang@gmail.com
 * @Github: https://github.com/SenLiangpi
 * @Website: https://senliangpi.github.io/blog/#/
 * @Date: 2020-08-22 21:37:05
 * @LastEditors: Pi Patle
 * @LastEditTime: 2021-09-26 11:36:23
-->
<template>
  <div id="app" @click="click_on" :style="{backgroundColor: style[styleRandom].backgroundColor}">
    <div class="home-banner fullscreen">
      <div class="background" :style="{backgroundImage: `url(${style[styleRandom].image})`,opacity: style[styleRandom].opacity,
      backgroundPosition: style[styleRandom].backgroundPosition}"></div>
      <canvas id="Snow" data-count="100" data-dist="200" data-color="255,255,255" data-size="2" data-speed="0.5"
        data-opacity="0.8" data-step="0" width="1273" height="913"></canvas>
      <div class="gradient" :style="{background: style[styleRandom].gradient}"></div>
      <div class="banner-content dtable fullscreen">
        <div class="content-inner dtablecell">
          <router-view/>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
function snowF() {
  var requestAnimationFrame =
    window.requestAnimationFrame ||
    window.mozRequestAnimationFrame ||
    window.webkitRequestAnimationFrame ||
    window.msRequestAnimationFrame ||
    function (callback) {
      window.setTimeout(callback, 1000 / 50);
    };
  window.requestAnimationFrame = requestAnimationFrame;
  var flakes = [],
    canvas = document.getElementById("Snow"),
    ctx = canvas.getContext("2d"),
    flakeCount = parseInt(canvas.getAttribute('data-count')),
    mX = -100,
    mY = -100;
  canvas.width = window.innerWidth;
  canvas.height = window.innerHeight;
  function snow() {
    ctx.clearRect(0, 0, canvas.width, canvas.height);
    for (var i = 0; i < flakeCount; i++) {
      var flake = flakes[i],
        x = mX,
        y = mY,
        minDist = parseInt(canvas.getAttribute('data-dist')),
        x2 = flake.x,
        y2 = flake.y;
      var dist = Math.sqrt((x2 - x) * (x2 - x) + (y2 - y) * (y2 - y)),
        dx = x2 - x,
        dy = y2 - y;
      if (dist < minDist) {
        var force = minDist / (dist * dist),
          xcomp = (x - x2) / dist,
          ycomp = (y - y2) / dist,
          deltaV = force / 2;
        flake.velX -= deltaV * xcomp;
        flake.velY -= deltaV * ycomp;
      } else {
        flake.velX *= 0.98;
        if (flake.velY <= flake.speed) {
          flake.velY = flake.speed;
        }
        flake.velX += Math.cos((flake.step += 0.05)) * flake.stepSize;
      }
      ctx.fillStyle =
        "rgba(" + canvas.getAttribute('data-color') + "," + flake.opacity + ")";
      flake.y += flake.velY;
      flake.x += flake.velX;
      if (flake.y >= canvas.height || flake.y <= 0) {
        reset(flake);
      }
      if (flake.x >= canvas.width || flake.x <= 0) {
        reset(flake);
      }
      ctx.beginPath();

      // ctx.arc(flake.x, flake.y, flake.size, 0, Math.PI * 2);
      // ❉❄❅❆...❄️
      const snowflake = ['❉','❄','❅','❆','❄️'];
      // (parseInt(Math.random() * 10)+5)
      ctx.font = '8px serif';
      // parseInt(Math.random() * 5)
      ctx.fillText(snowflake[1], flake.x, flake.y);
      ctx.fill();
    }
    requestAnimationFrame(snow);
  }
  function reset(flake) {
    flake.x = Math.floor(Math.random() * canvas.width);
    flake.y = 0;
    flake.size = Math.random() * 3 + parseInt(canvas.getAttribute('data-size'));
    flake.speed = Math.random() * 1 + parseInt(canvas.getAttribute('data-speed'));
    flake.velY = flake.speed;
    flake.velX = 0;
    flake.opacity =
      Math.random() * 0.5 + parseInt(canvas.getAttribute('data-opacity'));
  }
  function init() {
    for (var i = 0; i < flakeCount; i++) {
      var x = Math.floor(Math.random() * canvas.width),
        y = Math.floor(Math.random() * canvas.height),
        size = Math.random() * 3 + parseInt(canvas.getAttribute('data-size')),
        speed = Math.random() * 1 + parseInt(canvas.getAttribute('data-speed')),
        opacity =
          Math.random() * 0.5 + parseInt(canvas.getAttribute('data-opacity'));
      flakes.push({
        speed: speed,
        velY: speed,
        velX: 0,
        x: x,
        y: y,
        size: size,
        stepSize: (Math.random() / 30) * parseInt(canvas.getAttribute('data-step')),
        step: 0,
        angle: 180,
        opacity: opacity,
      });
    }
    snow();
  }
  document.addEventListener("mousemove", function (e) {
    (mX = e.clientX), (mY = e.clientY);
  });
  window.addEventListener("resize", function () {
    canvas.width = window.innerWidth;
    canvas.height = window.innerHeight;
  });
  init();
}
function audioAutoPlay() {
  var audio = document.getElementById("SwanSong"),
  play = function () {
      audio.play();
      document.removeEventListener("touchstart", play, false);
  };
  audio.play();
  document.addEventListener("WeixinJSBridgeReady", function () {
      play();
  }, false);
  document.addEventListener('YixinJSBridgeReady', function () {
      play();
  }, false);
  document.addEventListener("touchstart", play, false);
}
import murmurhash from "murmurhash"
import murmur128 from 'murmur-128'
import murmurHash3  from 'murmurhash3js'
import { environment_variable } from '@/utils/index.js'
let resource_address = environment_variable().url;
import { data } from '@/utils/data.js'
import data_json from '@/utils/data_json'
export default {
  name: 'App',
  data() {
    return {
      audioSwanSong_type: true,
      style: [
        {
          image: resource_address+'background/preview.jpg',
          opacity: '1',
          gradient: 'linear-gradient(45deg, #002453 0%,#ff2b4a 100%)',
          backgroundColor: '#000',
          bgm:resource_address+'bgm/FeellikeCrying.mp3',
          backgroundPosition: 'center center'
        },
        {
          image: resource_address+'background/gallery_m_009.jpg',
          opacity: '0.75',
          gradient: 'linear-gradient(65deg, #002453 34%,#ff2b4a 100%)',
          backgroundColor: '#000',
          bgm:resource_address+'bgm/SwanSong.mp3',
          backgroundPosition: 'center center'
        },
        {
          image: resource_address+'background/Cover.jpg',
          opacity: '1',
          gradient: 'rgb(0 0 0 / 80%)',
          backgroundColor: '#000',
          bgm:resource_address+'bgm/EminenceSymphonyOrchestra.flac',
          backgroundPosition: '0 center'
        },
        {
          image: resource_address+'background/yan.jpg',
          opacity: '1',
          gradient: 'rgb(0 0 0 / 80%)',
          backgroundColor: '#000',
          bgm:resource_address+'bgm/EminenceSymphonyOrchestra.flac',
          backgroundPosition: 'center center'
        }
      ],
      styleRandom: parseInt(Math.random() * 3)
      // styleRandom: 3
    };
  },
  created(){
    document.getElementById('SwanSong').src = this.style[this.styleRandom].bgm;
    document.getElementById('SwanSong').onended = ()=> {
      if(this.styleRandom === 3){
        this.styleRandom = 0;
      }else{
        this.styleRandom ++;
      }
      document.getElementById('SwanSong').src = this.style[this.styleRandom].bgm;
      audioAutoPlay();
    };
    // console.log(data_json)
    let data_time = new Date().getTime();
    let hash_arr = [];
    let hash_32 = [];
    let hash_32_16 = [];
    for(let a in data_json.RECORDS){
      hash_arr.push(murmurHash3.x64.hash128(data_json.RECORDS[a].leads_id))
      hash_32.push(("00000000" + (murmurhash.v3(data_json.RECORDS[a].leads_id) >>> 0).toString(16)).slice(-8))
      hash_32_16.push(murmurhash.v3(data_json.RECORDS[a].leads_id))
    }
    console.log(hash_arr.length)
    let tree_structure = {};
    for(let a in hash_arr){
      switch(hash_arr[a].slice(0,1)){
        case "0":
          if(!tree_structure['0']){
            tree_structure['0'] = []
          }
          tree_structure['0'].push(hash_arr[a])
          break;
        case "1":
          if(!tree_structure['1']){
            tree_structure['1'] = []
          }
          tree_structure['1'].push(hash_arr[a])
          break;
        case "2":
          if(!tree_structure['2']){
            tree_structure['2'] = []
          }
          tree_structure['2'].push(hash_arr[a])
          break;
        case "3":
          if(!tree_structure['3']){
            tree_structure['3'] = []
          }
          tree_structure['3'].push(hash_arr[a])
          break;
        case "4":
          if(!tree_structure['4']){
            tree_structure['4'] = []
          }
          tree_structure['4'].push(hash_arr[a])
          break;
        case "5":
          if(!tree_structure['5']){
            tree_structure['5'] = []
          }
          tree_structure['5'].push(hash_arr[a])
          break;
        case "6":
          if(!tree_structure['6']){
            tree_structure['6'] = []
          }
          tree_structure['6'].push(hash_arr[a])
          break;
        case "7":
          if(!tree_structure['7']){
            tree_structure['7'] = []
          }
          tree_structure['7'].push(hash_arr[a])
          break;
        case "8":
          if(!tree_structure['8']){
            tree_structure['8'] = []
          }
          tree_structure['8'].push(hash_arr[a])
          break;
        case "9":
          if(!tree_structure['9']){
            tree_structure['9'] = []
          }
          tree_structure['9'].push(hash_arr[a])
          break;
        case "a":
          if(!tree_structure['a']){
            tree_structure['a'] = []
          }
          tree_structure['a'].push(hash_arr[a])
          break;
        case "b":
          if(!tree_structure['b']){
            tree_structure['b'] = []
          }
          tree_structure['b'].push(hash_arr[a])
          break;
        case "c":
          if(!tree_structure['c']){
            tree_structure['c'] = []
          }
          tree_structure['c'].push(hash_arr[a])
          break;
        case "d":
          if(!tree_structure['d']){
            tree_structure['d'] = []
          }
          tree_structure['d'].push(hash_arr[a])
          break;
        case "e":
          if(!tree_structure['e']){
            tree_structure['e'] = []
          }
          tree_structure['e'].push(hash_arr[a])
          break;
        case "f":
          if(!tree_structure['f']){
            tree_structure['f'] = []
          }
          tree_structure['f'].push(hash_arr[a])
          break;
      }
    }
    console.log(new Date().getTime()-data_time)
    console.log(tree_structure)
    console.log(murmurHash3.x86.hash32('111'))
    console.log(murmurhash.v3('111'))
    console.log(murmur128('111'))
    console.log(("00000000" + (murmurhash.v3('111') >>> 0).toString(16)).slice(-8))
    // console.log(hash_32)
    // console.log(new Set(hash_32))
    // console.log(hash_32_16)
    // console.log(new Set(hash_32_16))
    console.log(hash_arr)
    console.log(new Set(hash_arr))
  },
  mounted() {
    this.$nextTick(() => {
      // $("#app").css("cursor","url(static/ico/5f97dfe502f15.128px.ico) 64 64 ,auto");
      snowF();
      audioAutoPlay();
    });
  },
  methods: {
    click_on(){
      let audioSwanSong = document.getElementById('SwanSong')
      if(this.audioSwanSong_type){
        try{
          this.audioSwanSong_type = false
          audioSwanSong.play()
          audioAutoPlay()
        }catch(error){
          audioAutoPlay()
        }
      }
      if(audioSwanSong.paused){                 
        audioSwanSong.play();// 播放  
      }else{
        audioSwanSong.pause();// 暂停
      }
    }
  }
}
</script>

<style>
#app{
  min-height: 100vh;
}
.background{
  position: fixed;
  width: 100vw;
  height: 100vh;
  background-size: cover;
  background-position: center center;
  background-repeat: no-repeat;
}
.banner-content {
  color: #fff;
}

.banner-content h1 {
  /* display: inline-block; */
  font-size: 35px;
  padding: 15px 0 19px;
  text-transform: uppercase;
  letter-spacing: 30px;
  font-weight: 200;
}

.banner-content p {
  font-size: 16px;
  margin: 23px 0 0;
  letter-spacing: 5px;
  font-weight: 200;
  text-transform: uppercase;
}
.gradient {
  width: 100vw;
  height: 100vh;
  left: 0;
  opacity: 0.4;
  position: fixed;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
}
#Snow {
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  /* background: rgba(225, 225, 225, 0.1); */
  pointer-events: none;
}
@media (min-width: 240px) and (max-width: 466px) {
  .banner-content p {
    letter-spacing: 4px;
    font-size: 14px;
  }
}
</style>
