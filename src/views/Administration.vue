<template>
  <div>
    <Navbar />
    <h1 class="my-5 text-center">Administrando la Lista de Opiniones</h1>
    <OpinionTable/>
  </div>
</template>

<script>
  // @ is an alias to /src
  import Navbar from "@/components/Navbar.vue";
  import OpinionTable from "@/components/OpinionsTable.vue";

  export default {
    name: "App",
    components: {
      Navbar,
      OpinionTable
    },
  };
</script>