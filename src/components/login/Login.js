import Auth from '../auth';

const Login = {
  data() {
    return {
      user: { email: 'nick@gmail.com', password: 'newpassword' },
    };
  },
  methods: {
    submitLoginForm() {
      Auth.login(this, this.user);
    },
  },
};

export default Login;
