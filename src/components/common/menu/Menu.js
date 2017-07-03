import Auth from '../../common/auth';

const Menu = {
  methods: {
    logout() {
      Auth.logout(this.$router);
    },
  },
  computed: {
    isMenuOpened() {
      return this.$store.getters.isOpenMenu;
    },
  },
};

export default Menu;
