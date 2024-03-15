<template>
  <div class="container">
    <div class="row">
      <div class="col-12">
        <h1 class="d-flex justify-content-center my-3">購物車列表</h1>
        <table class="table align-middle">
          <thead>
            <tr>
              <th></th>
              <th>品名</th>
              <th style="width: 200px">單位/數量</th>
              <th>單價</th>
            </tr>
          </thead>
          <tbody>
            <tr v-for="cart in cartProducts" :key="cart.id">
              <td>
                <button
                  type="btn"
                  class="btn btn-outline-danger btn-sm"
                  @click="delCartItem(cart.id)"
                >
                  X
                </button>
              </td>
              <td>{{ cart.product.title }}</td>
              <td class="d-flex align-items-end">
                <select
                  name=""
                  id=""
                  :value="cart.qty"
                  style="height: 31px"
                  @change="(event) => setCartItemQty(cart.id, event)"
                >
                  <option v-for="i in 20" :key="i">{{ i }}</option>
                </select>
                <button class="btn btn-outline-primary btn-sm">{{ cart.product.unit }}</button>
              </td>
              <td>{{ cart.total }}</td>
            </tr>
          </tbody>
        </table>
      </div>
    </div>
    <div class="row" v-if='cartProducts.length != 0'>
      <div class="col-12">
        <div class="d-flex justify-content-end">
          <button class="btn btn-outline-danger" @click="delAllCartItems">清空購物車</button>
        </div>
      </div>
    </div>

    <div class="row my-5">
      <div class="col-12 d-flex justify-content-center">
        <form>
          <div class="mb-3">
            <label for="exampleInputEmail1" class="form-label">Email</label>
            <input
              type="email"
              class="form-control"
              id="exampleInputEmail1"
              aria-describedby="emailHelp"
            />
          </div>

          <div class="mb-3">
            <label for="inputName" class="form-label">收件人姓名</label>
            <input type="text" class="form-control" id="inputName" />
          </div>

          <div class="mb-3">
            <label for="inputTelephone" class="form-label">收件人電話</label>
            <input type="tel" name="phone" class="form-control" id="inputTelephone" />
          </div>

          <div class="mb-3">
            <label for="inputAddress" class="form-label">收件人地址</label>
            <input type="text" name="address" class="form-control" id="inputAddress" />
          </div>

          <div class="mb-3 d-flex flex-column">
            <label for="textarea" class="form-label">留言</label>
            <textarea
              name="textarea"
              id="textarea"
              cols="30"
              style="height: fit-content"
              class="form-control border border-1 rounded"
            ></textarea>
          </div>

          <div class="d-flex justify-content-end">
            <button type="submit" class="btn btn-primary d-flex justify-content-end">
              送出訂單
            </button>
          </div>
        </form>
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
    },

    countTotal() {
      this.totalMoney = this.cartProducts.reduce((a, b) => a + b.total, 0)
      console.log(this.totalMoney)
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