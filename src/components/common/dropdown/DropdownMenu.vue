<template>
<div>
  <button @click="toggleMenu" id="dropdownMenu">DROPDOWN</button>
  <div v-if="opened" id="user-dropdown" v-click-outside="hide">
    <ul>
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
