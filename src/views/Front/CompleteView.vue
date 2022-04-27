<template>
<IsLoading style="z-index: 1000" :active="isLoading"></IsLoading>
  <div class="complete-view">
    <div class="complete-cart-line">
      <i class="bi bi-bag"></i>
      <div
        class="cart-line-space"
      ></div>
      <i class="bi bi-pencil"></i>
      <div
        class="cart-line-space"
      ></div>
      <i
        class="bi bi-check-all"
      ></i>
    </div>
    <div class="complete-section">
      <div class="complete-section-title">
        <div v-if="order.is_paid == false">
          訂單已成立
        </div>
        <div v-else>
          付款成功
        </div>
      </div>
      <div class="complete-section-table">
        <h3>您的訂單資訊</h3>
        <table>
          <tr>
            <th>您的訂單編號</th>
            <td>{{order.id}}</td>
          </tr>
          <tr>
            <th>您的姓名</th>
            <td>{{order.user?.tel}}</td>
          </tr>
          <tr>
            <th>您的信箱</th>
            <td>{{order.user?.email}}</td>
          </tr>
          <tr>
            <th>您的地址</th>
            <td>{{order.user?.address}}</td>
          </tr>
          <tr v-if="order.message == 0">
            <th>您的留言</th>
            <td>{{order.message}}</td>
          </tr>
          <tr>
            <th>付款情況</th>
            <td v-if="order.is_paid == true" style="color: green">已付款</td>
            <td v-else style="color: red">未付款</td>
          </tr>
        </table>
        <h3>您的訂單內容</h3>
        <table class="complete-section-table2">
          <thead>
            <tr>
              <th style="width: 50%">品名</th>
              <th style="width: 20%">單位</th>
              <th style="width: 30%">價格</th>
            </tr>
          </thead>
          <tbody>
            <tr v-for="item in order.products" :key="item.id">
              <td>{{item.product.title}}</td>
              <td>{{item.qty}}{{item.product.unit}}</td>
              <td>NT${{item.total}}元</td>
            </tr>
          </tbody>
        </table>
        <div class="complete-order-total">
          訂單金額 NT${{ parseInt(order.total)}}元
        </div>
      </div>
    </div>
    <div class="complete-bnt">
      <div class="complete-bnt-pay" v-if="order.is_paid == false">
        <div class="complete-bnt-pay-section">
          <router-link class="nav-link" id="link" to="/Products">
            <i class="bi bi-arrow-left-square"></i>
              繼續購物
          </router-link>
        </div>
        <div class="complete-bnt-pay-section">
          <button type="button" @click="payOrder()">
            前往付款
            <i class="bi bi-cash-coin"></i>
          </button>
        </div>
      </div>
      <div class="complete-bnt-pay-finish" v-else>
        <router-link class="nav-link" id="link" to="/">
          謝謝您的支持，點擊回至首頁。
        </router-link>
      </div>
    </div>
  </div>
</template>

<style>
.complete-view {
  margin-left: 5%;
  margin-right: 5%;
}

.complete-cart-line {
  padding-top: 7.8rem;
  display: flex;
  justify-content: center;
  font-size: 2rem;
  text-decoration: line-through;
}

.complete-cart-line i {
  background-color: rgb(75, 139, 87);
  color: aliceblue;
  border-radius: 50px;
  padding: 0px 8px 0px 8px;
}

.complete-cart-line-space {
  width: 25%;
  height: 24px;
  padding-bottom: 20px;
  border-bottom: 5px solid rgb(75, 139, 87);
}

.complete-section {
  margin-left: 15%;
  margin-right: 15%;
}

.complete-section-title {
  font-size: 2.5rem;
  margin-top: 3rem;
  margin-bottom: 2rem;
  display: flex;
  justify-content: center;
  font-weight: 600;
}

.complete-section-table {
  border: 1px solid rgb(182, 177, 177);
  box-shadow: 0px 0px 30px 10px #cccccc;
}

.complete-section-table h3 {
  font-weight: 600;
  display: flex;
  justify-content: center;
  margin-top: 3rem;
  margin-bottom: 1rem;
}

.complete-section-table table {
  margin-right: 20%;
  margin-left: 20%;
}

.complete-section-table table th{
  border: 1px solid rgb(182, 177, 177);
  width: 40%;
  padding: 1rem;
}

.complete-section-table table td{
  border: 1px solid rgb(182, 177, 177);
  width: 1000px;
  padding: 1rem;
}

.complete-section-table2 {
  margin-bottom: 3rem;
}

.complete-order-total {
  display: flex;
  justify-content: center;
  font-size: 2rem;
  font-weight: 600;
  color: brown;
  margin-bottom: 2rem;
}

.complete-bnt {
  margin: 1rem 15% 3rem 15%
}

.complete-bnt-pay {
  display: flex;
  justify-content: space-between;
  font-size: 1.3rem;
  margin-top: 3rem;
}

.complete-bnt-pay-section {
  border: 1px solid rgb(58, 105, 67);
  padding: 0rem;
  height: 3rem;
  border-radius: 5px;
}

.complete-bnt-pay-section .nav-link {
  padding: 8px 6px 8px 6px;
}

.complete-bnt-pay button {
  border: none;
  background-color: rgba(0, 0, 0, 0);
  color: rgb(58, 105, 67);
  padding: 8px 6px 8px 6px;
}

.complete-bnt-pay-section .nav-link:hover{
  color: white;
  background-color: rgb(58, 105, 67);
  transition: 0.5s;
}

.complete-bnt-pay button:hover{
  color: white;
  background-color: rgb(58, 105, 67);
  transition: 0.5s;
}

.complete-bnt-pay-finish {
  display: flex;
  justify-content: center;
  font-size: 2rem;
  border: 3px solid rgb(58, 105, 67);
  max-width: 486px;
  margin: 0px auto;
  font-weight: 600;
  border-radius: 5px;
  margin-top: 3rem;
}

.complete-bnt-pay-finish:hover{
  background-color: rgb(58, 105, 67);
  transition: 0.5s;
}

.complete-bnt-pay-finish .nav-link:hover{
  color: white;
  transition: 0.5s;
}

@media (max-width:1035px) {
  .complete-section-table table th{
    padding: 0.5rem;
  }
}

@media (max-width:1035px) {
  .complete-section-table table td{
    padding: 0.5rem;
  }
}

@media (max-width:965px) {
  .complete-section-table table {
    margin-right: 10%;
    margin-left: 10%;
  }
}

@media (max-width:725px) {
  .complete-section {
    margin-right: 10%;
    margin-left: 10%;
  }
}

@media (max-width:635px) {
  .complete-section {
    margin-right: 2%;
    margin-left: 2%;
  }
}
</style>

<script>
export default {
  data () {
    return {
      isLoading: false,
      order: ''
    }
  },
  methods: {
    getData () {
      this.isLoading = true
      const { id } = this.$route.params
      const Url = `${process.env.VUE_APP_API}/api/${process.env.VUE_APP_PATH}/order/${id}`
      this.$http.get(Url)
        .then((res) => {
          this.order = res.data.order
          this.isLoading = false
          window.scrollTo(0, 0)
        })
    },
    payOrder () {
      const { id } = this.$route.params
      const Url = `${process.env.VUE_APP_API}/api/${process.env.VUE_APP_PATH}/pay/${id}`
      this.$http.post(Url)
        .then((res) => {
          this.$httpMessageState(res, '付款')
          this.getData()
        })
        .catch((err) => {
          this.$httpMessageState(err.response, '付款')
        })
    }
  },
  mounted () {
    this.getData()
  }
}
</script>
