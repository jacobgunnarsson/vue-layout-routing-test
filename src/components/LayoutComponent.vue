<template>
  <div class="layout-component">
    <navigation></navigation>

    LayoutComponent

    <router-view></router-view>
  </div>
</template>

<script>
import NavigationComponent from '@/components/NavigationComponent'

export default {
  components: {
    navigation: NavigationComponent
  },
  name: 'layout'
}
</script>
