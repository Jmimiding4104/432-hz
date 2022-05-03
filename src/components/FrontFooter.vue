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
        <router-link class="navbar-brand" to="/Login"
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
    <div class="footer-icon">
      <div class="icon-item">
        <a href="https://www.facebook.com/432Hz-100314029349414/?ref=page_internal">
          <i class="bi bi-facebook"></i>
        </a>
      </div>
      <div class="icon-item">
        <a href="https://github.com/Jmimiding4104/432-hz">
          <i class="bi bi-github"></i>
        </a>
      </div>
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
  display: flex;
  align-items: center;
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

.footer-icon {
  display: flex;
  justify-content: center;
}

.icon-item {
  margin: 0px 0.5rem;
}

.icon-item i {
  color: aliceblue;
  font-size: 1.5rem;
}

.footer .copyright p {
  color: aliceblue;
  text-align: center;
  padding: 1rem;
  padding-top: 0px;
  margin-bottom: 0px;
}

@media (max-width:720px) {
  .footer ul {
    flex-direction: column;
    align-items: center;
  }
}

@media (max-width:720px) {
  .footer ul li {
    margin-top: 0.5rem;
  }
}
</style>
