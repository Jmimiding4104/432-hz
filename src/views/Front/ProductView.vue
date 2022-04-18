<template>
  <h1>商品</h1>
</template>

<script>
import emitter from '@/libs/emitter'
export default {
  data () {
    return {
      product: {}
    }
  },
  methods: {
    getData () {
      const { id } = this.$route.params
      const Url = `${process.env.VUE_APP_API}/api/${process.env.VUE_APP_PATH}/product/${id}`
      this.$http.get(Url)
        .then((res) => {
          this.product = res.data.product
        })
    },
    addToCart (id, qty = 1) {
      const data = {
        product_id: id,
        qty
      }
      this.isLoading = id
      this.$http
        .post(
          `${process.env.VUE_APP_API}/api/${process.env.VUE_APP_PATH}/cart`,
          { data }
        )
        .then((res) => {
          // this.$refs.productsModal.closeModal()
          this.isLoading = ''
          emitter.emit('get-cart')
          alert('成功加入購物車')
        })
        .catch((err) => {
          console.log(err)
        })
    }
  },
  mounted () {
    this.getData()
  }
}
</script>
