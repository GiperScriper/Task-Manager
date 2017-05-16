class Auth {
  static login(ctx, credentials) {
    ctx.$http.post('http://localhost:3000/users/login', credentials)
        .then((response) => {
          const token = response.headers.get('x-auth');
          console.log('response from auth module', token);
          // save token local storage
          window.localStorage.setItem('token', token);
          ctx.$router.push({ name: 'dashboard' });
        })
        .catch((error) => {
          console.log('error', error);
        });
  }
}

export default Auth;
