<template>
<div>
  <!-- Search Component -->
  <div v-if="user.isAuthenticated && mainAppView">
    <search></search>
  </div>
  <!-- /Search Component-->

  <!-- Menu Component -->
  <div v-if="user.isAuthenticated && mainAppView">
    <nav-menu></nav-menu>
  </div>
  <!-- /Menu Component  -->
  <router-view></router-view>
</div>
</template>

<script src="./App.js"></script>
<style lang="scss" src="./app.scss" scoped></style>
