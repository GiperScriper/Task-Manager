<template>
<div>
  <div v-for="project in projects">
    <h2>{{ project.title }}</h2>
    <h3>{{ project.description }}</h3>
     <h3>{{ project.createdAt | date }}</h3>
  </div>

  <!-- Create project -->
  <div v-for="project in projects">
   <button>Create</button>
  </div>
  <!-- / Create project -->

</div>
</template>

<script src="./Project.js"></script>
<style lang="scss" scoped></style>
