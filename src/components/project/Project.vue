<template>
<div class="projects" v-if="!isLoading">
  <h2 class="projects-title">
    <icon name="circle" class="card-users" scale=".8" :style="{ 'color': '#3695ff' }"></icon> Projects ({{ projects.length }})
  </h2>

  <div class="projects-cards">
    <div class="card" v-for="project in projects">
      <div class="card-project" v-show="project._id !== currentProject._id" @click="openProjectDetailPage(project._id)">
        <div class="card-header" :style="{ 'border-top-color': project.borderTopColor }">
          <h3 :title="project.title">{{ project.title }}</h3>
          <div class="card-control" v-if="project._creator === user._id">
            <button class="card-delete__btn" type="button" name="button" @click="showDeleteDialog(project, $event)" v-if="!isOpenDeleteDialog">
              <icon name="trash-o" class="card-icon" scale="1"></icon>
            </button>
          </div>
        </div>
        <div class="card-body">
          <p>{{ project.description }}</p>
        </div>
        <div class="card-footer">
          <span class="card-members"><icon name="user-circle-o" class="card-users" scale="1"></icon>{{ project.members.length }}</span>
          <time class="card-date"><icon name="calendar" class="card-calendar" scale=".8"></icon>{{ project.createdAt | date(dateFormat) }}</time>
        </div>
      </div>

      <transition name="fade" v-on:after-leave="afterLeaveDeleteDialog">
        <div class="card-delete" v-if="project._id === currentProject._id && isOpenDeleteDialog">
          <div class="card-warning">
            <p>
              This action <span>cannot</span> be undone. This will permanently delete the
              <span :title="currentProject.title">{{ currentProject.title | truncate(lengthLimit) }}</span> project, tasks, and etc.
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
      </transition>

    </div>

    <div class="card card-add" :class="{ 'card-add--open' : isOpenAddDialog }">
      <div class="card-button--create" @click="showAddDialog" v-show="!isOpenAddDialog && isLeaveAddDialog">
        <icon name="plus-circle" class="card-plus" scale="5"></icon>
      </div>

      <transition name="fade" v-on:after-leave="afterLeaveCreateDialog">
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
      </transition>
    </div>
  </div>

</div>
</template>

<script src="./Project.js"></script>
<style lang="scss" src="./project.scss" scoped></style>
