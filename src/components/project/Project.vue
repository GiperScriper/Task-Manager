<template>
<div class="projects">

  <div class="card">
    <div class="card-project">
      <div class="card-header">
        <h3>Project name</h3>
        <div class="card-control">
          <button type="button" name="button">
            <icon name="pencil-square-o" class="card-edit" scale="1"></icon>
          </button>
          <button type="button" name="button">
            <icon name="trash-o" class="card-close" scale="1"></icon>
          </button>
        </div>
      </div>
      <div class="card-body">
        <p>
          But I must explain to you how all this mistaken idea of denouncing pleasure and praising pain was born and I will give you a complete account of the system
        </p>
      </div>
      <div class="card-footer">
        <span class="card-members">Members: 12<icon name="user-circle-o" class="card-users" scale=".8"></icon></span>
        <time class="card-date"><icon name="calendar" class="card-calendar" scale=".8"></icon>6 Jun, 2017</time>
      </div>
    </div>

    <!-- <div class="card-delete">
      <div class="card-warning">
        <p>
          This action <span>cannot</span> be undone. This will permanently delete the <span>Project Name</span> project, tasks, and etc.
        </p>
      </div>
      <form class="card-form card-form--delete" action="index.html" method="post">
        <div class="card-input">
          <label for="project-name">Please type project name:</label>
          <input type="text" name="project-name" value="" id="project-name">
        </div>
        <div class="card-footer card-footer--create">
          <button class="card-btn card-btn--cancel" type="button" name="button">cancel</button>
          <button class="card-btn" type="button" name="button">delete</button>
        </div>
      </form>
    </div> -->

  </div>

  <div class="card card-add">
    <!-- <button type="button" name="button">
      <icon name="plus-circle" class="card-plus" scale="5"></icon>
    </button> -->

    <div class="card-create">
      <form class="card-form" action="index.html" method="post">
        <div class="card-input">
          <label for="project-name">Project name:</label>
          <input type="text" name="project-name" value="" id="project-name">
        </div>
        <div class="card-input">
          <label for="project-description">Description:</label>
          <textarea name="name" rows="5"></textarea>
        </div>
        <div class="card-footer card-footer--create">
          <button class="card-btn card-btn--cancel" type="button" name="button">cancel</button>
          <button class="card-btn" type="button" name="button">create</button>
        </div>
      </form>
    </div>
    
  </div>

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
<style lang="scss" src="./project.scss" scoped></style>
