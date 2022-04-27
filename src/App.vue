<template>
<div class="wrap">
  <ToastsMessage class="toasts-message" />
  <router-view />
</div>
</template>

<style lang="scss">
@import "./assets/stylesheet/all.scss"
</style>

<style>
.toasts-message {
  top: 50px;
  right: 10px;
}
</style>

<script>
import ToastsMessage from '@/components/ToastsMessage.vue'
import emitter from '@/libs/emitter'
export default {
  data () {
    return {}
  },
  provide () {
    return {
      emitter
    }
  },
  components: {
    ToastsMessage
  }
}
</script>
