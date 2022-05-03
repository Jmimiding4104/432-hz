<template>
<IsLoading style="z-index: 1000" :active="isLoading"></IsLoading>
    <div class="products-img">
      <div class="producrs-title">
        <h2>活動與商品</h2>
      </div>
    </div>
    <div class="products-wrap">
      <div class="products-link">
        <router-link class="nav-link" id="link" to="/">首頁</router-link><p>> 活動與商品</p>
      </div>
      <div class="btn-group products-category" role="group" aria-label="Basic radio toggle button group">
        <input type="radio" class="btn-check" name="btnradio" id="all" autocomplete="off" @click="getData()" checked>
        <label class="btn btn-outline-primary" for="all">全部</label>

        <input type="radio" class="btn-check" name="btnradio" id="host" autocomplete="off" @click="getData('淨化活動')">
        <label class="btn btn-outline-primary" for="host">活動</label>

        <input type="radio" class="btn-check" name="btnradio" id="tableware" autocomplete="off" @click="getData('環保餐具')">
        <label class="btn btn-outline-primary" for="tableware">餐具</label>

        <input type="radio" class="btn-check" name="btnradio" id="donate" autocomplete="off" @click="getData('捐贈')">
        <label class="btn btn-outline-primary" for="donate">捐贈</label>

        <input type="radio" class="btn-check" name="btnradio" id="join" autocomplete="off" @click="getData('加入我們')">
        <label class="btn btn-outline-primary" for="join">招募</label>
      </div>
      <div class="row row-cols-xs-1 row-cols-md-2 row-cols-lg-3 row-cols-xl-4">
        <div class="col" v-for="item in products" :key="item.id">
          <div class="card" style="width: 18rem">
            <div class="product-img-favorite" @click="toggleFavorite(item.id)" v-if="favorite.includes(item.id)">
                <i class="bi bi-heart-fill"></i>
            </div>
            <div class="product-img-favorite-join" @click="toggleFavorite(item.id)" v-else>
                <i class="bi bi-heart"></i>
            </div>
            <div class="card-img-top product-img" :style="{ backgroundImage: `url(${item.imageUrl})` }">
              <router-link class="product-img-router-link" :to="`/Product/${item.id}`"><i class="bi bi-search"/></router-link>
            </div>
            <div class="card-body">
              <div class="card-body-text">
                <h5 class="card-title">{{item.title}}</h5>
                <div class="card-description">
                  <p class="card-text">{{item.description}}</p>
                </div>
              </div>
              <div class="card-body-btn">
                <button type="button" class="btn btn-primary" title="加入購物車" @click="addToCart(item.id)">
                  <i class="bi bi-bag-plus"></i>
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
</template>

<style>
.products-img {
  background-image: url(~/src/assets/img/products/products-img.jpg);
  height: 400px;
  background-position: top center;
  display: flex;
  justify-content: center;
  align-items: center;
}

.producrs-title h2{
  position: relative;
  top: 20px;
  color: rgb(34, 63, 40);
  font-weight: 600;
  font-size: 3rem;
  background-color: rgba(365, 365, 365, 0.5);
  padding: 1rem;
  border-radius: 10px;
}

.products-wrap {
  margin-left: 5%;
  margin-right: 5%;
}

.products-link {
  margin-top: 1rem;
  width: 100%;
  display: flex;
  font-size: 1.2rem;
}

.products-link .nav-link {
  padding: 0px 1rem;
}

.products-category {
  display: flex;
}

.col {
  display: flex;
  justify-content: center;
}

.card {
  height: 24rem;
  margin-top: 1rem;
  position: relative;
}

.product-img-favorite {
  background-color: aliceblue;
  position: absolute;
  width: 2.5rem;
  height: 3rem;
  right: 10px;
  top: 0px;
  border-bottom-right-radius: 5px;
  border-bottom-left-radius: 5px;
  box-shadow: 1px 1px 5px 1px #cccccc;
  z-index: 10;
}

.product-img-favorite i {
  display: flex;
  justify-content: center;
  padding-top: 35%;
  font-size: 1.5rem;
  color: red;
}

.product-img-favorite-join {
  background-color: aliceblue;
  position: absolute;
  width: 2.5rem;
  height: 3rem;
  right: 10px;
  top: 0px;
  border-bottom-right-radius: 5px;
  border-bottom-left-radius: 5px;
  box-shadow: 1px 1px 5px 1px #cccccc;
  z-index: 10;
}

.product-img-favorite-join i {
  display: flex;
  justify-content: center;
  padding-top: 35%;
  font-size: 1.5rem;
}

.product-img-favorite-join i:hover {
  -webkit-text-stroke: 1px red;
}

.product-img {
  height: 13rem;
  background-size: cover;
  border: 1px solid rgba(0, 0, 0, 0.1);
}

.product-img-router-link {
  text-decoration: none;
  z-index: 10;
}

.product-img-router-link i {
  font-size: 7rem;
  font-weight: 900;
  display: flex;
  justify-content: center;
  padding-top: 20%;
  padding-bottom: 14%;
  color: rgba(0, 0, 0, 0);
  z-index: 10;
}

.product-img-router-link i:hover {
  background-color: rgba(0,0,0,0.5);
  -webkit-text-stroke: 2px black;
  color: white;
  transition: 0.2s;
  filter: brightness(100%);
  z-index: 10;
}

.card-body {
  display: flex;
  justify-content: space-between;
}

.card-body h5{
  font-size: 1.5rem;
  font-weight: 800;
}

.card-body-text {
  width: 65%;
}

.card-description {
  padding-top: 0.5rem;
}

.card-body-btn {
  display: flex;
  flex-direction: column;
  justify-content: center;
  width: 30%;
  height: 100%;
}
.card-body-btn i {
  display: flex;
  width: 3rem;
  height: 3rem;
  font-size: 2.5rem;
  padding-left: 5px;
}
</style>

<script>
export default {
  data () {
    return {
      isLoading: false,
      products: [],
      favorite: JSON.parse(localStorage.getItem('favorite')) || []
    }
  },
  inject: ['emitter'],
  methods: {
    getData (category) {
      this.isLoading = true
      let Url = `${process.env.VUE_APP_API}/api/${process.env.VUE_APP_PATH}/products/all`
      if (category) {
        Url = `${process.env.VUE_APP_API}/api/${process.env.VUE_APP_PATH}/products?category=${category}`
      }
      this.$http.get(Url)
        .then((res) => {
          this.products = res.data.products
          this.isLoading = false
        })
        .catch((err) => {
          this.$httpMessageState(err.response, '載入資料')
        })
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
    toggleFavorite (id) {
      const favoriteIndex = this.favorite.findIndex((item) => item === id)
      if (favoriteIndex === -1) {
        this.favorite.push(id)
      } else {
        this.favorite.splice(favoriteIndex, 1)
      }
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
    this.getData()
  }
}
</script>
