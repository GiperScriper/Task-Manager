<template>
<div class="menu" v-show="isMenuOpened">
  <div>
    <ul class="menu-list">
      <li class="menu-element">
        <router-link class="menu-link" :to="{ name: 'dashboard' }">
          <icon name="list" class="menu-icon" scale=".9"></icon>
            Dashboard
        </router-link>
      </li>
      <li class="menu-element">
        <router-link class="menu-link" :to="{ name: 'projects' }">
          <icon name="file-text" class="menu-icon" scale=".9"></icon>
            Projects
        </router-link>
      </li>
      <li class="menu-element">
        <router-link class="menu-link" :to="{ name: 'settings' }">
          <icon name="tasks" class="menu-icon" scale=".9"></icon>
            Tasks
        </router-link>
      </li>
      <li class="menu-element">
        <router-link class="menu-link" :to="{ name: 'settings' }">
          <icon name="cog" class="menu-icon" scale=".9"></icon>
            Settings
        </router-link>
      </li>
    </ul>

    <ul class="menu-list--logout">
      <li class="menu-element">
        <router-link class="menu-link" :to="{ name: 'settings' }">
          <icon name="sign-out" class="menu-icon menu-icon--logout" scale=".9"></icon>
            Logout
        </router-link>
      </li>
    </ul>
  </div>
</div>
</template>

<script src="./Menu.js"></script>
<style lang="scss" src="./menu.scss" scoped></style>
