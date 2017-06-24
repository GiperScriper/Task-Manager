<template>
  <div class="spinner" v-if="isLoading">
    <h1>Loading...</h1>
  </div>
</template>

<script src="./Spinner.js"></script>
<style lang="scss" scoped>
  .spinner {
    background: white;
    z-index: 999;
  }
</style>
