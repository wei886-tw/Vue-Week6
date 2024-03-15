<template>
  <div class="container d-flex justify-content-center my-5">
    <nav aria-label="Page navigation example ">
      <ul class="pagination">
        <li class="page-item">
          <a class="page-link" href="#" aria-label="Previous"  @click.prevent="getPageProducts(pagination.current_page - 1)" :class="{disabled: !pagination.has_pre}">
            <span aria-hidden="true">&laquo;</span>
          </a>
        </li>
        <li class="page-item" v-for="(value, key) in pagination.total_pages" :key="key"  :class="{'active': (pagination.current_page === value )}">
          <a class="page-link" href="#" @click.prevent="getPageProducts(value)">{{value}}</a>
        </li>
        <li class="page-item" >
          <a class="page-link" href="#" aria-label="Next"  @click.prevent="getPageProducts(pagination.current_page + 1)"   :class="{disabled: !pagination.has_next}">
            <span aria-hidden="true">&raquo;</span>
          </a>
        </li>
      </ul>
    </nav>
  </div>
</template>

<script>
export default {
  data() {
    return {
    }
  },
  props: ["pagination", "getPageProducts"],
  methods: {
  
  },
  mounted() {

  }
}
</script>