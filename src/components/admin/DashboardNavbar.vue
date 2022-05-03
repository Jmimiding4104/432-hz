<template>
  <div class="dashboard-navbar">
    <nav class="navbar navbar-expand-lg navbar-dark bg-primary">
      <div class="container-fluid">
        <div class="navbar-logo">
          <router-link class="navbar-brand" to="/"
            ><img style="height: 100%" src="../../../src/assets/logo.png"
          />
            <span>後台</span>
          </router-link>
        </div>
        <button
          class="navbar-toggler"
          type="button"
          @click="toggleNavHam()"
        >
          <span class="navbar-toggler-icon"></span>
        </button>
        <div class="collapse navbar-collapse navbar-list-rwd-991" ref="collapse">
          <ul class="navbar-nav mb-2 mb-lg-0">
            <li class="nav-item">
              <router-link class="nav-link" id="link" to="/admin/AdminProducts" @click="closeNavHam()">
                產品管理
              </router-link>
            </li>
            <li class="nav-item">
              <router-link class="nav-link" id="link" to="/admin/AdminOrder" @click="closeNavHam()">
                訂單管理
              </router-link>
            </li>
            <li class="nav-item">
              <router-link class="nav-link" to="/admin/AdminCouple" @click="closeNavHam()">
                優惠券管理
              </router-link>
            </li>
            <li class="nav-item">
              <div type="button" class="dashboard-navbar-logout-btn" @click="openModal()">
                登出
                <i class="bi bi-door-closed"></i>
              </div>
            </li>
          </ul>
        </div>
      </div>
    </nav>
  </div>
  <LogoutModal ref="LogoutModal"/>
</template>

<style>
.dashboard-navbar {
  z-index: 999;
}

.navbar-logo {
  margin-left: 32px;
  height: 52px;
}

.navbar-logo img {
  width: 100%;
}

.navbar-logo span {
  font-size: 1rem;
  background-color: rgb(50, 92, 58);
  padding: 0.2rem;
  border-radius: 5px;
}

.container-fluid img {
  height: 40px;
}

.navbar-collapse {
  justify-content: flex-end;
  margin-right: 32px;
}

.nav-item {
  font-size: 1.5rem;
  font-weight: 600;
  margin-left: 2rem;
}

.nav-item span {
  position: relative;
  top: 20px;
}

.dashboard-navbar-logout-btn {
  margin-top: 10%;
  color: rgba(255, 255, 255, 0.55);
}

.dashboard-navbar-logout-btn:hover{
  color: rgba(255, 255, 255, 0.747);
}

@media (max-width:991px) {
  .navbar-list-rwd-991 {
    display: flex;
    justify-content: center;
  }
}

@media (max-width:991px) {
  .navbar-list-rwd-991 ul li {
    text-align: center;
  }
}

@media (max-width:991px) {
  .navbar-list-rwd-991 ul li span {
    position: absolute;
    left: 51.5%;
    top: 76%;
  }
}
</style>

<script>
import LogoutModal from '@/components/admin/modal/LogoutModal'
import CollapseHam from '@/libs/CollapseHam.vue'
export default {
  mixins: [CollapseHam],
  components: {
    LogoutModal
  },
  methods: {
    openModal () {
      this.$refs.LogoutModal.openModal()
    }
  }
}
</script>
