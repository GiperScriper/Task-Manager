<template>
<!-- <div class="container">
  <form v-on:submit.prevent="submitLoginForm()">
    <div class="form-group row">
      <div class="col-sm-5">
        <input type="email" class="form-control form-control-lg" v-model="user.email" placeholder="email...">
      </div>
    </div>
    <div class="form-group row">
      <div class="col-sm-5">
        <input type="password" class="form-control form-control-lg" v-model="user.password" placeholder="password...">
      </div>
    </div>
    <div class="form-group row">
      <div class="col-sm-5">
        <button type="submit" class="btn btn-primary">Login</button>
      </div>
    </div>
  </form>
</div> -->
<main>
  <div class="container">
    <div class="row">
      <div class="login">
        <form class="login-form form" v-on:submit.prevent="submitLoginForm()">
          <div class="form-title">
            <img src="../../assets/logo.png" alt="logo" class="form-logo">
          </div>
          <div class="form-group">
            <input type="email" class="form-input" v-model="user.email" placeholder="type your email">
          </div>
          <div class="form-group">
            <input type="password" class="form-input" v-model="user.password" placeholder="type your password">
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
<style lang="scss" src="./login.scss"></style>
