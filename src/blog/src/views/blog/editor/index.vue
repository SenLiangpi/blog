<!--
 * @Author: Pi Patle
 * @Email: pisenliang@gmail.com
 * @Github: https://github.com/SenLiangpi
 * @Website: https://senliangpi.github.io/blog/#/
 * @Date: 2021-05-08 17:37:11
 * @LastEditors: Pi Patle
 * @LastEditTime: 2021-05-10 15:11:27
-->
<template>
  <div class="editor">
    <div style="">
      <div id="toolbar-container" class="toolbar" style="width: 1000px;margin: 0 auto;"></div>
    </div>
    <!-- <div style="height: 200px;"></div> -->
    <div style="height: 500px;width: 1000px;margin: 0 auto;" id="text-container" class="text">
      <p>wangEditor 编辑器测试使用</p>
    </div>
  </div>
</template>
<script>
import E from "wangeditor";
export default {
  name: "editor",
  data() {
    return {
      
    };
  },
  created(){
  },
  mounted() {
    this.$nextTick(() => {
      const editor = new E("#toolbar-container", "#text-container");
      editor.create();
    });
  },
};
</script>
<style lang="less">
  .editor{
    margin-top: 100px;
  }
  .editor p{
    color: #000;
    margin: 10px 0;
    letter-spacing: 0;
    font-weight: 200;
    text-transform: none;
    text-align: left;
  }
</style>