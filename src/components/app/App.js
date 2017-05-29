import NavMenu from '../common/menu/Menu.vue';
import Search from '../common/search/Search.vue';
import Auth from '../common/auth';

const App = {
  mounted() {
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
    NavMenu,
    Search,
  },
};

export default App;
