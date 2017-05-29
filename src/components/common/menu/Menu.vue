<template>
<div>
  <div>
     <hr />
    <ul>
      <li>
        <router-link :to="{ name: 'dashboard' }">Dashboard</router-link>
      </li>
      <li>
        <router-link :to="{ name: 'projects' }">Projects</router-link>
      </li>
    </ul>
  </div>
</div>
</template>
<style lang="scss" src="./menu.scss" scoped></style>
