<template>
<div class="menu">
  <div class="menu-title">
    <span>Task Manager</span><a href="" class="menu-expand">&#9776</a>
  </div>
  <div>
    <ul class="menu-list">
      <li class="menu-element">
        <router-link class="menu-link" :to="{ name: 'dashboard' }">Dashboard</router-link>
      </li>
      <li class="menu-element">
        <router-link class="menu-link" :to="{ name: 'projects' }">Projects</router-link>
      </li>
      <li class="menu-element">
        <router-link class="menu-link" :to="{ name: 'projects' }">Profile</router-link>
      </li>
      <li class="menu-element">
        <router-link class="menu-link" :to="{ name: 'projects' }">Chat</router-link>
      </li>
    </ul>
  </div>
</div>
</template>
<style lang="scss" src="./menu.scss" scoped></style>
