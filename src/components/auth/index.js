class Auth {
  static login(ctx, credentials) {
    ctx.$http.post('http://localhost:3000/users/login', credentials)
        .then((response) => {
          const token = response.body.token;
          console.log('response from auth module', token);
          console.log('user', response.body.user);
          // save token local storage
          window.localStorage.setItem('token', token);
          ctx.$router.push({ name: 'dashboard' });
        })
        .catch((error) => {
          console.log('error', error);
          ctx.error.message = 'email or password are invalid';
        });
  }
}

export default Auth;
