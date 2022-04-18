<template>
  <div class="front-navbar">
    <nav class="navbar navbar-expand-lg navbar-dark bg-primary">
      <div class="container-fluid">
        <div class="navbar-logo">
          <router-link class="navbar-brand" to="/"
            ><img src="../../src/assets/logo.png"
          /></router-link>
        </div>
        <button
          class="navbar-toggler"
          type="button"
          data-bs-toggle="collapse"
          data-bs-target="#navbarSupportedContent"
          aria-controls="navbarSupportedContent"
          aria-expanded="false"
          aria-label="Toggle navigation"
        >
          <span class="navbar-toggler-icon"></span>
        </button>
        <div class="collapse navbar-collapse" id="navbarSupportedContent">
          <ul class="navbar-nav mb-2 mb-lg-0">
            <li class="nav-item">
              <router-link class="nav-link" id="link" to="/Products">
                產品列表
              </router-link>
            </li>
            <li class="nav-item">
              <router-link class="nav-link" id="link" to="/login">
                登入後台
              </router-link>
            </li>
          </ul>
        </div>
      </div>
    </nav>
  </div>
</template>

<style>
.front-navbar {
  z-index: 999;
}

.navbar-logo {
  margin-left: 32px;
}

.container-fluid img {
  height: 40px;
}

.navbar-collapse {
  justify-content: flex-end;
  margin-right: 32px;
}
</style>
