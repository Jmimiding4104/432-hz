<template>
<div id="delProductModal" ref="modal" class="modal fade" tabindex="-1" aria-labelledby="delProductModalLabel" aria-hidden="true">
    <div class="modal-dialog">
        <div class="modal-content border-0">
            <div class="modal-header bg-danger text-white">
                <h5 id="delProductModalLabel" class="modal-title">
                    <span>刪除優惠券</span>
                </h5>
                <button type="button" class="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
            </div>
            <div class="modal-body">
            是否刪除
                <strong class="text-danger"></strong> {{  }}(刪除後將無法恢復)。
            </div>
            <div class="modal-footer">
                <button type="button" class="btn btn-outline-secondary" data-bs-dismiss="modal">
                取消
                </button>
                <button type="button" class="btn btn-danger" @click="delOrder()">
                確認刪除
                </button>
            </div>
        </div>
    </div>
</div>
</template>

<script>
import ModalView from '@/libs/ModalView.vue'
export default {
  props: ['couponId'],
  mixins: [ModalView],
  data () {
    return {
      isLoading: false
    }
  },
  methods: {
    delOrder () {
      this.isLoading = true
      const Url = `${process.env.VUE_APP_API}/api/${process.env.VUE_APP_PATH}/admin/coupon/${this.couponId}`
      this.$http.delete(Url)
        .then((res) => {
          this.$httpMessageState(res, '刪除價格券')
          this.isLoading = false
          this.hideModal()
          this.getData()
        })
        .catch((err) => {
          this.$httpMessageState(err.response, '登入驗證')
          this.isLoading = false
        })
    },
    getData () {
      this.$emit('getData')
    }
  }
}
</script>
