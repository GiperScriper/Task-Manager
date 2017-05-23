import Auth from '../auth';

const data = {
  user: { email: 'nick@gmail.com', password: 'newpassword' },
};

const Login = {
  data() {
    return data;
  },
  methods: {
    submitLoginForm() {
      Auth.login(this, this.user);
    },
  },
};

export default Login;
