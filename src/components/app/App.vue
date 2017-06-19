<template>
<div>
  <!-- Menu Component -->
  <div class="app-menu" v-if="mainAppView">
    <nav-menu></nav-menu>
  </div>
  <!-- /Menu Component  -->

  <div :class="{ 'app-wrapper': mainAppView }">
    <!-- Search Component -->
    <div class="app-search" v-if="mainAppView">
      <search></search>
    </div>
    <!-- /Search Component-->

    <div :class="{ 'app-area': mainAppView }">
      <transition name="fade">
        <router-view></router-view>
      </transition>
    </div>

  </div>
</div>
</template>

<script src="./App.js"></script>
<style lang="scss" src="../../assets/scss/reset.scss"></style>
<style lang="scss" src="./app.scss"></style>
