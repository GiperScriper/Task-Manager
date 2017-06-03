<template>
<div class="menu">
  <div class="menu-title">
    <span>Task Manager</span><button class="menu-expand">&#9776</button>
  </div>
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
          <icon name="file-text-o" class="menu-icon" scale=".9"></icon>
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
  </div>
</div>
</template>
<style lang="scss" src="./menu.scss" scoped></style>
