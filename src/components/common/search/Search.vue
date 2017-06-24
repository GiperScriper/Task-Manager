<template>
  <div class="main_bar">
    <div class="main_bar-title">
      <button class="main_bar-expand" @click="toggle">&#9776</button>
      <span>Task Manager</span>
    </div>
    <div class="main_bar-search">
      <icon name="search" class="search-icon" scale="1.3"></icon>
      <input class="main_bar-input" type="text" placeholder="Type to search...">
    </div>

    <div class="main_bar-profile">
      <div class="profile-wrapper">
        <img src="../../../assets/img/profile/profile-photo.jpg" alt="" class="profile-photo">
      </div>
      <dropdown-menu class="main_bar-dropdown"></dropdown-menu>
    </div>

  </div>
</template>

<script src="./Search.js"></script>
<style lang="scss" src="./search.scss" scoped></style>
