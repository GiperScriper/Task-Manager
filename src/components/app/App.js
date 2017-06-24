import NavMenu from '../common/menu/Menu.vue';
import Search from '../common/search/Search.vue';
import Auth from '../common/auth';
import Spinner from '../common/spinner/Spinner.vue';

const App = {
  mounted() {
    const token = Auth.IsAuthenticated();
    if (token) {
      Auth.getCurrentUser(this);
      // this.$store.commit('signIn');
    }
  },
  data() {
    return {
      currentState: '',
    };
  },
  computed: {
    mainAppView() {
      return this.$store.getters.currentState !== 'login';
    },
    isOpenMenu() {
      return this.$store.getters.isOpenMenu;
    },
  },
  components: {
    NavMenu,
    Search,
    Spinner,
  },
};

export default App;
