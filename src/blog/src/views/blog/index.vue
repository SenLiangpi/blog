<!--
 * @Author: PiPi
 * @Email: pisenliang@gmail.com
 * @Github: https://github.com/SenLiangpi
 * @Website: https://senliangpi.github.io/blog/#/
 * @Date: 2019-07-18 09:31:21
 * @LastEditors: Pi Patle
 * @LastEditTime: 2021-06-07 10:06:49
 -->
<template>
  <div class="blog">
    <div style="height: 120px;"></div>
    <header class="site-header navbar-fixed-top navbar-default" style="overflow: hidden;position: fixed;width: 100%;top: 0;">
      <div class="container">
        <!-- Brand and toggle get grouped for better mobile display -->
        <img style="height: 60px;float: left;" 
            :src="images[imgpipi]" alt="" />
        <div class="lists">
          <p><router-link to="/">Home</router-link></p>
          <p><router-link to="/blog">Blog</router-link></p>
          <p>
            <a target="view_window" href="https://github.com/SenLiangpi"
              >GitHub</a
            >
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
    </header>
    <router-view/>
    <!-- <div class="test-lists container">
      <div class="dom-list"  v-for="(a,index) in lists" :key="index">
        <router-link :to="a.href">
          <h1>{{a.name}}</h1>
          <p>
            {{a.text}}
          </p>
        </router-link>
      </div>
    </div> -->
    <!-- <div class="container">
      <hr />

      <footer>
        <p>@ pipi</p>
      </footer>
    </div> -->
  </div>
</template>
<script>
export default {
  name: "blog",
  data() {
    return {
      images:[
        'https://pi-1258780943.cos.ap-hongkong.myqcloud.com/blog/pipi/file_6212624.webp',
        'https://pi-1258780943.cos.ap-hongkong.myqcloud.com/blog/pipi/file_6212625.webp',
        'https://pi-1258780943.cos.ap-hongkong.myqcloud.com/blog/pipi/file_6212626.webp',
        'https://pi-1258780943.cos.ap-hongkong.myqcloud.com/blog/pipi/file_6212627.webp',
        'https://pi-1258780943.cos.ap-hongkong.myqcloud.com/blog/pipi/file_6212628.webp',
        'https://pi-1258780943.cos.ap-hongkong.myqcloud.com/blog/pipi/file_6212629.webp',
        'https://pi-1258780943.cos.ap-hongkong.myqcloud.com/blog/pipi/file_6212630.webp',
        'https://pi-1258780943.cos.ap-hongkong.myqcloud.com/blog/pipi/file_6212631.webp',
        'https://pi-1258780943.cos.ap-hongkong.myqcloud.com/blog/pipi/file_6212632.webp',
        'https://pi-1258780943.cos.ap-hongkong.myqcloud.com/blog/pipi/file_6212623.webp',
        'https://pi-1258780943.cos.ap-hongkong.myqcloud.com/blog/pipi/file_6212651.webp',
        'https://pi-1258780943.cos.ap-hongkong.myqcloud.com/blog/pipi/file_6212659.webp',
        'https://pi-1258780943.cos.ap-hongkong.myqcloud.com/blog/pipi/file_6212660.webp',
        'https://pi-1258780943.cos.ap-hongkong.myqcloud.com/blog/pipi/file_6212661.webp',
        'https://pi-1258780943.cos.ap-hongkong.myqcloud.com/blog/pipi/file_6212662.webp',
      ],
      imgpipi: '',
      lists: [
        {
          name: 'wangEditor —— 轻量级web富文本框 测试demo',
          text: `wangEditor 是一款使用 Typescript 开发的 Web 富文本编辑器， 轻量、简洁、易用、开源免费。
            兼容常见的 PC 浏览器：Chrome，Firefox，Safar，Edge，QQ 浏览器，IE11。
            不支持移动端`,
          href: '/blog/editor'
        },
      ]
    };
  },
  created(){
    this.imgpipi = parseInt(Math.random() * 15);
  },
  mounted() {
    this.$nextTick(() => {
      $(window).scroll(function() {
        if ($(window).scrollTop() >= 20) {
          $(".site-header").addClass("fixed");
        }else {
          $(".site-header").removeClass("fixed");
        }
      });
    });
  },
};
</script>
<style lang="less" scoped>
.lists {
  overflow: hidden;
  text-align: center;
  width: 512px;
  float: right;
}
.lists p {
  float: left;
  padding: 0 11px;
  margin: 0;
  line-height: 60px;
}
.test-lists{
  min-height: 500px;
  background-color: rgba(0,0,0,0.75);
  border-radius: 20px 20px 0 0;
  margin-top: 55vh;
  letter-spacing: 0px;
  text-align: left;
  padding: 60px 0 1px 0;
}
.dom-list{
  width: 80%;
  margin: 0 auto 60px;
}
.test-lists a{
  color: inherit;
}
.test-lists a:hover {
  color: #5cace7;
}
.test-lists h1{
  padding: 0;
  letter-spacing: 0px;
  font-weight: 200;
}
.test-lists p{
  letter-spacing: 0px;
  font-size: 14px;
}
</style>