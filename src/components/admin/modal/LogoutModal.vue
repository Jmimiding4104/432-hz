<template>
<IsLoading style="z-index: 1000" :active="isLoading"></IsLoading>
<div ref="modal" class="modal fade" tabindex="-1" aria-hidden="true">
    <div class="modal-dialog">
        <div class="modal-content border-0">
            <div class="modal-header bg-primary text-white">
                <h5 id="delProductModalLabel" class="modal-title">
                    <span>正在登出後台</span>
                </h5>
                <button type="button" class="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
            </div>
            <div class="modal-body">
            登出後台並導向首頁。
            </div>
            <div class="modal-footer">
                <button type="button" class="btn btn-outline-secondary" data-bs-dismiss="modal">
                取消
                </button>
                <button type="button" class="btn btn-primary" @click="logOut()">
                登出
                </button>
            </div>
        </div>
    </div>
</div>
</template>

<script>
import ModalView from '@/libs/ModalView'
export default {
  mixins: [ModalView],
  data () {
    return {
      isLoading: false
    }
  },
  methods: {
    logOut () {
      this.isLoading = true
      this.$http
        .post(`${process.env.VUE_APP_API}/logout`)
        .then((res) => {
          this.hideModal()
          this.$httpMessageState(res, '登出')
          this.$router.push('/')
          this.isLoading = false
        })
        .catch((err) => {
          this.isLoading = false
          this.$httpMessageState(err.response, '登出')
        })
    }
  }
}
</script>
