<template>
<div>
  <!-- Search Component -->
  <div>
    <search v-if="user.isAuthenticated && mainAppView"></search>
  </div>
  <!-- /Search Component-->

  <!-- Menu Component -->
   <div v-if="user.isAuthenticated && mainAppView">
     <hr />
    <ul>
      <li>
        <router-link :to="{ name: 'dashboard' }">Dashboard</router-link>
      </li>
      <li>
        <router-link :to="{ name: 'projects' }">Projects</router-link>
      </li>
    </ul>
  </div>
  <!-- /Menu Component  -->

  <router-view></router-view>
</div>
</template>

<script src="./App.js"></script>
<style lang="scss" src="./app.scss" scoped></style>
