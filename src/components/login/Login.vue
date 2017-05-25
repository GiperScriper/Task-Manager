<template>
<div class="container">
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
</div>
</template>

<script src="./Login.js"></script>
<style lang="scss" scoped src="./login.scss">
</style>
