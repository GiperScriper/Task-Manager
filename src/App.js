import Search from './components/common/search/Search.vue';

const App = {
  mounted() {
    const token = window.localStorage.getItem('token');
    if (token) {
      this.$store.commit('setUserIsAuthenticated');
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
  },
  components: {
    Search,
  },
};

export default App;
