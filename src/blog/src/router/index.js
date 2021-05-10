/*
 * @Author: Pi Patle
 * @Email: pisenliang@gmail.com
 * @Github: https://github.com/SenLiangpi
 * @Website: https://senliangpi.github.io/blog/#/
 * @Date: 2020-08-22 22:43:42
 * @LastEditors: Pi Patle
 * @LastEditTime: 2021-05-10 15:05:57
 */
import Vue from 'vue'
import Router from 'vue-router'
import HelloWorld from '@/views/home'

//blog
import blog from '@/views/blog/index.vue'
import blog_list from '@/views/blog/list.vue'

//editor
import editor from '@/views/blog/editor/index.vue'

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
      component:blog,
      redirect: '/blog/list',
      children: [
        {
          path: 'list',
          component: blog_list,
          name: '列表',
        },
        {
          path: 'editor',
          component: editor,
          name: 'editor',
        },
      ]
    }
  ]
})
