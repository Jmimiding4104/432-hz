<template>
  <div class="wrap">
    <div class="products-img">
      <div class="producrs-title">
        <h2>活動與商品</h2>
      </div>
    </div>
    <div class="product-wrap">
      <div class="products-link">
        <router-link class="nav-link" id="link" to="/">首頁</router-link><p>> 活動與商品</p>
      </div>
      <div class="row row-cols-xs-1 row-cols-md-2 row-cols-lg-3 row-cols-xl-4">
        <div class="col" v-for="item in products" :key="item.id">
          <div class="card" style="width: 18rem">
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
                <a href="#" class="btn btn-primary" title="加入購物車"><i class="bi bi-bag-plus"></i></a>
              </div>
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

.product-wrap {
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

.products-link p {
}

.card {
  height: 24rem;
  margin-top: 1rem;
}

.product-img {
  height: 13rem;
  background-size: cover;
  border: 1px solid rgba(0, 0, 0, 0.1);
}

.product-img-router-link {
  text-decoration: none;
}

.product-img i {
  font-size: 7rem;
  font-weight: 900;
  display: flex;
  justify-content: center;
  padding-top: 20%;
  padding-bottom: 14%;
  color: rgba(0, 0, 0, 0);
}

.product-img:hover {
  filter: brightness(50%);
  transition: 0.2s;
}

.product-img i:hover {
  -webkit-text-stroke: 2px black;
  color: white;
  transition: 0.2s;
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
      products: []
    }
  },
  methods: {
    getData () {
      const Url = `${process.env.VUE_APP_API}/api/${process.env.VUE_APP_PATH}/products/all`
      this.$http.get(Url)
        .then((res) => {
          this.products = res.data.products
          console.log(this.products)
        })
        .catch((err) => {
          console.log(err)
        })
    }
  },
  mounted () {
    this.getData()
  }
}
</script>
