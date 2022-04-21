<template>
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
      <div
        class="cart-line-space"
        style="border-bottom: 5px solid rgb(197, 224, 96)"
      ></div>
      <i class="bi bi-wallet" style="background-color: rgb(197, 224, 96)"></i>
    </div>
    <div class="cart-products" v-if="carts.carts != 0">
      <div class="cart-products-list">
        <table>
          <thead>
            <tr class="cart-products-list-title">
              <th style="width: 240px"></th>
              <th style="width: 240px; text-align: left">名稱</th>
              <th style="width: 240px">數量</th>
              <th style="width: 240px">金額</th>
              <th style="width: 100px"></th>
            </tr>
          </thead>
          <tbody>
            <template v-for="item in carts.carts" :key="item.id">
              <tr class="cart-products-list-content">
                <td style="width: 60px">
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
                      class="btn btn-outline-primary"
                      type="button"
                      @click="updataCart(item.id, item.qty - 1)"
                    >
                      -
                    </button>
                    <span>{{ item.qty }}</span>
                    <button
                      class="btn btn-outline-primary"
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
  width: 15%;
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
</style>

<script>
import emitter from '@/libs/emitter'
export default {
  data () {
    return {
      carts: '',
      code: ''
    }
  },
  methods: {
    getData () {
      const Url = `${process.env.VUE_APP_API}/api/${process.env.VUE_APP_PATH}/cart`
      this.$http.get(Url)
        .then((res) => {
          this.carts = res.data.data
          console.log(this.carts)
        })
    },
    updataCart (id, qty) {
      const Url = `${process.env.VUE_APP_API}/api/${process.env.VUE_APP_PATH}/cart/${id}`
      const data = {
        product_id: id,
        qty
      }
      this.$http.put(Url, { data })
        .then((res) => {
          console.log(res)
          this.getData()
        })
        .catch((err) => {
          console.log(err)
        })
    },
    delCartProduct (id) {
      const Url = `${process.env.VUE_APP_API}/api/${process.env.VUE_APP_PATH}/cart/${id}`
      this.$http.delete(Url)
        .then((res) => {
          console.log(res)
          this.getData()
          emitter.emit('get-cart')
        })
    },
    useCoupon (code) {
      const Url = `${process.env.VUE_APP_API}/api/${process.env.VUE_APP_PATH}/coupon`
      const data = {
        code: code
      }
      this.$http.post(Url, { data })
        .then((res) => {
          this.getData()
          console.log(res)
          console.log(this.carts)
        })
    },
    delCarts () {
      const Url = `${process.env.VUE_APP_API}/api/${process.env.VUE_APP_PATH}/carts`
      this.$http.delete(Url)
        .then((res) => {
          this.getData()
          emitter.emit('get-cart')
        })
    },
    useOriginalCoupon () {
      const Url = `${process.env.VUE_APP_API}/api/${process.env.VUE_APP_PATH}/coupon`
      const data = {
        code: 'original'
      }
      this.$http.post(Url, { data })
        .then((res) => {
          this.getData()
        })
    }
  },
  mounted () {
    this.getData()
  }
}
</script>
