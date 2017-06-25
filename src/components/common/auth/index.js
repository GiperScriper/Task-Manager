import { urls } from '../../../config';

class Auth {
  static login(ctx, credentials) {
    ctx.$http.post(urls.login, credentials)
        .then((response) => {
          const { user, token } = response.body;
          // save token local storage
          window.localStorage.setItem('token', token);
          ctx.$store.dispatch('setUser', user);
          ctx.error.message = '';
          ctx.$router.push({ name: 'dashboard' });
        })
        .catch((error) => {
          ctx.error.message = 'email or password are invalid';
        });
  }

  static getCurrentUser(ctx) {
    ctx.$http.get(urls.currentUser)
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
