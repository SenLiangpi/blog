<!--
 * @Author: PiPi
 * @Email: pisenliang@gmail.com
 * @Github: https://github.com/SenLiangpi
 * @Website: https://senliangpi.github.io/blog/#/
 * @Date: 2019-07-18 09:31:21
 * @LastEditors: Pi Patle
 * @LastEditTime: 2021-02-25 10:53:27
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
    <div class="test-lists container">
      <div class="dom-list"  v-for="(a,index) in lists" :key="index">
        <router-link to="/">
          <h1>关于前端组件通信的一些理解</h1>
          <p>
            关于前端组件通信的一些理解场景 吾辈同时是 vue/react 的使用者。 在使用现代前端框架时，
            我们经常要要面对的问题之一就是组件之间的通信，目前我们有着很多选择，包括但不限于以下这些。 
            Super Component Props: 将状态或操作放在父组件，然后传递到子组件。该特性在 vue/react 都存在
            Context/Provider Pattern: 将状态放在父组件，然后所有的</p>
        </router-link>
      </div>
    </div>
    <!-- <div class="container">
      <div class="row">
        <div class="col-md-4">
          <router-link to="/tensorflow">
            <div class="col-md-12">
              <h5>JavaScript的本地存储与数据监听</h5>
              <p>
                随着web的技术的不断进步，应用的复杂度也再不断的提高。我就讲一下我的再web开发中对数据监听和本地存储的使用过程。
              </p>
              <p>
                <span class="btn btn-default">作者：皮皮</span>
                <a class="btn btn-default" href="#" role="button"
                  >View details</a
                >
              </p>
            </div>
          </router-link>
        </div>
        <div class="col-md-4">
          <router-link to="/tensorflow">
            <div class="col-md-12">
              <h5>JavaScript的本地存储与数据监听</h5>
              <p>
                随着web的技术的不断进步，应用的复杂度也再不断的提高。我就讲一下我的再web开发中对数据监听和本地存储的使用过程。
              </p>
              <p>
                <span class="btn btn-default">作者：皮皮</span>
                <a class="btn btn-default" href="#" role="button"
                  >View details</a
                >
              </p>
            </div>
          </router-link>
        </div>
        <div class="col-md-4">
          <router-link to="/tensorflow">
            <div class="col-md-12">
              <h5>JavaScript的本地存储与数据监听</h5>
              <p>
                随着web的技术的不断进步，应用的复杂度也再不断的提高。我就讲一下我的再web开发中对数据监听和本地存储的使用过程。
              </p>
              <p>
                <span class="btn btn-default">作者：皮皮</span>
                <a class="btn btn-default" href="#" role="button"
                  >View details</a
                >
              </p>
            </div>
          </router-link>
        </div>
        <div class="col-md-4">
          <router-link to="/tensorflow">
            <div class="col-md-12">
              <h5>JavaScript的本地存储与数据监听</h5>
              <p>
                随着web的技术的不断进步，应用的复杂度也再不断的提高。我就讲一下我的再web开发中对数据监听和本地存储的使用过程。
              </p>
              <p>
                <span class="btn btn-default">作者：皮皮</span>
                <a class="btn btn-default" href="#" role="button"
                  >View details</a
                >
              </p>
            </div>
          </router-link>
        </div>
        <div class="col-md-4">
          <router-link to="/tensorflow">
            <div class="col-md-12">
              <h5>JavaScript的本地存储与数据监听</h5>
              <p>
                随着web的技术的不断进步，应用的复杂度也再不断的提高。我就讲一下我的再web开发中对数据监听和本地存储的使用过程。
              </p>
              <p>
                <span class="btn btn-default">作者：皮皮</span>
                <a class="btn btn-default" href="#" role="button"
                  >View details</a
                >
              </p>
            </div>
          </router-link>
        </div>
        <div class="col-md-4">
          <router-link to="/tensorflow">
            <div class="col-md-12">
              <h5>JavaScript的本地存储与数据监听</h5>
              <p>
                随着web的技术的不断进步，应用的复杂度也再不断的提高。我就讲一下我的再web开发中对数据监听和本地存储的使用过程。
              </p>
              <p>
                <span class="btn btn-default">作者：皮皮</span>
                <a class="btn btn-default" href="#" role="button"
                  >View details</a
                >
              </p>
            </div>
          </router-link>
        </div>
        <div class="col-md-4">
          <router-link to="/tensorflow">
            <div class="col-md-12">
              <h5>JavaScript的本地存储与数据监听</h5>
              <p>
                随着web的技术的不断进步，应用的复杂度也再不断的提高。我就讲一下我的再web开发中对数据监听和本地存储的使用过程。
              </p>
              <p>
                <span class="btn btn-default">作者：皮皮</span>
                <a class="btn btn-default" href="#" role="button"
                  >View details</a
                >
              </p>
            </div>
          </router-link>
        </div>
        <div class="col-md-4">
          <router-link to="/tensorflow">
            <div class="col-md-12">
              <h5>JavaScript的本地存储与数据监听</h5>
              <p>
                随着web的技术的不断进步，应用的复杂度也再不断的提高。我就讲一下我的再web开发中对数据监听和本地存储的使用过程。
              </p>
              <p>
                <span class="btn btn-default">作者：皮皮</span>
                <a class="btn btn-default" href="#" role="button"
                  >View details</a
                >
              </p>
            </div>
          </router-link>
        </div>
        <div class="col-md-4">
          <router-link to="/tensorflow">
            <div class="col-md-12">
              <h5>JavaScript的本地存储与数据监听</h5>
              <p>
                随着web的技术的不断进步，应用的复杂度也再不断的提高。我就讲一下我的再web开发中对数据监听和本地存储的使用过程。
              </p>
              <p>
                <span class="btn btn-default">作者：皮皮</span>
                <a class="btn btn-default" href="#" role="button"
                  >View details</a
                >
              </p>
            </div>
          </router-link>
        </div>
        <div class="col-md-4">
          <router-link to="/tensorflow">
            <div class="col-md-12">
              <h5>JavaScript的本地存储与数据监听</h5>
              <p>
                随着web的技术的不断进步，应用的复杂度也再不断的提高。我就讲一下我的再web开发中对数据监听和本地存储的使用过程。
              </p>
              <p>
                <span class="btn btn-default">作者：皮皮</span>
                <a class="btn btn-default" href="#" role="button"
                  >View details</a
                >
              </p>
            </div>
          </router-link>
        </div>
        <div class="col-md-4">
          <router-link to="/tensorflow">
            <div class="col-md-12">
              <h5>JavaScript的本地存储与数据监听</h5>
              <p>
                随着web的技术的不断进步，应用的复杂度也再不断的提高。我就讲一下我的再web开发中对数据监听和本地存储的使用过程。
              </p>
              <p>
                <span class="btn btn-default">作者：皮皮</span>
                <a class="btn btn-default" href="#" role="button"
                  >View details</a
                >
              </p>
            </div>
          </router-link>
        </div>
        <div class="col-md-4">
          <router-link to="/tensorflow">
            <div class="col-md-12">
              <h5>JavaScript的本地存储与数据监听</h5>
              <p>
                随着web的技术的不断进步，应用的复杂度也再不断的提高。我就讲一下我的再web开发中对数据监听和本地存储的使用过程。
              </p>
              <p>
                <span class="btn btn-default">作者：皮皮</span>
                <a class="btn btn-default" href="#" role="button"
                  >View details</a
                >
              </p>
            </div>
          </router-link>
        </div>
        <div class="col-md-4">
          <router-link to="/tensorflow">
            <div class="col-md-12">
              <h5>JavaScript的本地存储与数据监听</h5>
              <p>
                随着web的技术的不断进步，应用的复杂度也再不断的提高。我就讲一下我的再web开发中对数据监听和本地存储的使用过程。
              </p>
              <p>
                <span class="btn btn-default">作者：皮皮</span>
                <a class="btn btn-default" href="#" role="button"
                  >View details</a
                >
              </p>
            </div>
          </router-link>
        </div>
        <div class="col-md-4">
          <router-link to="/tensorflow">
            <div class="col-md-12">
              <h5>JavaScript的本地存储与数据监听</h5>
              <p>
                随着web的技术的不断进步，应用的复杂度也再不断的提高。我就讲一下我的再web开发中对数据监听和本地存储的使用过程。
              </p>
              <p>
                <span class="btn btn-default">作者：皮皮</span>
                <a class="btn btn-default" href="#" role="button"
                  >View details</a
                >
              </p>
            </div>
          </router-link>
        </div>
        <div class="col-md-4">
          <router-link to="/tensorflow">
            <div class="col-md-12">
              <h5>JavaScript的本地存储与数据监听</h5>
              <p>
                随着web的技术的不断进步，应用的复杂度也再不断的提高。我就讲一下我的再web开发中对数据监听和本地存储的使用过程。
              </p>
              <p>
                <span class="btn btn-default">作者：皮皮</span>
                <a class="btn btn-default" href="#" role="button"
                  >View details</a
                >
              </p>
            </div>
          </router-link>
        </div>
        <div class="col-md-4">
          <router-link to="/tensorflow">
            <div class="col-md-12">
              <h5>JavaScript的本地存储与数据监听</h5>
              <p>
                随着web的技术的不断进步，应用的复杂度也再不断的提高。我就讲一下我的再web开发中对数据监听和本地存储的使用过程。
              </p>
              <p>
                <span class="btn btn-default">作者：皮皮</span>
                <a class="btn btn-default" href="#" role="button"
                  >View details</a
                >
              </p>
            </div>
          </router-link>
        </div>
        <div class="col-md-4">20px
          <router-link to="/tensorflow">
            <div class="col-md-12">
              <h5>JavaScript的本地存储与数据监听</h5>
              <p>
                随着web的技术的不断进步，应用的复杂度也再不断的提高。我就讲一下我的再web开发中对数据监听和本地存储的使用过程。
              </p>
              <p>
                <span class="btn btn-default">作者：皮皮</span>
                <a class="btn btn-default" href="#" role="button"
                  >View details</a
                >
              </p>
            </div>
          </router-link>
        </div>
        <div class="col-md-4">
          <router-link to="/tensorflow">
            <div class="col-md-12">
              <h5>JavaScript的本地存储与数据监听</h5>
              <p>
                随着web的技术的不断进步，应用的复杂度也再不断的提高。我就讲一下我的再web开发中对数据监听和本地存储的使用过程。
              </p>
              <p>
                <span class="btn btn-default">作者：皮皮</span>
                <a class="btn btn-default" href="#" role="button"
                  >View details</a
                >
              </p>
            </div>
          </router-link>
        </div>
      </div>
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
        'static/pipi/file_6212662.webp',
      ],
      imgpipi: '',
      lists: [1,2,3,4,5,6,7,8]
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
  width: 500px;
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