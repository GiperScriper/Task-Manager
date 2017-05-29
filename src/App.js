import Search from './components/common/search/Search.vue';
import Auth from './components/common/auth';

const App = {
  beforeCreate() {
    const token = Auth.IsAuthenticated();
    if (token) {
      Auth.getCurrentUser(this);
      this.$store.commit('signIn');
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
