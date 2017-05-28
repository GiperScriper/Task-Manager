import Search from './components/common/search/Search.vue';
import auth from './components/common/auth';

const App = {
  mounted() {
    const token = window.localStorage.getItem('token');
    if (token) {
      auth.getCurrentUser(this);
    }
  },
  data() {
    return {
      currentState: '',
    };
  },
  computed: {
    user() {
      return this.$store.getters.user;
    },
    mainAppView() {
      return this.$store.getters.currentState !== 'login';
    },
  },
  components: {
    Search,
  },
};

export default App;
