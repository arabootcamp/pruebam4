<template>
  <div>
    <Navbar />
    <h1 class="my-5 text-center">Lista de juegos Disponibles</h1>
    <GamesTable />
  </div>
</template>

<script>
  import Navbar from "@/components/Navbar.vue";
  import GamesTable from '@/components/GamesTable.vue'

  export default {
    name: 'Home',
    components: {
      Navbar,
      GamesTable
    }
  }
</script>