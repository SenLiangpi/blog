<!--
 * @Author: Pi Patle
 * @Email: pisenliang@gmail.com
 * @Github: https://github.com/SenLiangpi
 * @Website: https://senliangpi.github.io/blog/#/
 * @Date: 2020-08-22 22:43:42
 * @LastEditors: Pi Patle
 * @LastEditTime: 2021-06-03 11:30:13
-->
<template>
  <div class="home">
    <!-- <div class="home-banner fullscreen">
      <canvas id="Snow" data-count="70" data-dist="100" data-color="255,255,255" data-size="2" data-speed="0.5"
        data-opacity="0.5" data-step="1" width="1273" height="913"></canvas>
      <div class="gradient"></div>
      <div class="banner-content dtable fullscreen">
        <div class="content-inner dtablecell">
          <div class="container"> -->
          <div class="container">
            <transition name="fade">
              <img class="imgpipi" v-if="img_if_1" :src="images[imgpipi]" alt />
            </transition>
            <transition name="fade">
              <img class="imgpipi" v-if="img_if_2" :src="images[imgpipi1]" alt />
            </transition>
            <p class="name">皮皮</p>
            <p>皮皮的皮卡丘研究所製作(￣▽￣)"</p>
            <p>
              Email:
              <a href="mailto:pisenliang@gmail.com">pisenliang@gmail.com</a>
            </p>
            <p></p>
            <div class="lists">
              <!-- <p><router-link to="">Blog</router-link></p> -->
              <p><router-link to="/blog">Blog</router-link></p>
              <p>
                <a target="view_window" href="https://github.com/SenLiangpi">GitHub</a>
              </p>
              <p>
                <a
                  target="view_window"
                  href="https://www.npmjs.com/~pipiandpikachu"
                  >NPM</a
                >
              </p>
              <p><a target="view_window" href="https://t.me/webjavascript">Telegram</a></p>
            </div>
          </div>
          <!-- </div>
        </div>
      </div>
    </div> -->
  </div>
</template>
 
<script>
export default {
  name: "home",
  data() {
    return {
      images:[
        'static/pipi/file_6212624.webp',
        'static/pipi/file_6212625.webp',
        'static/pipi/file_6212626.webp',
        'static/pipi/file_6212627.webp',
        'static/pipi/file_6212628.webp',
        'static/pipi/file_6212629.webp',
        'static/pipi/file_6212630.webp',
        'static/pipi/file_6212631.webp',
        'static/pipi/file_6212632.webp',
        'static/pipi/file_6212623.webp',
        'static/pipi/file_6212651.webp',
        'static/pipi/file_6212659.webp',
        'static/pipi/file_6212660.webp',
        'static/pipi/file_6212661.webp',
        'static/pipi/file_6212662.webp'
      ],
      imgpipi: 'static/pipi/file_6212623.webp',
      imgpipi1: 'static/pipi/file_6212624.webp',
      imgpipi_opacity: '1',
      imgpipi_opacity1: '0',
      img_if_1: true,
      img_if_2: false,
    };
  },
  methods: {
    random(val){
      let a = parseInt(Math.random() * 15);
      if(val == a){
        if(a==9){
          a = a-1
        } else if(a==0) {
          a = a+1
        }
        a = a+1
        return a
      }else{
        return a
      }
    }
  },
  created(){
    this.imgpipi = parseInt(Math.random() * 15);
    this.imgpipi1 = this.random(this.imgpipi);
  },
  mounted() {
    let type = true;
    setInterval(()=>{
      if(type){
        type = false;
        this.img_if_1 = false;
        setTimeout(()=>{
          this.img_if_2 = true;
          this.imgpipi = this.random(this.imgpipi1);
        },510)
      }else{
        type = true;
         this.img_if_2 = false;
        setTimeout(()=>{
          this.img_if_1 = true;
          this.imgpipi1 = this.random(this.imgpipi);
        },510)
      }
    },30000)
  },

};
</script>

<style lang="less" scoped>
.hello {
  width: 100vw;
  height: 100vh;
  overflow: hidden;
}
.imgpipi {
  height: 150px;
}
.fade-enter-active, .fade-leave-active {
  transition: opacity .5s;
}
.fade-enter, .fade-leave-to {
  opacity: 0;
}
.name {
  font-size: 20px;
  margin-top: 20px;
}
.lists {
  margin: 50px auto 0;
  overflow: hidden;
  text-align: center;
  width: 440px;
  display: flex;
}
.lists p {
  flex-grow: 1;
  // float: left;
  // padding: 0 10px;
  margin: 0;
}
.container {
  padding: 0 !important;
  margin-top: calc((100vh - 380px) / 2.8);
}
@media (min-width: 240px) and (max-width: 466px) {
  .container {
    margin-top: calc((100vh - 430px) / 2.8);
  }
  .lists {
    margin: 5vw auto 0;
    overflow: hidden;
    text-align: center;
    width: 100vw;
  }
  .lists p {
    float: left;
    width: 50vw;
    padding: 0;
  }
}
</style>
