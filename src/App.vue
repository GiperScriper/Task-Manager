<template>
<div>
  <!-- Search Component -->
  <div>
    <search v-if="user.isAuthenticated"></search>
  </div>
  <!-- /Search Component-->

  <!-- Menu Component -->
  <!-- /Menu Component  -->

  <router-view></router-view>
</div>
</template>

<script src="./App.js"></script>
