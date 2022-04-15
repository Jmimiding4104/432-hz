<template>
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
          <h3>提供各項公益性質之活動</h3>
          <p>
            我們提供各項公益環保活動，例如：淨灘、淨灘等，讓你我成為這片土地最友善的一份子。
          </p>
        </div>
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
  display: flex;
}

.item-img1 {
  width: 50%;
}

.item-1 img {
  width: 100%;
}

.item-container1 {
  width: 50%;
}
</style>
