<template>
  <div class="container my-3">
    <div class="row justify-content-center">
      <div class="col-6">
        <h1 class="text-center mb-3">請先登入</h1>
        <form>
          <div class="mb-3">
            <label for="exampleInputEmail1" class="form-label">Email address</label>
            <input
              type="email"
              class="form-control"
              id="exampleInputEmail1"
              aria-describedby="emailHelp"
              v-model="userInfo.username"
            />
          </div>
          <div class="mb-3">
            <label for="exampleInputPassword1" class="form-label">Password</label>
            <input
              type="password"
              class="form-control"
              id="exampleInputPassword1"
              v-model="userInfo.password"
            />
          </div>
          <button type="submit" class="btn btn-primary w-100" @click.prevent="login">Submit</button>
        </form>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  data() {
    return {
      userInfo: {
        username: '',
        password: ''
      }
    }
  },

  methods: {
    login() {
      const url = import.meta.env.VITE_API
      this.$http
        .post(`${url}/v2/admin/signin`, this.userInfo)
        .then((res) => {
          const { token, expired } = res.data
          document.cookie = `hexToken=${token}; expires=${new Date(expired)}; path=/`;
          this.$router.push(`/adminProducts`)
        })
        .catch((err) => {
          console.log(err)
          alert(err.data.message)
        })
    }
  },

  mounted() {
   
  }
}
</script>