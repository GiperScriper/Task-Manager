<template>
<div>

  <div id="dropdown-menu" v-click-outside="hide" @click="toggleMenu">
    menu
    <ul v-if="opened" id="user-dropdown">
      <li>
        <router-link class="menu-link" :to="{ name: 'settings' }">Settings</router-link>
      </li>
      <li>
        <span @click="logout">Logout</span>
      </li>
    </ul>
  </div>
</div>
</template>

<script src="./DropdownMenu.js"></script>
<style lang="scss" >
  #user-dropdown {
    position: absolute;
    background: gray;
  }
</style>
