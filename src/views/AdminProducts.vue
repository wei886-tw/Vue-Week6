<template>
  <div class="container">
    <div class="row">
      <div class="col-12">
        <h1 class="text-center my-3">後台產品列表</h1>
        <table class="table">
          <thead>
            <tr>
              <th scope="col">分類</th>
              <th scope="col">產品名稱</th>
              <th scope="col">原價</th>
              <th scope="col">售價</th>
              <th scope="col">是否啟用</th>
            </tr>
          </thead>
          <tbody>
            <tr v-for="product in products" :key="product.id">
              <td>{{ product.category }}</td>
              <td>{{ product.title }}</td>
              <td>{{ product.origin_price }}</td>
              <td>{{ product.price }}</td>
              <td>{{ product.is_enabled ? '是' : '否' }}</td>
            </tr>
          </tbody>
        </table>

        <pagination :pagination="pagination" :get-page-products="getPageProducts"></pagination>
      </div>
    </div>
  </div>
</template>

<script>
import pagination from '../components/PaginationComponent.vue'
export default {
  data() {
    return {
      products: [],
      pagination: {}
    }
  },
  components: {
    pagination
  },
  methods: {
    getPageProducts(page) {
      const url = import.meta.env.VITE_API
      const api_path = import.meta.env.VITE_PATH
      this.$http
        .get(`${url}/v2/api/${api_path}/admin/products?page=${page}`)
        .then((res) => {
          this.products = res.data.products
          this.pagination = res.data.pagination
          console.log(this.pagination)
        })
        .catch((err) => {
          alert(err)
        })
    },

    checkLogin() {
      const token = document.cookie.replace(/(?:(?:^|.*;\s*)hexToken\s*=\s*([^;]*).*$)|^.*$/, '$1')
      if (token) {
        this.$http.defaults.headers.common.Authorization = token
        const url = `${import.meta.env.VITE_API}/v2/api/user/check`
        this.$http
          .post(url)
          .then(() => {})
          .catch((err) => {
            alert(err.response.data.message)
          })
      } else {
        alert('您尚未登入。')
        this.$router.push('/adminLogin')
      }
    }
  },
  mounted() {
    this.checkLogin()
    this.getPageProducts()
  }
}
</script>