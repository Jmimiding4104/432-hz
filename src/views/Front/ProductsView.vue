<template>
  <div class="wrap">
    <div class="row row-cols-xs-1 row-cols-md-2 row-cols-lg-3 row-cols-xl-4">
      <div class="col" v-for="item in products" :key="item.id">
        <div class="card" style="width: 18rem">
          <img :style="{ backgroundImage: `url(${item.imageUrl})` }" class="card-img-top"/>
          <div class="card-body">
            <div class="card-body-text">
              <h5 class="card-title">{{item.title}}</h5>
              <p class="card-text">{{item.description}}</p>
            </div>
            <div class="card-body-btn">
              <a href="#" class="btn btn-primary"><i class="bi bi-bag-plus"></i></a>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<style>
.card {
  height: 24.1rem;
}

.card img {
  height: 13rem;
  background-size: cover;
}

.card-body {
  display: flex;
  justify-content: space-between;
}

.card-body-btn {
  display: flex;
  justify-content: center;
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
