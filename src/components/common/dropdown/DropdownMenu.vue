<template>
<div>

  <div id="dropdown-menu" class="dropdown-menu" v-click-outside="hide" @click="toggleMenu">
    <span class="dropdown-button dropdown-name">{{ username }}</span>
    <ul v-if="opened" id="user-dropdown" class="dropdown-list">
      <div class="dropdown-title">

      </div>
      <li class="dropdown-item">
        <router-link class="dropdown-link" :to="{ name: 'settings' }">
          Settings
          <icon name="cog" class="dropdown-icon" scale=".9"></icon>
        </router-link>
      </li>
      <li class="dropdown-item">
        <a @click.prevent="logout" href="#" class="dropdown-link">
          Logout
          <icon name="sign-out" class="dropdown-icon" scale=".9"></icon>
        </a>
      </li>
    </ul>
  </div>
</div>
</template>

<script src="./DropdownMenu.js"></script>
<style lang="scss" src="./DropdownMenu.scss" scoped></style>
