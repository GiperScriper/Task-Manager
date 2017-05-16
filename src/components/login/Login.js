const Login = {
  data() {
    return {
      user: { email: 'nick@gmail.com', password: 'newpassword' },
    };
  },
  methods: {
    submitLoginForm() {
      this.$http.post('http://localhost:3000/users/login', this.user)
        .then((response) => {
          const token = response.headers.get('x-auth');
          console.log('response', token);
          // save to local storage
          window.localStorage.setItem('token', token);
        })
        .catch((error) => {
          console.log('error', error);
        });
    },
  },
};

export default Login;
