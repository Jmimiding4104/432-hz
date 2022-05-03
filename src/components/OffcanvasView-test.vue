<template>
  <div class="offcanvas-view">
    <button title="收藏" class="btn btn-success offcanvas-view-btn" type="button" data-bs-toggle="offcanvas" data-bs-target="#offcanvasRight" aria-controls="offcanvasRight">
      <i class="bi bi-bag-heart"></i>
    </button>
      <div class="offcanvas offcanvas-end" tabindex="-1" id="offcanvasRight" aria-labelledby="offcanvasRightLabel">
        <div class="offcanvas-header">
          <h5 id="offcanvasRightLabel">Offcanvas right</h5>
          <button type="button" class="btn-close text-reset" data-bs-dismiss="offcanvas" aria-label="Close"></button>
        </div>
      <div class="offcanvas-body">
        我的收藏
      </div>
    </div>
  </div>
</template>

<style>
.offcanvas-view {
  position: fixed;
  right: 5px;
  bottom: 80px;
}

.offcanvas-view-btn {
  border-radius: 5px;
}

.offcanvas-view-btn i {
  font-size: 1.25rem;
}
</style>

<script>
import { Offcanvas } from 'bootstrap'
export default {
  data () {
    return {
      offcanvasList: '',
      favorite: JSON.parse(localStorage.getItem('favorite')) || []
    }
  },
  methods: {
    getData () {
      const Url = `${process.env.VUE_APP_API}/api/${process.env.VUE_APP_PATH}/product`
      this.favorite.forEach(i =>
        this.$http.get(`${Url}/${i}`)
          .then((res) => {
            console.log(res)
          }))
      /* const data = {
        id: this.favorite
      }
      const Url = `${process.env.VUE_APP_API}/api/${process.env.VUE_APP_PATH}/product/${data}` */
    }
  },
  mounted () {
    const offcanvasElementList = [].slice.call(document.querySelectorAll('.offcanvas'))
    this.offcanvasList = offcanvasElementList.map(function (offcanvasEl) {
      return new Offcanvas(offcanvasEl)
    })
    this.getData()
  }
}
</script>
