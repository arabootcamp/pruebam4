<template>
  <div>
    <Navbar />
    <h1 class="my-5 text-center">Lista de Opiniones</h1>
    <OpinionList />
  </div>
</template>

<script>
  import Navbar from "@/components/Navbar.vue";
  import OpinionList from '@/components/OpinionList.vue'

  export default {
    name: 'Opinions',
    components: {
      Navbar,
      OpinionList
    }
  }
</script>