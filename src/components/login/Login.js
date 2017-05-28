import Auth from '../common/auth';

const data = {
  user: { email: '', password: '' },
  error: { message: '' },
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
