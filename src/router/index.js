import Vue from 'vue'
import Router from 'vue-router'
import HomeComponent from '@/components/HomeComponent'
import LayoutComponent from '@/components/LayoutComponent'
import BlogComponent from '@/components/BlogComponent'
import InfoComponent from '@/components/InfoComponent'

Vue.use(Router)

export default new Router({
  mode: 'history',
  routes: [
    {
      path: '/',
      name: 'Home',
      component: HomeComponent
    },
    {
      path: '/',
      name: 'layout',
      component: LayoutComponent,
      children: [
        {
          path: 'info',
          component: InfoComponent
        },
        {
          // Hämta WP-blogposter
          path: 'blog',
          component: BlogComponent,
          // children: [
          //   {
          //     // visa lista med poster
          //     // f;r varje post g;r en l'nk /blog/<post-id>
          //     path: '/',
          //     component: BlogIndexComponent
          //   },
          //   {
          //     path: 'archive',
          //     component: BlogArchiveComponent
          //   },
          //   {
          //     // anv'nd :postId f;r att h'mta post data
          //     path: ':postId',
          //     component: BlogPostComponent
          //   }
          // ]
        }
      ]
    }
  ]
})
