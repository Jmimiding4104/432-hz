<template>
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
      <div
        class="cart-line-space"
        style="border-bottom: 5px solid rgb(197, 224, 96)"
      ></div>
      <i class="bi bi-wallet" style="background-color: rgb(197, 224, 96)"></i>
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
        <h3>我的購物車</h3>
        <div class="order-item" v-for="item in cartData.carts" :key="item.id">
          <div
            class="order-img"
            :style="{ backgroundImage: `url(${item.product.imageUrl})` }"
          ></div>
          <div class="order-item-descript">
            <div class="order-item-descript-1">
              <p>{{ item.product.title }}</p>
              <div class="order-item-descript-2">
                <p>x{{ item.qty }}{{ item.product.unit }}</p>
                <p>${{ item.final_total }}</p>
              </div>
            </div>
          </div>
        </div>
        <div class="order-price">
          <div class="order-price-total">
            <p>原價</p>
            NT${{ cartData.total }}
          </div>
          <div class="order-price-total">
            <p>售價(應付金額)</p>
            NT${{ cartData.final_total }}
          </div>
        </div>
        <div class="payorder-next">
          <button
            type="submit"
            class="btn btn-outline-primary"
            @click.prevent="this.$router.push('/Products')"
            v-show="orderStatus === false"
          >
            繼續購物
          </button>
          <button
            class="btn btn-primary"
            @click.prevent="sendOrder()"
            v-show="orderStatus === false"
          >
            結帳
          </button>
          <button
            type="submit"
            class="btn btn-outline-primary"
            @click.prevent="payOrder()"
            v-show="orderStatus === true"
          >
            繼續購物
          </button>
          <button
            class="btn btn-primary"
            @click.prevent="payOrder()"
            v-show="orderStatus === true"
          >
            前往付款
          </button>
        </div>
      </div>
    </div>
  </div>
</template>
