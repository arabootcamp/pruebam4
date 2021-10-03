<template>
  <div>
    <Navbar />
    <b-container class="mt-5 text-center">
      <img :src="imgNotFound" alt="img not found" />
    </b-container>
  </div>
</template>

<script>
  import Navbar from "@/components/Navbar.vue";
  import imgNotFound from "@/assets/imgNotFound.png"

  export default {
    name: 'NorFound',
    components:{
      Navbar,
    },
    data() {
      return {
        imgNotFound
      }
    }
  }
</script>

<style scoped>
  img {
    max-width: 100%;
  }
</style>