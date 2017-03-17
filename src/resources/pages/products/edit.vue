<template>
  <div>
    <h1>Edit Product {{ id }}</h1>
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
      id: {
        type:[Number, String],
        required: true
      }
    },
    computed: {

    },
    methods: {

    }
  }
</script>

<style lang="scss" scoped>

</style>
