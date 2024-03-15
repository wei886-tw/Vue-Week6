<template>
  <div class="container my-2">
    <div class="row">
      <div class="col-12">
        <h1 class="d-flex justify-content-center my-3">產品列表</h1>
        <table class="table align-middle">
          <thead>
            <tr>
              <th>圖片</th>
              <th>商品名稱</th>
              <th>價格</th>
              <th>加入購物車</th>
            </tr>
          </thead>

          <tbody>
            <tr v-for="product in allProducts" :key="product.id">
              <td>
                <img :src="product.imageUrl" alt="" style="width: 100px" >
              </td>
              <td>{{ product.title }}</td>
              <td>
                <del>{{ product.origin_price }} 元</del>
                <div>
                  <strong>{{ product.price }} 元</strong>
                </div>
              </td>
              <td>
                <button class="btn btn-outline-secondary btn-sm" @click="openModal(product)">
                  查看更多
                </button>
                <button class="btn btn-outline-primary btn-sm" @click="addToCart(product.id)">
                  加到購物車
                </button>
              </td>
            </tr>
          </tbody>
        </table>
      </div>
    </div>
  </div>
</template>


<script>
export default {
  data() {
    return {
      apiUrl: 'https://vue3-course-api.hexschool.io',
      api_path: 'wei123',
      url: 'https://vue3-course-api.hexschool.io/v2/api/wei123',
      allProducts: [],
      cartProducts: [],
      cartInfo: {},
      tempProduct: {},
      currentCart: {},
      totalMoney: 0
    }
  },

  methods: {
    getProducts() {
      this.$http.get(`${this.apiUrl}/api/${this.api_path}/products/all`).then((res) => {
        this.allProducts = res.data.products
      })
    },

    openModal(product) {
      this.tempProduct = product
      this.myModal.show()
    },

    getCarts() {
      this.$http
        .get(`${this.apiUrl}/v2/api/${this.api_path}/cart`)
        .then((res) => {
          this.cartProducts = res.data.data.carts
          this.cartInfo = res.data.data
        })

        .catch((err) => {
          console.log(err)
        })
    },

    addToCart(id, qty = 1) {
      const cart = {
        product_id: id,
        qty
      }

      this.$http
        .post(`${this.url}/cart`, { data: cart })
        .then((res) => {
          console.log(res)
          alert('加入購物車成功')
          this.getCarts()
        })
        .catch((err) => {
          console.log(err)
        })
    },

    delCartItem(id) {
      this.$http
        .delete(`${this.apiUrl}/v2/api/${this.api_path}/cart/${id}`)
        .then((res) => {
          console.log(res)
          this.getCarts()
        })
        .catch((err) => {
          console.log(err)
        })
    },

    delAllCartItems() {
      this.$http
        .delete(`${this.apiUrl}/v2/api/${this.api_path}/carts`)
        .then((res) => {
          console.log(res)
          alert('確定要清空購物車嗎')
          this.getCarts()
        })
        .catch((err) => {
          console.log(err)
        })
    },

    setCartItemQty(id, event) {
      this.currentCart = this.cartProducts.find((item) => item.id === id)
      this.currentCart.qty = Number(event.target.value)
      this.currentCart.total = this.currentCart.qty * this.currentCart.product.price
      console.log('cartInfo', this.cartInfo)
    },

    modalAddToCart(id, qty) {
      const cart = {
        product_id: id,
        qty
      }

      this.$http
        .post(`${this.url}/cart`, { data: cart })
        .then((res) => {
          console.log(res)
          alert('加入購物車成功')
          this.getCarts()
        })
        .catch((err) => {
          console.log(err)
        })
    }
  },
  mounted() {
    const token = document.cookie.replace(/(?:(?:^|.*;\s*)hexToken\s*\s*([^;]*).*$)|^.*$/, '$1')
    this.$http.defaults.headers.common.Authorization = token
    this.getProducts()
    this.getCarts()
  }
}
</script>