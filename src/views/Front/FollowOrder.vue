<template>
  <IsLoading style="z-index: 1000" :active="isLoading"></IsLoading>
  <div class="follow-img">
    <h1>訂單查詢</h1>
  </div>
    <div class="follw-order-view">
      <div class="follw-order-view-title">
        <i class="bi bi-keyboard"></i>
        <h2>請輸入訂單編號</h2>
      </div>
      <div class="follw-order-view-input">
        <input type="text" id="follow" v-model="orderId">
      </div>
      <div class="follw-order-view-btn">
        <router-link class="follw-order-view-btn-link" :to="`/Complete/${orderId}`"><p>查詢訂單</p></router-link>
      </div>
    </div>
</template>

<style>
.follow-img {
  background-image: url(~/src/assets/img/follow/follow-title.jpg);
  height: 400px;
  background-position: top center;
  display: flex;
  justify-content: center;
  align-items: center;
}

.follow-img h1 {
  position: relative;
  top: 20px;
  color: rgb(34, 63, 40);
  font-weight: 600;
  font-size: 3rem;
  background-color: rgba(365, 365, 365, 0.5);
  padding: 1rem;
  border-radius: 10px;
}

.follw-order-view {
  display: flex;
  flex-direction: column;
  padding: 5%;
}

.follw-order-view-title {
  display: flex;
  flex-direction: row !important;
  font-size: 5rem;
  justify-content: center;
}

.follw-order-view-title h2 {
  font-size: 4rem;
  display: flex;
  align-items: center;
}

.follw-order-view-input {
  display: flex;
  justify-content: center;
}

.follw-order-view-input input {
  width: 50%;
  height: 3rem;
}

.follw-order-view-btn {
  display: flex;
  justify-content: center;
  margin-top: 2rem;
}

.follw-order-view-btn-link {
  width: 50%;
  height: 3rem;
  border: 1px solid rgb(75, 139, 87);
  text-decoration: none;
  background-color: rgb(75, 139, 87);
  border-radius: 5px;
}

.follw-order-view-btn-link p {
  display: flex;
  justify-content: center;
  font-size: 2rem;
  color: aliceblue;
}

.follw-order-view-btn-link:hover{
  background-color: rgb(52, 97, 61);
}
</style>

<script>
export default {
  data () {
    return {
      isLoading: false,
      orderId: ''
    }
  },
  methods: {
    inquireOrder () {
      this.$router.push(`/Complete/${this.orderId}`)
    }
  }
}
</script>
