<template>
<IsLoading style="z-index: 1000" :active="isLoading"></IsLoading>
  <div class="cart-wrap">
    <div class="cart-link">
      <router-link class="nav-link" id="link" to="/">首頁</router-link>
      <p>> 購物車</p>
    </div>
    <div class="cart-line">
      <i class="bi bi-bag"></i>
      <div
        class="cart-line-space"
        style="border-bottom: 5px solid rgb(197, 224, 96)"
      ></div>
      <i class="bi bi-pencil" style="background-color: rgb(197, 224, 96)"></i>
      <div
        class="cart-line-space"
        style="border-bottom: 5px solid rgb(197, 224, 96)"
      ></div>
      <i
        class="bi bi-check-all"
        style="background-color: rgb(197, 224, 96)"
      ></i>
    </div>
    <div class="cart-products" v-if="carts.carts != 0">
      <div class="cart-products-list">
        <table>
          <thead>
            <tr class="cart-products-list-title">
              <th style="width: 240px" class="cart-products-list-title-rwd-none"></th>
              <th style="width: 240px; text-align: left">名稱</th>
              <th style="width: 240px">數量</th>
              <th style="width: 240px">金額</th>
              <th style="width: 100px"></th>
            </tr>
          </thead>
          <tbody>
            <template v-for="item in carts.carts" :key="item.id">
              <tr class="cart-products-list-content">
                <td style="width: 60px" class="cart-products-list-title-rwd-none">
                  <div
                    class="cart-products-list-content-img"
                    :style="{
                      backgroundImage: `url(${item.product.imageUrl})`
                    }"
                  ></div>
                </td>
                <td style="width: 240px">{{ item.product.title }}</td>
                <td>
                  <div class="cart-products-list-num input-group">
                    <button
                      class="btn btn-outline-primary cart-products-list-num-button-minus"
                      type="button"
                      @click="updataCart(item.id, item.qty - 1)"
                    >
                      -
                    </button>
                    <span>{{ item.qty }}</span>
                    <button
                      class="btn btn-outline-primary cart-products-list-num-button-plus"
                      type="button"
                      @click="updataCart(item.id, item.qty + 1)"
                    >
                      +
                    </button>
                  </div>
                </td>
                <td class="cart-products-list-content-money">
                  NT $ {{ item.total }}
                </td>
                <td>
                  <button
                    type="button"
                    class="btn btn-outline-danger"
                    @click="delCartProduct(item.id)"
                  >
                    x
                  </button>
                </td>
              </tr>
            </template>
          </tbody>
        </table>
        <div
          class="cart-products-list-price"
          v-if="carts.total === carts.final_total"
        >
          <div class="cart-products-list-total">總金額 NT{{ carts.total }}</div>
        </div>
        <div class="cart-products-list-sale-price" v-else>
          <div class="cart-products-list-total">原金額 NT{{ carts.total }}</div>
          <div class="cart-products-list-final_total">
            原金額+捐款 NT{{ parseInt(this.carts.final_total) }}
          </div>
        </div>
        <div class="cart-products-list-coupon">
          <input type="text" placeholder="donate10" v-model="code" />
          <button
            type="button"
            class="btn btn-primary"
            @click="useCoupon(code)"
            v-if="carts.total === carts.final_total"
          >
            使用捐贈券
          </button>
          <button
            type="button"
            class="btn btn-outline-primary"
            @click="useOriginalCoupon()"
            v-else
          >
            恢復原價
          </button>
        </div>
      </div>
      <div class="cart-btn">
        <button type="button" class="btn btn-primary cart-btn-go">
          <router-link to="/Products">
            <span>繼續選物</span>
          </router-link>
        </button>
        <button
          type="button"
          class="btn btn-outline-danger"
          @click="delCarts()"
        >
          清除表單
        </button>
        <button type="button" class="btn btn-primary cart-btn-go">
          <router-link to="/Order">
            <span>下一步</span>
            <i class="bi bi-arrow-right-circle"></i>
          </router-link>
        </button>
      </div>
    </div>
    <div class="cart-products" v-else>
      <div class="cart-products-list">
        <div class="cart-no-products-list">
          <p>購物車尚無物品，請前往活動與產品頁面選購。</p>
          <button type="button" class="btn btn-primary cart-btn-go">
            <router-link to="/Products">
              <span>繼續選物</span>
            </router-link>
          </button>
        </div>
      </div>
    </div>
  </div>
</template>
<style>
.cart-wrap {
  margin-left: 5%;
  margin-right: 5%;
}

.cart-link {
  padding-top: 5rem;
  width: 100%;
  display: flex;
  font-size: 1.2rem;
}

.cart-link p {
  margin-bottom: 0px;
  margin: auto 0px;
}

.cart-line {
  display: flex;
  justify-content: center;
  font-size: 2rem;
  text-decoration: line-through;
}

.cart-line i {
  background-color: rgb(75, 139, 87);
  color: aliceblue;
  border-radius: 50px;
  padding: 0px 8px 0px 8px;
}

.cart-line-space {
  width: 25%;
  height: 24px;
  padding-bottom: 20px;
  border-bottom: 5px solid rgb(75, 139, 87);
}

.cart-products-list {
  border: 1px solid gray;
  margin: 5rem auto;
  box-shadow: 3px 3px 5px 6px #cccccc;
}

.cart-products-list table{
  margin: 0px auto;
  width: 90%;
}

.cart-products-list-title th {
  padding-top: 1rem;
  padding-bottom: 0.5rem;
  border-bottom: 1px solid black;
  text-align: center;
  font-size: 1.5rem;
}

.cart-products-list-content {
  color: gray;
  border-bottom: 1px solid rgb(223, 218, 218);
}

.cart-products-list-content td {
  padding-top: 1rem;
  padding-bottom: 1rem;
}

