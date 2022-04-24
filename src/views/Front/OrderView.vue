<template>
<IsLoading style="z-index: 1000" :active="isLoading"></IsLoading>
  <div class="cart-wrap">
    <div class="cart-link">
      <router-link class="nav-link" id="link" to="/">首頁</router-link>
      <p>> 購物車</p>
    </div>
    <div class="cart-line">
      <i class="bi bi-bag"></i>
      <div class="cart-line-space"></div>
      <i class="bi bi-pencil"></i>
      <div
        class="cart-line-space"
        style="border-bottom: 5px solid rgb(197, 224, 96)"
      ></div>
      <i
        class="bi bi-check-all"
        style="background-color: rgb(197, 224, 96)"
      ></i>
    </div>
    <div class="order-fillin-view">
      <div class="fillin-form">
        <div class="fillin-form-title">填寫聯絡與寄送資料</div>
        <VForm ref="form" v-slot="{ errors }">
          <div class="mb-3">
            <label for="email" class="form-label">Email</label>
            <VField
              id="email"
              name="email"
              type="email"
              class="form-control"
              :class="{ 'is-invalid': errors['email'] }"
              placeholder="請輸入 Email"
              rules="email|required"
              v-model="form.user.email"
            ></VField>
            <error-message
              name="email"
              class="invalid-feedback"
            ></error-message>
          </div>

          <div class="mb-3">
            <label for="name" class="form-label">收件人姓名</label>
            <VField
              id="name"
              name="姓名"
              type="text"
              class="form-control"
              :class="{ 'is-invalid': errors['姓名'] }"
              placeholder="請輸入姓名"
              rules="required"
              v-model="form.user.name"
            ></VField>
            <error-message name="姓名" class="invalid-feedback"></error-message>
          </div>

          <div class="mb-3">
            <label for="phone" class="form-label">收件人手機</label>
            <VField
              id="phone"
              name="手機"
              type="text"
              class="form-control"
              :class="{ 'is-invalid': errors['手機'] }"
              placeholder="請輸入手機"
              :rules="isPhone"
              v-model="form.user.tel"
            ></VField>
            <error-message name="手機" class="invalid-feedback"></error-message>
          </div>

          <div class="mb-3">
            <label for="address" class="form-label">收件人地址</label>
            <VField
              id="address"
              name="地址"
              type="text"
              class="form-control"
              :class="{ 'is-invalid': errors['地址'] }"
              placeholder="請輸入地址"
              rules="required"
              v-model="form.user.address"
            ></VField>
            <error-message name="地址" class="invalid-feedback"></error-message>
          </div>

          <div class="mb-3">
            <label for="message" class="form-label">留言</label>
            <textarea
              id="message"
              class="form-control"
              cols="30"
              rows="10"
              v-model="form.message"
            ></textarea>
          </div>
        </VForm>
      </div>
      <div class="fillin-products">
        <h3><i class="bi bi-check2-circle"></i>我的選擇</h3>
        <div class="fillin-products-border">
          <div class="order-item" v-for="item in cartData.carts" :key="item.id">
            <div
              class="order-img"
              :style="{ backgroundImage: `url(${item.product.imageUrl})` }"
            ></div>
            <div class="order-item-descript">
              <div class="order-item-descript-1">
                <p>{{ item.product.title }}</p>
              </div>
              <div class="order-item-descript-2">
                <p>x{{ item.qty }}{{ item.product.unit }}</p>
                <p>${{ item.total }}</p>
              </div>
            </div>
          </div>
          <div class="cart-products-list-total-price">
          <div
            class="cart-products-list-price"
            v-if="cartData.total === cartData.final_total"
          >
            <div class="cart-products-list-total">總金額 NT{{ cartData.total }}</div>
          </div>
          <div class="cart-products-list-sale-price" v-else>
            <div class="cart-products-list-total">原金額 NT{{ cartData.total }}</div>
            <div class="cart-products-list-final_total">
              捐贈金額 NT{{ parseInt(cartData.final_total) - cartData.total }}
              <br>
              總合金額 NT{{ parseInt(cartData.final_total) }}
            </div>
          </div>
          </div>
        </div>
      </div>
    </div>
              <div class="payorder-next">
            <button
              type="submit"
              class="btn btn-outline-primary"
              @click.prevent="this.$router.push('/Products')"
            >
              繼續購物
            </button>
            <button
              class="btn btn-primary"
              @click.prevent="sendOrder()"
            >
              結帳
            </button>
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

.order-fillin-view {
  display: flex;
  flex-direction: row-reverse;
  margin-top: 2rem;
}

.fillin-form {
  width: 50%;
  padding: 0px 5%;
}

.fillin-form-title {
  font-size: 2rem;
  font-weight: 600;
  border-left: 5px solid rgb(75, 139, 87);
  padding-left: 1rem;
  margin-bottom: 1rem;
}

.fillin-products {
  display: flex;
  flex-direction: column;
  width: 50%;
  padding-left: 3rem;
  padding-right: 3rem;
}

.fillin-products h3 {
  font-size: 2.5rem;
  font-weight: 600;
  margin-bottom: 1rem;
}

.fillin-products i {
  color: rgb(75, 139, 87);
}

.fillin-products-border {
  border: 1px solid black;
  padding: 1rem;
  border-radius: 5px;
}

.order-item {
  display: flex;
  padding-top: 10px;
  border-bottom: 1px solid gray;
}

.order-item .order-img {
  width: 80px;
  height: 80px;
  background-size: cover;
  background-position: center;
}

.order-item-descript {
  padding-left: 1rem;
  width: 80%;
}

.order-item-descript-1 p {
  font-size: 2rem;
  margin-bottom: 0.5rem;
}

.order-item-descript-2 {
  display: flex;
  justify-content: space-between;
}

.cart-products-list-total {
  padding-right: 0px !important;
}

.cart-products-list-total-price {
  display: flex;
  justify-content: flex-end;
  margin-top: 1rem;
  margin-bottom: 1rem;
}

.payorder-next {
  display: flex;
  justify-content: space-between;
  padding-left: 5%;
  padding-right: 5%;
}
</style>

<script>
import emitter from '@/libs/emitter'
export default {
  data () {
    return {
      isLoading: false,
      cartData: '',
      orderId: '',
      form: {
        user: {
          name: '',
          email: '',
          tel: '',
          address: ''
        },
        message: ''
      },
      is_paid: ''
    }
  },
  methods: {
    getData () {
      this.isLoading = true
      const Url = `${process.env.VUE_APP_API}/api/${process.env.VUE_APP_PATH}/cart`
      this.$http
        .get(Url)
        .then((res) => {
          this.cartData = res.data.data
          this.isLoading = false
        })
        .catch((err) => {
          this.$httpMessageState(err, '取得資料')
          this.isLoading = false
        })
    },
    isPhone (value) {
      const phoneNumber = /^(09)[0-9]{8}$/
      return phoneNumber.test(value) ? true : '需要正確的電話號碼'
    },
    sendOrder () {
      const Url = `${process.env.VUE_APP_API}/api/${process.env.VUE_APP_PATH}/order`
      const data = {
        user: this.form.user,
        message: this.form.message
      }
      this.$http
        .post(Url, { data })
        .then((res) => {
          this.orderId = res.data.orderId
          this.$httpMessageState(res, '訂單建立')
          this.$router.push(`/Complete/${this.orderId}`)
          emitter.emit('get-cart')
        })
        .catch((err) => {
          this.$httpMessageState(err, '訂單建立')
        })
    }
  },
  mounted () {
    this.getData()
  }
}
</script>
