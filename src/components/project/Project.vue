<template>
<div class="projects">

  <div class="card" v-for="project in projects">
    <div class="card-project" v-show="!(project._id === currentProject._id && isOpenDeleteDialog)">
      <div class="card-header">
        <h3>{{ project.title }}</h3>
        <div class="card-control" v-if="project._creator === user._id">
          <button type="button" name="button">
            <icon name="pencil-square-o" class="card-edit" scale="1"></icon>
          </button>
          <button type="button" name="button" @click="showDeleteDialog(project)">
            <icon name="trash-o" class="card-close" scale="1"></icon>
          </button>
        </div>
      </div>
      <div class="card-body">
        <p>{{ project.description }}</p>
      </div>
      <div class="card-footer">
        <span class="card-members">Members: {{ project.members.length }}<icon name="user-circle-o" class="card-users" scale=".8"></icon></span>
        <time class="card-date"><icon name="calendar" class="card-calendar" scale=".8"></icon>7 Jun, 2017</time>
      </div>
    </div>

    <div class="card-delete" v-if="project._id === currentProject._id && isOpenDeleteDialog">
      <div class="card-warning">
        <p>
          This action <span>cannot</span> be undone. This will permanently delete the <span>{{ currentProject.title }}</span> project, tasks, and etc.
        </p>
      </div>
      <form class="card-form card-form--delete" v-on:submit.prevent="deleteProject()" novalidate>
        <div class="card-input">
          <label for="project-name">Please type project name:</label>
          <input type="text" v-model="projectNameConfirmation">
        </div>
        <div class="card-footer card-footer--create">
          <button class="card-btn card-btn--cancel" type="button" @click="closeDeleteDialog">cancel</button>
          <button class="card-btn" type="submit" :disabled="!isConfirmed">delete</button>
        </div>
      </form>
    </div>

  </div>

  <div class="card card-add">
     <button type="button" name="showAddDialog" @click="showAddDialog" v-show="!isOpenAddDialog">
      <icon name="plus-circle" class="card-plus" scale="5"></icon>
    </button>

    <div class="card-create" v-show="isOpenAddDialog">
      <form class="card-form" v-on:submit.prevent="createProject()" novalidate>
        <div class="card-input">
          <label for="project-name">Project title:</label>
          <input type="text" v-model="project.title">
        </div>
        <div class="card-input">
          <label for="project-description">Description:</label>
          <textarea rows="5" v-model="project.description"></textarea>
        </div>
        <div class="card-footer card-footer--create">
          <button class="card-btn card-btn--cancel" type="button" @click="closeAddDialog">cancel</button>
          <button class="card-btn" type="submit" :disabled="isProjectEmpty">
            create
          </button>
        </div>
      </form>
    </div>
  </div>

</div>
</template>

<script src="./Project.js"></script>
<style lang="scss" src="./project.scss" scoped></style>
