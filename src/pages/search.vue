<template>
  <div>
    <a
      v-for="product in products"
      :key="product.id"
      :href="`https://www.enjoei.com.br/p/${product.slug}-${product.id}`"
    >
      {{ product.title.name }}
    </a>
  </div>
</template>

<script>
  import axios from 'axios'

  export default {
    data() {
      return {
        products: []
      }
    },
    created() {
      axios.get('/api/v5/users/enjoei-pro/products/liked?page=1&query=camisa')
    }
  }
</script>
