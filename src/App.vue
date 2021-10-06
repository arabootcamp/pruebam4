<template>
  <div id="app">
    <router-view />
  </div>
</template>

<script>
  export default {
    name: "App",
    created() {
      //go to fech API
      this.$store.dispatch('dataLoad');
    }
  };
</script>

<style>
  *{
    overflow-wrap: break-word;
  }
</style>