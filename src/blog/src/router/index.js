/*
 * @Author: Pi Patle
 * @Email: pisenliang@gmail.com
 * @Github: https://github.com/SenLiangpi
 * @Website: https://senliangpi.github.io/blog/#/
 * @Date: 2020-08-22 22:43:42
 * @LastEditors: Pi Patle
 * @LastEditTime: 2020-10-19 15:37:17
 */
import Vue from 'vue'
import Router from 'vue-router'
import HelloWorld from '@/views/home'

//blog
import blog from '@/views/blog/index.vue'


Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/',
      name: 'HelloWorld',
      component: HelloWorld
    },{
      path: '/blog',
      name: 'blog',
      component:blog
    }
  ]
})
