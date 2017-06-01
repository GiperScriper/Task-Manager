<template>
<div>
  <button @click="toggleMenu">DROPDOWN</button>
  <div v-if="opened" id="user-dropdown">
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
