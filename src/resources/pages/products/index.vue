<template>
  <div>
    <h1>Products Page</h1>
    <router-link :to="{ name: 'product.edit', params: { id: 1 }}">Visit 1</router-link>
    <router-link :to="{ name: 'product.edit', params: { id: 2 }}">Visit 2</router-link>
    <router-link :to="{ name: 'product.edit', params: { id: 3 }}">Visit 3</router-link>
  </div>
</template>

<script>
  export default {
    data() {
      return {

      }
    },
    components: {

    },
    props: {

    },
    computed: {

    },
    methods: {

    }
  }
</script>

<style lang="scss" scoped>

</style>
