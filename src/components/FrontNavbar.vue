<template>
  <div class="front-navbar">
    <nav class="navbar navbar-expand-lg navbar-dark bg-primary">
      <div class="container-fluid">
        <div class="navbar-logo">
          <router-link class="navbar-brand" to="/"
            ><img style="height: 100%" src="../../src/assets/logo.png"
          /></router-link>
        </div>
        <button
          class="navbar-toggler"
          type="button"
          @click="toggleNavHam()"
        >
          <span class="navbar-toggler-icon"></span>
        </button>
        <div class="collapse navbar-collapse navbar-list-rwd-991" ref="collapse">
          <ul class="navbar-nav mb-2 mb-lg-0">
            <li class="nav-item">
              <router-link class="nav-link" id="link" to="/Products" @click="closeNavHam()">
                產品列表
              </router-link>
            </li>
            <li class="nav-item">
              <router-link class="nav-link" id="link" to="/Follow" @click="closeNavHam()">
                訂單查詢
              </router-link>
            </li>
            <li class="nav-item">
              <router-link class="nav-link" id="link" to="/Product/-N12zdPYO8jPUcn-Q4nR" @click="closeNavHam()">
                加入我們
              </router-link>
            </li>
            <li class="nav-item">
              <router-link class="nav-link" id="link" to="/Cart" @click="closeNavHam()">
                <i class="bi bi-bag">
                  <span class="position-absolute top-10 start-90 translate-middle badge rounded-pill bg-danger">
                    {{carts.length}}
                  </span>
                </i>
              </router-link>
            </li>
          </ul>
        </div>
      </div>
    </nav>
  </div>
</template>

<style>
.front-navbar {
  z-index: 999;
}

.navbar-logo {
  margin-left: 32px;
  height: 52px;
}

.navbar-logo img {
  width: 100%;
}

.container-fluid img {
  height: 40px;
}

.navbar-collapse {
  justify-content: flex-end;
  margin-right: 32px;
}

.nav-item {
  font-size: 1.5rem;
  font-weight: 600;
  margin-left: 2rem;
}

.nav-item span {
  position: relative;
  top: 20px;
}

@media (max-width:991px) {
  .navbar-list-rwd-991 {
    display: flex;
    justify-content: center;
  }
}

@media (max-width:991px) {
  .navbar-list-rwd-991 ul li {
    text-align: center;
  }
}

@media (max-width:991px) {
  .navbar-list-rwd-991 ul li span {
    position: absolute;
    left: 51.5%;
    top: 80%;
  }
}
</style>

<script>
import emitter from '@/libs/emitter'
import CollapseHam from '@/libs/CollapseHam.vue'
export default {
  mixins: [CollapseHam],
  data () {
    return {
      carts: {}
    }
  },
  methods: {
    getData () {
      const Url = `${process.env.VUE_APP_API}/api/${process.env.VUE_APP_PATH}/cart`
      this.$http.get(Url)
        .then((res) => {
          this.carts = res.data.data.carts
        })
    }
  },
  mounted () {
    this.getData()
    emitter.on('get-cart', () => this.getData())
  }
}
</script>
