<template>
<div>

  <div id="dropdown-menu" class="dropdown-menu" v-click-outside="hide" @click="toggleMenu">
    <span class="dropdown-button dropdown-name">K. Martynov</span>
    <ul v-if="opened" id="user-dropdown" class="dropdown-list">
      <li class="dropdown-item">
        <router-link class="dropdown-link" :to="{ name: 'settings' }">Settings</router-link>
      </li>
      <li class="dropdown-item">
        <a @click.prevent="logout" href="#" class="dropdown-link">Logout</a>
      </li>
    </ul>
  </div>
</div>
</template>

<script src="./DropdownMenu.js"></script>
<style lang="scss" src="./DropdownMenu.scss" scoped></style>
