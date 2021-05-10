<!--
 * @Author: Pi Patle
 * @Email: pisenliang@gmail.com
 * @Github: https://github.com/SenLiangpi
 * @Website: https://senliangpi.github.io/blog/#/
 * @Date: 2021-05-10 14:47:04
 * @LastEditors: Pi Patle
 * @LastEditTime: 2021-05-10 14:57:18
-->
<template>
  <div class="list">
    <div class="test-lists container">
      <div class="dom-list"  v-for="(a,index) in lists" :key="index">
        <router-link :to="a.href">
          <h1>{{a.name}}</h1>
          <p>
            {{a.text}}
          </p>
        </router-link>
      </div>
    </div>
  </div>
</template>
<script>
export default {
  name: "list",
  data() {
    return {
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
  },
  mounted() {
    
  },
};
</script>
<style lang="less" scoped>
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