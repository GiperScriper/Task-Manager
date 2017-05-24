import Auth from '../auth';

const data = {
  user: { email: '', password: '' },
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
