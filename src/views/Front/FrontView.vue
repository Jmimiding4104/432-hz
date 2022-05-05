<template>
  <FrontNavbar class="FrontNavbar" style="z-index: 999" />
  <router-view />
  <div type="button" @click="goTop()">
    <i class="bi bi-arrow-up-circle-fill"></i>
  </div>
  <div>
  <OffcanvasView />
  </div>
  <FrontFooter />
</template>

<style>
.FrontNavbar {
  position: fixed;
  width: 100%;
}

.bi-arrow-up-circle-fill {
  font-size: 3rem;
  position: fixed;
  right: 5px;
  bottom: 5px;
  color: rgba(0, 0, 0, 0.5);
}
</style>

<script>
import FrontNavbar from '@/components/FrontNavbar.vue'
import FrontFooter from '@/components/FrontFooter.vue'
import OffcanvasView from '@/components/OffcanvasView-test.vue'
export default {
  data () {
    return {}
  },
  components: {
    FrontNavbar,
    FrontFooter,
    OffcanvasView
  },
  methods: {
    goTop () {
      document.documentElement.scrollTop = 0
    },
    oo () {
      this.$refs.OffcanVas.toggle()
    }
  }
}
</script>
