<template>
  <div class="footer">
    <ul>
      <li>
        <router-link class="navbar-brand" to="/"><span>HOME</span></router-link>
      </li>
      <li>
        <router-link class="navbar-brand" to="/Products"
          ><span>STORE</span></router-link
        >
      </li>
      <li>
        <router-link class="navbar-brand" to="/Cart"><span>CART</span></router-link>
      </li>
      <li>
        <router-link class="navbar-brand" to="/Follow"
          ><span>FOLLOW</span></router-link
        >
      </li>
      <li>
        <router-link class="navbar-brand" to="/"
          ><span>LOGIN</span></router-link
        >
      </li>
    </ul>
    <div class="footer-text">
      <p>地址：32041桃園市中壢區中和路139號</p>
      <p>電話：<a href="tel:+886-3-4223235">03-422-3235</a></p>
      <p>
        信箱：<a href="mailto:Jmimiding4104@gmail.com"
          >Jmimiding4104@gmail.com</a
        >
      </p>
      <p>服務時間：09：00 ~ 18：00</p>
    </div>
    <div class="copyright">
      <p>Copyright © 2022 Jmimiding4104 此網頁僅個人作品，並無任何商業行為</p>
    </div>
  </div>
</template>

<style>
.footer {
  margin-top: 5rem;
  background-color: rgb(58, 105, 67);
}

.footer ul {
  padding: 0.5rem 0px;
  display: flex;
  justify-content: center;
}

.footer ul li {
  list-style: none;
  margin: 0px 20px;
}

.footer ul li span {
  color: white;
}

.footer-text {
  margin-left: 38%;
  display: flex;
  flex-direction: column;
  color: aliceblue;
}

.footer-text p {
  margin-bottom: 0px;
}

.footer-text a {
  text-decoration: none;
  color: aliceblue;
}

.footer .copyright p {
  color: aliceblue;
  text-align: center;
  padding: 1rem;
  margin-bottom: 0px;
}
</style>
