<template>
<main>
  <div class="container">
    <div class="row">
      <div class="login">
        <form class="login-form form" v-on:submit.prevent="submitLoginForm()">
          <div class="form-title">
            <img src="../../assets/logo.png" alt="logo" class="form-logo">
          </div>
          <div class="form-group">
            <input type="email" class="form-input" v-model="user.email" placeholder="username or email">
          </div>
          <div class="form-group">
            <input type="password" class="form-input" v-model="user.password" placeholder="password">
          </div>
          <div class="form-group">
            <button type="submit" class="btn btn-block">Login</button>
          </div>
        </form>
      </div>
    </div>
  </div>
</main>
</template>

<script src="./Login.js"></script>
<style lang="scss" src="./login.scss">
</style>
