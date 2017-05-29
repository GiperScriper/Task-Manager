class Auth {
  static login(ctx, credentials) {
    ctx.$http.post('http://localhost:3000/users/login', credentials)
        .then((response) => {
          const token = response.body.token;
          const user = response.body.user;
          // save token local storage
          window.localStorage.setItem('token', token);
          ctx.$store.commit('signIn');
          ctx.error.message = '';
          ctx.$router.push({ name: 'dashboard' });
        })
        .catch((error) => {
          ctx.error.message = 'email or password are invalid';
        });
  }

  static getCurrentUser(ctx) {
    ctx.$http.get('http://localhost:3000/users/current')
    .then((response) => {
      ctx.$store.dispatch('setUser', response.body);
    })
    .catch((error) => {});
  }

  static IsAuthenticated() {
    return window.localStorage.getItem('token');
  }

  static logout(router) {
    window.localStorage.removeItem('token');
    router.push('login');
  }

}

export default Auth;
