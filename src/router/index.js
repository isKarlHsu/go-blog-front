import { createRouter, createWebHistory } from 'vue-router'
import Home from '@/views/Home.vue'

const Post = ()=>import('@/components/Post.vue')
const Cate = ()=>import('@/components/Cate.vue')
const Articles = ()=>import('@/components/Articles.vue')
const Article = ()=>import('@/components/Article.vue')
const About = ()=>import('@/components/About.vue')


const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: '/',
      name: 'index',
      component: Home,
      children: [
        {
          path: '/',
          name: 'articles',
          component: Articles,
        },
        {
          path: '/posts',
          name: 'posts',
          component: Post,
        },
        {
          path: '/cates',
          name: 'cates',
          component: Cate,
        },
        {
          path: '/posts',
          name: 'posts',
          component: Post,
        },
        {
          path: '/article/:article_id',
          name: 'article',
          component: Article
        },
        {
          path: '/about',
          name: 'about',
          component: About
          // route level code-splitting
          // this generates a separate chunk (About.[hash].js) for this route
          // which is lazy-loaded when the route is visited.
        }
      ]
    },
  ]
})

export default router
