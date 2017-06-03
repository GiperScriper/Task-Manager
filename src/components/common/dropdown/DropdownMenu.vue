<template>
<div>
  <button @click="toggleMenu" id="dropdownMenu">DROPDOWN</button>
  <div v-if="opened" id="user-dropdown" v-click-outside="hide">
    <ul>
      <li>Profile</li>
      <li>Logout</li>
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
