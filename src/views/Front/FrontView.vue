<template>
  <FrontNavbar class="FrontNavbar" />
  <router-view />
  <FrontFooter />
</template>

<style>
.FrontNavbar {
  position: fixed;
  width: 100%;
}
</style>

<script>
import FrontNavbar from '@/components/FrontNavbar.vue'
import FrontFooter from '@/components/FrontFooter.vue'
export default {
  data () {
    return {}
  },
  components: {
    FrontNavbar,
    FrontFooter
  }
}
</script>
