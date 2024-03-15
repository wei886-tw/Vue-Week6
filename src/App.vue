<script setup>
import { RouterLink, RouterView } from 'vue-router'
</script>

<template>
  <div class="container">
    <nav class="d-flex justify-content-center">
      <RouterLink to="/" class="active">首頁 |</RouterLink>
      <RouterLink to="/userProduct">產品列表 |</RouterLink>
      <RouterLink to="/userCart">購物車列表 |</RouterLink>
      <RouterLink to="/adminLogin">登入 |</RouterLink>
    </nav>
  </div>
  <RouterView />
</template>

