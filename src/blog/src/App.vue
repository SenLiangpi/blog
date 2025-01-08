<!--
 * @Author: Pi Patle
 * @Email: pisenliang@gmail.com
 * @Github: https://github.com/SenLiangpi
 * @Website: https://senliangpi.github.io/blog/#/
 * @Date: 2020-08-22 21:37:05
 * @LastEditors: Pi Patle
 * @LastEditTime: 2023-02-21 11:34:10
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
import { environment_variable, snowF } from '@/utils/index.js'
let resource_address = environment_variable().url;
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
          bgm:resource_address+'bgm/EminenceSymphonyOrchestra.mp3',
          backgroundPosition: '0 center'
        },
        {
          image: resource_address+'background/yan.jpg',
          opacity: '1',
          gradient: 'rgb(0 0 0 / 80%)',
          backgroundColor: '#000',
          bgm:resource_address+'bgm/EminenceSymphonyOrchestra.mp3',
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
  },
  mounted() {
    this.$nextTick(() => {
      // $("#app").css("cursor","url(static/ico/5f97dfe502f15.128px.ico) 64 64 ,auto");
      snowF();
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
      // if(audioSwanSong.paused){                 
      //   audioSwanSong.play();// 播放  
      // }else{
      //   audioSwanSong.pause();// 暂停
      // }
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