.cart-products-list-content-img {
  background-size: cover;
  background-position: center;
  width: 90px;
  height: 75px;
  margin: 0px auto;
}

.cart-products-list-num span{
  width: 40%;
  text-align: center;
  margin: auto 0px;
}

.cart-products-list-num {
  display: flex;
  justify-content: center;
}

.cart-products-list-content-money {
  text-align: center;
}

.cart-products-list-price {
  display: flex;
  flex-direction: column;
  align-items: flex-end;
  font-size: 1.5rem;
  color: red;
  font-weight: 600;
  margin-top: 1rem;
  margin-bottom: 1rem;
  padding-right: 5%;
}

.cart-products-list-sale-price {
  display: flex;
  flex-direction: column;
  align-items: flex-end;
  font-size: 1.5rem;
  color: red;
  font-weight: 600;
  margin-top: 1rem;
  margin-bottom: 1rem;
  padding-right: 5%;
}

.cart-products-list-sale-price .cart-products-list-total {
  font-size: 1rem;
  margin-bottom: 0.5rem;
  color: gray;
  text-decoration: line-through;
  padding-right: 5%;
}

.cart-products-list-coupon {
  display: flex;
  justify-content: flex-end;
  padding-right: 5%;
  padding-bottom: 1%;
}

.cart-products-list-coupon input {
  width: 25%;
}

.cart-btn {
  margin-left: 5%;
  margin-right: 5%;
  display: flex;
  justify-content: space-between;
}

.cart-btn-go span{
  color: aliceblue;
}

.cart-btn-go i{
  color: aliceblue;
}

.cart-no-products-list p {
  text-align: center;
  font-size: 2rem;
  padding-top: 2rem;
}

.cart-no-products-list button {
  font-size: 1.5rem;
  display: flex;
  margin: 3rem auto;
}

@media (max-width:966px) {
  .cart-products-list {
    margin-right: 5%;
  }
}

@media (max-width:768px) {
  .cart-products-list-title-rwd-none {
    display: none;
  }
}

@media (max-width:768px) {
  .cart-products-list-num {
    width: 65%;
    margin: 0px auto;
  }
}

@media (max-width:768px) {
  .cart-products-list-num td{
    width: 50%;
    justify-content: space-around;
  }
}

@media (max-width:768px) {
  .cart-products-list-num span {
    width: 25%;
  }
}

@media (max-width:630px) {
  .cart-products-list-num-button-minus {
    padding: 4px;
  }
}

@media (max-width:630px) {
  .cart-products-list-num-button-plus {
    padding: 2px;
  }
}

@media (max-width:570px) {
  .cart-products-list-num span {
    width: 35%;
  }
}
</style>

<script>
export default {
  data () {
    return {
      isLoading: false,
      carts: '',
      code: ''
    }
  },
  inject: ['emitter'],
  methods: {
    getData () {
      this.isLoading = true
      const Url = `${process.env.VUE_APP_API}/api/${process.env.VUE_APP_PATH}/cart`
      this.$http.get(Url)
        .then((res) => {
          this.carts = res.data.data
          this.isLoading = false
        })
    },
    updataCart (id, qty) {
      this.isLoading = true
      const Url = `${process.env.VUE_APP_API}/api/${process.env.VUE_APP_PATH}/cart/${id}`
      const data = {
        product_id: id,
        qty
      }
      this.$http.put(Url, { data })
        .then((res) => {
          this.getData()
          this.$httpMessageState(res, '更新購物車')
          this.isLoading = false
        })
        .catch((err) => {
          this.$httpMessageState(err.response, '更新購物車')
          this.isLoading = false
        })
    },
    delCartProduct (id) {
      this.isLoading = true
      const Url = `${process.env.VUE_APP_API}/api/${process.env.VUE_APP_PATH}/cart/${id}`
      this.$http.delete(Url)
        .then((res) => {
          this.$httpMessageState(res, '刪除物品')
          this.getData()
          this.emitter.emit('get-cart')
          this.isLoading = false
        })
        .catch((err) => {
          this.$httpMessageState(err.response, '刪除物品')
          this.isLoading = false
        })
    },
    useCoupon (code) {
      this.isLoading = true
      const Url = `${process.env.VUE_APP_API}/api/${process.env.VUE_APP_PATH}/coupon`
      const data = {
        code: code
      }
      this.$http.post(Url, { data })
        .then((res) => {
          this.getData()
          this.$httpMessageState(res, '使用捐贈券')
          this.isLoading = false
        })
        .catch((err) => {
          this.isLoading = false
          console.log(err)
          this.$httpMessageState(err.response, '使用捐贈券')
        })
    },
    delCarts () {
      this.isLoading = true
      const Url = `${process.env.VUE_APP_API}/api/${process.env.VUE_APP_PATH}/carts`
      this.$http.delete(Url)
        .then((res) => {
          this.getData()
          this.emitter.emit('get-cart')
          this.$httpMessageState(res, '清空購物車')
          this.isLoading = false
        })
        .catch((err) => {
          this.$httpMessageState(err.response, '清空購物車')
          this.isLoading = false
        })
    },
    useOriginalCoupon () {
      this.isLoading = true
      const Url = `${process.env.VUE_APP_API}/api/${process.env.VUE_APP_PATH}/coupon`
      const data = {
        code: 'original'
      }
      this.$http.post(Url, { data })
        .then((res) => {
          this.getData()
          this.$httpMessageState(res, '恢復原價')
          this.isLoading = false
        })
        .catch((err) => {
          this.$httpMessageState(err.response, '恢復原價')
          this.isLoading = false
        })
    }
  },
  mounted () {
    this.getData()
    this.emitter.on('get-cart', () => this.getData())
  }
}
</script>
