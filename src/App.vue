<template>
  <ToastsMessage />
  <router-view />
</template>

<style lang="scss">
@import "./assets/stylesheet/all.scss"
</style>

<script>
import ToastsMessage from '@/components/ToastsMessage.vue'
export default {
  components: {
    ToastsMessage
  }
}
</script>
