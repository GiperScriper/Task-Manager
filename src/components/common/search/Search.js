import DropdownMenu from '../dropdown/DropdownMenu.vue';

const Search = {
  data() {
    return {
      isOpenMenu: true,
    };
  },
  methods: {
    toggle() {
      this.isOpenMenu = !this.isOpenMenu;
      this.$store.dispatch('setMenuState', this.isOpenMenu);
    },
  },
  components: {
    DropdownMenu,
  },
};

export default Search;
