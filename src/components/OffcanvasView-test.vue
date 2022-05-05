<template>
  <div class="offcanvas-view" style="z-index: 999">
    <span class="position-absolute top-0 start-0 translate-middle badge rounded-pill bg-danger">
      {{favoriteList.length}}
        <span class="visually-hidden">unread messages</span>
    </span>
    <button title="收藏" class="btn btn-success offcanvas-view-btn" type="button" data-bs-toggle="offcanvas" data-bs-target="#offcanvasRight" aria-controls="offcanvasRight">
      <i class="bi bi-bag-heart"></i>
    </button>
      <div class="offcanvas offcanvas-end" tabindex="-1" id="offcanvasRight" aria-labelledby="offcanvasRightLabel">
        <div class="offcanvas-header">
          <div class="offcanvas-header-title">
            <h5 id="offcanvasRightLabel">我的收藏</h5>
            <button type="button" class="btn btn-outline-danger" @click="clearfavorite()">清空最愛</button>
          </div>
          <button type="button" class="btn-close text-reset" data-bs-dismiss="offcanvas" aria-label="Close"></button>
        </div>
      <div class="offcanvas-body">
        <div class="offcanvas-body-content">
          <div class="offcanvas-products" v-for="item in favoriteList" :key="item.id">
            <div class="offcanvas-products-btn-img-title">
              <div class="offcanvas-products-btn">
                <button type="button" class="btn btn-outline-danger" @click="toggleFavorite(item.id)">
                  <i class="bi bi-heart-fill"></i>
                </button>
              </div>
              <div class="offcanvas-products-img" :style="{ backgroundImage: `url(${item.imageUrl})` }"></div>
              <div class="offcanvas-products-title">{{item.title}}</div>
            </div>
            <div class="offcanvas-products-select-btn">
              <div class="offcanvas-products-select">
                <select class="form-select" v-model="item.qty">
                  <option value="" disabled selected>--請選擇數量--</option>
                  <option :value="num" v-for="num in 100" :key="`${num}${item.id}`">{{num}}</option>
                </select>
              </div>
              <div class="offcanvas-products-cart">
                <button class="btn btn-primary" type="button" @click="addToCart(item.id, item.qty)"><i class="bi bi-cart-plus"></i></button>
              </div>
            </div>
          </div>
        </div>
        <div class="offcanvas-products-go-cart">
            <button class="btn btn-primary" type="button" @click="this.$router.push(`/Cart`)">前往結帳</button>
          </div>
      </div>
    </div>
  </div>
</template>

<style>
.offcanvas-view {
  position: fixed;
  right: 5px;
  bottom: 80px;
}

.offcanvas-body {
  display: flex;
  flex-direction: column;
  justify-content: space-between;
}

.offcanvas-view-btn {
  border-radius: 5px;
}

.offcanvas-header-title {
  display: flex;
}

.offcanvas-header-title button {
  margin-left: 1rem;
}

.offcanvas-view-btn i {
  font-size: 1.25rem;
}

.offcanvas-header h5 {
  margin: auto 0px;
  font-size: 2rem;
  font-weight: 600;
}

.offcanvas-products {
  padding-top: 2rem;
  padding-bottom: 2rem;
  display: flex;
  justify-content: space-between;
  border-bottom: 1px solid gainsboro;
}

.offcanvas-products-btn-img-title {
  display: flex;
  align-items: center;
}

.offcanvas-products-img {
  height: 2rem;
  width: 2rem;
  background-size: cover;
  margin-right: 1rem;
  margin-left: 1rem;
  box-shadow: 1px 1px 5px 1px #cccccc;
}

.offcanvas-products-title {
  font-weight: 600;
}

.offcanvas-products-select-btn {
  display: flex;
}

.offcanvas-products-select {
  width: 5rem;
  margin-right: 1rem;
}

.offcanvas-products-go-cart button {
  width: 100%;
}
</style>

<script>
import { Offcanvas } from 'bootstrap'
export default {
  inject: ['emitter'],
  data () {
    return {
      offcanvasList: '',
      favorite: JSON.parse(localStorage.getItem('favorite')) || [],
      favoriteList: [],
      products: [],
      qty: ''
    }
  },
  methods: {
    getData () {
      const Url = `${process.env.VUE_APP_API}/api/${process.env.VUE_APP_PATH}/products/all`
      this.$http.get(Url)
        .then((res) => {
          this.products = res.data.products
          this.getFavoriteList()
        })
    },
    getFavoriteList () {
      this.favorite = JSON.parse(localStorage.getItem('favorite')) || []
      // 與所以產品比對，有的就提取出來
      this.favoriteList = this.products.filter((item) => this.favorite.indexOf(item.id) > -1)
    },
    toggleFavorite (id) {
      const favoriteIndex = this.favorite.findIndex((item) => item === id)
      if (favoriteIndex === -1) {
        this.favorite.push(id)
      } else {
        this.favorite.splice(favoriteIndex, 1)
      }
      this.getData()
      this.emitter.emit('getFavoriteProducts')
    },
    addToCart (id, qty = 1) {
      this.isLoading = true
      const data = {
        product_id: id,
        qty
      }
      const Url = `${process.env.VUE_APP_API}/api/${process.env.VUE_APP_PATH}/cart`
      this.$http.post(Url, { data })
        .then((res) => {
          this.emitter.emit('get-cart')
          this.$httpMessageState(res, '加入購物車')
          this.isLoading = false
        })
        .catch((err) => {
          this.$httpMessageState(err.response, '加入購物車')
          this.isLoading = false
        })
    },
    clearfavorite () {
      this.favorite = []
      this.getData()
      this.emitter.emit('getFavoriteProducts')
    }
  },
  watch: {
    favorite: {
      handler () {
        localStorage.setItem('favorite', JSON.stringify(this.favorite))
      },
      deep: true
    }
  },
  mounted () {
    const offcanvasElementList = [].slice.call(document.querySelectorAll('.offcanvas'))
    this.offcanvasList = offcanvasElementList.map(function (offcanvasEl) {
      return new Offcanvas(offcanvasEl)
    })
    this.emitter.on('getFavorite', () => this.getData())
    this.getData()
  }
}
</script>
