<template>
<IsLoading style="z-index: 1000" :active="isLoading"></IsLoading>
  <div class="product-wrap">
    <div class="product-link">
      <router-link class="nav-link" id="link" to="/">首頁</router-link><span>></span><router-link class="nav-link" id="link" to="/Products">活動與產品</router-link><p>> 活動與商品</p>
    </div>
    <div class="item-container">
      <div class="item-container-img" :style="{ backgroundImage: `url(${product.imageUrl})` }"></div>
      <div class="item-container-text">
        <div class="product-title">
          {{product.title}}
        </div>
        <div class="product-category">
          {{product.category}}
        </div>
        <div class="product-container">
          <div class="product-container-description">
            <p>活動時間[地點]</p>{{product.description}}
          </div>
          <div class="product-container-content">
            <p>活動內容敘述</p>{{product.content}}
          </div>
        </div>
        <div class="product-price" v-show="product.origin_price != product.price">
          <div class="origin-price">
            原價{{product.origin_price}}/{{product.unit}}
          </div>
          <div class="price">
            特價{{product.price}}/{{product.unit}}
          </div>
        </div>
        <div class="product-price" v-show="product.origin_price === product.price">
          <div class="price">
            價格{{product.price}}/{{product.unit}}
          </div>
        </div>
        <div class="product-seletion">
          <div class="product-numbers">
            <div class="input-group">
              <select class="form-select" v-model="qty">
                <option value="" disabled selected>--請選擇--</option>
                <option :value="num" v-for="num in 100" :key="`${num}${product.id}`">{{num}}</option>
              </select>
              <span class="input-group-text">{{product.unit}}</span>
            </div>
          </div>
          <!--<div class="product-btn" v-if='product.title == "加入志工行列"'>
            <button class="btn btn-primary" type="button" @click="volunteerAddToCart(product.id, qty)">清空購物車並加入志工行列</button>
          </div>-->
          <div class="product-btn">
            <button class="btn btn-primary" type="button" @click="addToCart(product.id, qty)">加入購物車</button>
          </div>
        </div>
      </div>
    </div>
    <div class="product-donate-text">
      <h3><i class="bi bi-gift"></i>若您欲幫助我們<i class="bi bi-gift"></i></h3>
      <div class="product-donate-text-donate">
        <h4>donate10</h4><i class="bi bi-arrow-return-left"></i>
      </div>
      <div class="product-donate-text-p">
        <p>歡迎於產品列表點選捐款選項，亦於結帳頁面輸入此donate10優惠碼，即可捐贈總金額之10%予本機構。</p>
        <p>我們會將您捐贈金額之50%用於維持本機構運作，另50%將捐贈於外機構，若您希望捐贈額全數協助我們機構運作，可於訂單備註相關內容。</p>
        <p>所有金流將公布於本機構Facebook頁面。</p>
      </div>
    </div>
  </div>
</template>

<style>
.product-wrap {
  margin-left: 5%;
  margin-right: 5%;
}

.product-link {
  height: 1rem;
  padding-top: 5rem;
  width: 100%;
  display: flex;
  font-size: 1.2rem;
}

.nav-link {
  padding: 0px 1rem;
}

.item-container {
  margin-top: 3rem;
  display: flex;
}

.item-container-img {
  width: 45%;
  height: 504px;
  background-position: center;
  background-size: cover;
  border: 1px solid rgba(0, 0, 0, 0.1);
}

.item-container-text {
  margin-left: 5%;
  width: 50%;
}

.product-title {
  font-weight: 600;
  font-size: 2.5rem;
  margin-bottom: 0.5rem;
}

.product-category {
  display: inline;
  background-color: rgba(34, 121, 87);
  padding: 0.1rem;
  border-radius: 5px;
  color: aliceblue;
}

.product-container {
  padding: 0.5rem;
  margin-top: 1rem;
  background-color: rgb(152, 219, 172);
}

.product-container p {
  margin-bottom: 0.5rem;
  font-weight: 600;
  font-size: 1.5rem;
}

.product-container-content {
  margin-top: 1rem;
}

.product-container-description {
  margin-bottom: 1rem;
}

.product-price {
  display: flex;
  flex-direction: column;
  align-items: flex-end;
}

.product-price .origin-price {
  color: gray;
  text-decoration: line-through;
}

.product-price .price {
  font-size: 2rem;
}

.product-seletion {
  display: flex;
  flex-direction: column;
  justify-content: flex-end;
  align-items: flex-end;
}

.input-group {
  width: 20rem;
}

.product-btn button{
  margin-top: 0.5rem;
  width: 20rem;
}

.product-donate-text {
  margin-top: 10rem;
  margin-left: 25%;
  margin-right: 25%;
  width: 50%;
  display: flex;
  flex-direction: column;
}

.product-donate-text {
  font-weight: 600;
}

.product-donate-text h3{
  text-align: center;
  font-weight: 600;
  font-size: 2rem;
  color: rgb(49, 114, 68);
}

.product-donate-text-donate {
  display: flex;
  justify-content: center;
  align-items: center;
  margin: 2rem auto;
}

.product-donate-text-donate h4 {
  font-weight: 600;
}

.product-donate-text-donate i {
  font-size: 1.5rem;
  position: relative;
  bottom: 5px;
}

.product-donate-text-p {
  border: 5px solid rgb(49, 114, 68);
  padding: 1rem;
  border-radius: 5px;
}

@media (max-width:1000px) {
  .item-container {
    flex-direction: column;
  }
}

@media (max-width:1000px) {
  .item-container-img {
    width: 100%;
  }
}

@media (max-width:1000px) {
  .item-container-text {
    width: 90%;
  }
}
</style>

<script>
export default {
  data () {
    return {
      isLoading: false,
      product: {},
      qty: ''
    }
  },
  inject: ['emitter'],
  methods: {
    getData () {
      this.isLoading = true
      const { id } = this.$route.params
      const Url = `${process.env.VUE_APP_API}/api/${process.env.VUE_APP_PATH}/product/${id}`
      this.$http.get(Url)
        .then((res) => {
          this.product = res.data.product
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
    }
    /* volunteerAddToCart (id, qty = 1) {
      this.isLoading = true
      const DelCart = `${process.env.VUE_APP_API}/api/${process.env.VUE_APP_PATH}/carts`
      const data = {
        product_id: id,
        qty
      }
      const Url = `${process.env.VUE_APP_API}/api/${process.env.VUE_APP_PATH}/cart`
      this.$http.delete(DelCart)
        .then((res) => {
          this.$httpMessageState(res, '刪除購物車')
        })
        .catch((err) => {
          this.$httpMessageState(err.response, '刪除購物車')
        })
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
    } */
  },
  mounted () {
    this.getData()
  }
}
</script>
