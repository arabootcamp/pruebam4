<template>
  <div id="app">
    <router-view />
  </div>
</template>

<script>
  export default {
    name: "App",
    beforeCreate() {
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