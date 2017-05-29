import Search from './components/common/search/Search.vue';
import Auth from './components/common/auth';

const App = {
  mounted() {
    const token = Auth.IsAuthenticated();
    if (token) {
      Auth.getCurrentUser(this);
      this.isAuthenticated = true;
    }
  },
  data() {
    return {
      currentState: '',
      isAuthenticated: '',
    };
  },
  computed: {
    mainAppView() {
      return this.$store.getters.currentState !== 'login';
    },
  },
  components: {
    Search,
  },
};

export default App;
