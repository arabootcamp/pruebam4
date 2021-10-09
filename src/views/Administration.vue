<template>
  <div>
    <Navbar />
    <OpinionsTable />
  </div>
</template>

<script>
  // @ is an alias to /src
  import Navbar from "@/components/Navbar.vue";
  import OpinionsTable from "@/components/OpinionsTable.vue";

  export default {
    name: "App",
    components: {
      Navbar,
      OpinionsTable
    }
  };
</script>