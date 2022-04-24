<template>
<IsLoading style="z-index: 1000" :active="isLoading"></IsLoading>
  <div class="wrap">
    <div class="home-img">
      <div class="home-title">
        <h2>432Hz是宇宙最和諧的頻率</h2>
        <p>讓我們一起成為地球最和諧的存在</p>
      </div>
    </div>
    <div class="home-container">
      <div class="container-1">
        <h2>地球正受到各種廢棄物的侵蝕</h2>
        <p>我們邀請您一同為這片土地減輕負擔</p>
        <div class="container-img1"></div>
      </div>
      <div class="item-1">
        <div class="item-img1">
          <img src="../../../src/assets/img/item-img1.jpg" alt="" />
        </div>
        <div class="item-container1">
          <div class="item-container1-text">
            <h3>提供各項公益性質之活動</h3>
            <p>
              我們提供各項公益環保活動，例如：淨灘、淨灘等，讓你我成為這片土地最友善的一份子。
            </p>
            <p>
              參與相關淨山、淨灘活動，僅須負擔保險費用，我們會提供具有當地文化素養之志工一同前往活動，讓您能體驗並愛上相關活動。
            </p>
          </div>
          <div class="item-container1-btn">
            <button
              type="button"
              class="btn btn-primary"
              @click.prevent="this.$router.push('/Products')"
            >
              查看相關活動
            </button>
          </div>
        </div>
      </div>
      <div class="item-2">
        <div class="item-container2">
          <div class="item-container2-text">
            <h3>現代人人手一組的環保餐具</h3>
            <p>
              我們同時也販賣各種環保餐具組，您可選擇使用配送之方式拿到商品。
            </p>
            <p>
              但若您位於本機構附近，亦可選擇親自至現場購買餐具，可減少碳足跡，對地球更友善。
            </p>
          </div>
          <div class="item-container2-btn">
            <button
              type="button"
              class="btn btn-primary"
              @click.prevent="this.$router.push('/Products')"
            >
              查看環保餐具
            </button>
          </div>
        </div>
        <div class="item-img2">
          <img src="../../../src/assets/img/item-img2.jpg" alt="" />
        </div>
      </div>
      <div class="item-3">
        <div class="item-img3">
          <img src="../../../src/assets/img/item-img3.jpg" alt="" />
        </div>
        <div class="item-container3">
          <div class="item-container3-text">
            <h3>您的惠顧，部分將捐贈相關環保機構。</h3>
            <p>
              我們所有品項皆以成本價為基數出售，我們將收取10-20%之行政費用，收取之行政費用50%將捐贈。
            </p>
            <p>我們所有的款項將全數公布於本機構之Facebook，讓您放心消費。</p>
          </div>
          <div class="item-container3-btn">
            <button
              type="button"
              class="btn btn-primary"
              @click.prevent="this.$router.push('/Products')"
            >
              查看相關活動
            </button>
          </div>
        </div>
      </div>
      <div class="container-2">
        <h2>本機構之公益活動亦獲得各大專院校之認證</h2>
        <p>我們亦接受團體參加，歡迎透過本站連結與我們聯絡，已安排後續活動。</p>
        <div class="container-img2"></div>
      </div>
    </div>
  </div>
</template>

<style>
.home-img {
  background-image: url(~/src/assets/img/home-img.jpg);
  height: 800px;
  background-position: top center;
}

.home-title {
  display: flex;
  flex-direction: column;
  align-items: center;
  padding-top: 330px;
}

.home-title h2 {
  color: aliceblue;
  font-size: 3rem;
  text-shadow: 0.05em 0.05em #333;
}

.home-title p {
  color: aliceblue;
  font-size: 2rem;
  text-shadow: 0.05em 0.05em #333;
}

.home-container {
  margin-right: 10%;
  margin-left: 10%;
}

.container-1 {
  margin-top: 5rem;
  display: flex;
  flex-direction: column;
  align-items: center;
}

.container-1 h2 {
  font-size: 3rem;
  font-weight: 600;
}

.container-1 p {
  font-size: 1.5rem;
}

.container-img1 {
  background-image: url(~/src/assets/img/container-img1.jpg);
  width: 100%;
  height: 200px;
}

.item-1 {
  margin-top: 10rem;
  display: flex;
}

.item-img1 {
  width: 50%;
}

.item-1 img {
  width: 100%;
  border: #d0d0d0 solid 0.5px;
}

.item-container1 {
  margin-top: 2rem;
  width: 45%;
  margin-left: 2.5%;
  margin-right: 2.5%;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
}

.item-container1-text {
}

.item-container1 h3 {
  padding-top: 1rem;
  margin-bottom: 2rem;
  font-size: 2rem;
  font-weight: 600;
}

.item-container1 p {
  font-size: 1.2rem;
}

.item-container1-btn button {
  margin-bottom: 2rem;
  width: 100%;
  height: 2.5rem;
  font-size: 1.2rem;
}

.item-container1-btn button:hover {
  color: #d0d0d0;
}

.item-2 {
  display: flex;
}

.item-img2 {
  width: 50%;
}

.item-2 img {
  width: 100%;
  border: #d0d0d0 solid 0.5px;
}

.item-container2 {
  margin-top: 2rem;
  width: 45%;
  margin-left: 2.5%;
  margin-right: 2.5%;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
}

.item-container2-text {
}

.item-container2 h3 {
  padding-top: 1rem;
  margin-bottom: 2rem;
  font-size: 2rem;
  font-weight: 600;
}

.item-container2 p {
  font-size: 1.2rem;
}

.item-container2-btn button {
  margin-bottom: 2rem;
  width: 100%;
  height: 2.5rem;
  font-size: 1.2rem;
}

.item-container2-btn button:hover {
  color: #d0d0d0;
}

.item-3 {
  display: flex;
}

.item-img3 {
  width: 50%;
}

.item-3 img {
  width: 100%;
  border: #d0d0d0 solid 0.5px;
}

.item-container3 {
  margin-top: 2rem;
  width: 45%;
  margin-left: 2.5%;
  margin-right: 2.5%;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
}

.item-container3-text {
}

.item-container3 h3 {
  padding-top: 1rem;
  margin-bottom: 2rem;
  font-size: 2rem;
  font-weight: 600;
}

.item-container3 p {
  font-size: 1.2rem;
}

.item-container3-btn button {
  margin-bottom: 2rem;
  width: 100%;
  height: 2.5rem;
  font-size: 1.2rem;
}

.item-container3-btn button:hover {
  color: #d0d0d0;
}

.container-2 {
  margin-top: 5rem;
  display: flex;
  flex-direction: column;
  align-items: center;
}

.container-2 h2 {
  font-size: 3rem;
  font-weight: 600;
}

.container-2 p {
  font-size: 1.5rem;
}

.container-img2 {
  background-image: url(~/src/assets/img/container-img2.jpg);
  background-position: center -350px;
  width: 100%;
  height: 200px;
}
</style>

<script>
export default {
  data () {
    return {
      isLoading: false
    }
  }
}
</script>
