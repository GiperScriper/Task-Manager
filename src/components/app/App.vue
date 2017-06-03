<template>
<div>
  <!-- Menu Component -->
  <div class="app-menu" v-if="user.isAuthenticated && mainAppView">
    <nav-menu></nav-menu>
  </div>
  <!-- /Menu Component  -->

  <div class="app-wrapper">
    <!-- Search Component -->
    <div class="app-search" v-if="user.isAuthenticated && mainAppView">
      <search></search>
    </div>
    <!-- /Search Component-->

    <div class="app-area">
      <router-view></router-view>
    </div>

  </div>
</div>
</template>

<script src="./App.js"></script>
<style lang="scss" src="../../assets/scss/reset.scss"></style>
<style lang="scss" src="./app.scss"></style>
